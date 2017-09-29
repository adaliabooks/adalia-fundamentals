//Chat Functions

function setFriendsSearchJoinDate()
{
    addGlobalStyle('.af-friends-rectangle.user-rectangle { height: 65px; }');
    var friendsScope = unsafeWindow.angular.element(document.querySelectorAll('.user-rectangle.user-rectangle--no-details.invite-result')).scope();
    unsafeWindow.showDateOn = settings.get('chat-join-date-friends');
    debugLogger.debugLog("Before $compile function");
    contentEval(function() {
        angular.element(document).injector().invoke(function($compile) {
            var debugEvent = new CustomEvent("debugLog",{ detail: "In $compile"});
            document.dispatchEvent(debugEvent);
            var friendsScope = angular.element(document.querySelectorAll('.user-rectangle.user-rectangle--no-details.invite-result')).scope();
            friendsScope.showDate = function()
            {
                if (window.showDateOn)
                    return true;
                else
                    return false;
            }
            friendsScope.formatDate = function(user)
            {
                var monthNames = [
                    "Jan", "Feb", "Mar",
                    "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct",
                    "Nov", "Dec"
                ];
                var date = new Date(user.dateUserJoined * 1000);
                //var date = new Date(created_date);
                return ("Registered: " + monthNames[date.getMonth()] + " " + date.getFullYear());
            }
            window.friendsBoxDateCompiled = $compile('<figure class="user-rectangle user-rectangle--no-details invite-result invite__result" ng-class="{true: \'af-friends-rectangle\', false: \'\'}[showDate()]" ng-controller="searchResultUserCtrl as searchResult" ng-show="search.showResults" ng-cloak ><div><img class="avatar user-rectangle__avatar" ng-if="search.showResults" ng-srcset="{{ searchResult.user.imageUrl }} , {{ searchResult.user.imageUrlRetina }} 2x" alt="" ><i class="_spinner is-spinning user-rectangle__spinner user-rectangle__right" ng-show="searchResult.waitingForMoreData"></i><div class="user-rectangle__right" ng-hide="searchResult.waitingForMoreData"><span class="invite-result__pending" ng-show="searchResult.user.isInvited" >Pending invitation...</span><span ng-show="searchResult.user.isFriend" class="invite-result__friends-since"><i class="ic icon-friends invite-result__friend-icon"></i>Friends since {{ searchResult.user.dateUserFriended | toMilis | date:&quot;MMM yyyy&quot; }} </span><span ng-show="searchResult.showOptions"><a class="btn invite-result__btn" ng-href="{{ searchResult.user.chatUrl }}" >Chat</a><span class="btn btn--green invite-result__btn" ng-show="searchResult.user.isAnonymous" ng-click="searchResult.inviteToFriends()" >Invite</span><span class="btn btn--green invite-result__btn" ng-show="searchResult.user.isAwaiting" ng-click="searchResult.acceptInvitation()" >accept</span></span></div><p class="user-name user-rectangle__name" ng-bind="searchResult.user.name"></p></div><div ng-show="showDate()" class="af-joindate-box"><h2 class="message__header__name user-name af-user-since-box">{{ formatDate(searchResult.user) }}</h2></div></figure>')(friendsScope);
        });
    });

    $('.user-rectangle.user-rectangle--no-details.invite-result').replaceWith(unsafeWindow.friendsBoxDateCompiled);

    friendsScope.$apply();

    function on_update(value)
    {
		unsafeWindow.showDateOn = value;
	}
    settings.onchange('chat-join-date-friends', on_update);
}

function setChatOptionsBar()
{
    var currentUserData;
    function receiveMessage(event)
    {
        if (event.origin !== "https://chat.gog.com")
            return;

        var eventData = JSON.parse(event.data);
        if (eventData.action == "chat.rooms.openRoom")
        {
            debugLogger.debugLog(eventData);
            $.ajax({
                type: 'POST',
                url: 'https://www.gog.com/friends/search',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify({"query": eventData.data.name})
            }).done(function( data ) {
                currentUserData = data;
                updateChatDetailsBox(data);
            }).fail(function() {
                var iframe = $('.chat-frame')[0].contentWindow;
                iframe.postMessage('{"action":"chat.rooms.afSendRoomData"}', "https://chat.gog.com");
            });
            /*
            $.ajax({
                type: 'POST',
                url: 'https://users.gog.com/users/' + eventData.data.id
            }).done(function( data ) {
                data = JSON.parse(data);
                currentUserData = data;
                updateChatDetailsBox(data);
            }).fail(function() {
                var iframe = $('.chat-column__content')[0].contentWindow;
                iframe.postMessage('{"action":"chat.rooms.afSendRoomData"}', "https://chat.gog.com");
            });
            */
        }
        else if (eventData.action == "chat.rooms.roomDataSent")
        {
            debugLogger.debugLog(eventData);
            var newData = eventData.data;
            newData.isRoom = true;
            updateChatDetailsBox(newData);
        }
        else if (eventData.action == "chat.messages.transcriptSent")
        {
            function openWindow() {
                contentEval(function () {
                    var newWindow = window.open("", null, "height=600,width=600,status=yes,toolbar=no,menubar=no,location=no,centerscreen=yes,scrollbars=yes");
                    newWindow.document.write(JSON.parse(window.transcript));
                })
            }
            var newData = eventData.data;
            var popup = $('<div>');
            for (var i = 0; i < newData.length; i++)
            {
                var message = $('<div>');
                message.append('<img src="' + newData[i].from.images.medium + '">');
                var secondDiv = $('<div style="display: inline">');
                secondDiv.append('<h2>' + newData[i].from.username + '</h2>');
                secondDiv.append('<p><span>' + newData[i]._date + '</span></p>');
                message.append(secondDiv);
                message.append('<p>' + newData[i].content + '</p>');
                popup.append(message);
            }
            unsafeWindow.transcript    = cloneInto (JSON.stringify($(popup).prop('outerHTML')), unsafeWindow);
            openWindow();
        }
        else if (eventData.action == "chat.rooms.hidePerson")
        {
            var hiddenList = JSON.parse(settings.get('chat-filter-names'));
            hiddenList.push(eventData.data);
            settings.set('chat-filter-names', JSON.stringify(hiddenList));
        }
        else if (eventData.action == "chat.rooms.unhidePerson")
        {
            var hiddenList = JSON.parse(settings.get('chat-filter-names'));
            var index = hiddenList.indexOf(eventData.data);
            if (index > -1) {
                hiddenList.splice(index, 1);
            }
            settings.set('chat-filter-names', JSON.stringify(hiddenList));
        }
    }
    window.addEventListener("message", receiveMessage, false);

    function on_update(value)
    {
        $('.af-chat-box').remove();
        if (value)
        {
            createChatOptionsBox(currentUserData);
        }
    }

    settings.onchange('chat-options-bar', on_update);
}

function setChatRoomSort()
{
    function on_update(value)
    {
        if (settings.get('chat-options-bar'))
        {
            $('#af-chat-sort-dropdown').val(value);
        }
        var iframe = $('.chat-frame')[0].contentWindow;
        if (value == "online-first")
        {
            iframe.postMessage('{"action":"chat.rooms.sortChanged", "onlineFirst" : true}', "https://chat.gog.com");
        }
        else
        {
            iframe.postMessage('{"action":"chat.rooms.sortChanged", "onlineFirst" : false}', "https://chat.gog.com");
        }
    }

    $('.chat-frame').load(function() {
        settings.onchange('chat-rooms-sort', on_update);
    });
}

function setChatRoomNamesFilter()
{
    function on_update(value)
    {
        var iframe = $('.chat-frame')[0].contentWindow;
        iframe.postMessage('{"action":"chat.rooms.afFilterNamesChanged", "filterNamesList" : ' + JSON.stringify(value) + '}', "https://chat.gog.com");
    }

    $('.chat-frame').load(function() {
        settings.onchange('chat-filter-names', on_update);
    });
}

function setChatEnterToSend()
{
    function on_update(value)
    {
        var iframe = $('.chat-frame')[0].contentWindow;
        iframe.postMessage('{"action":"chat.messages.enterChanged", "enterToSend" : ' + value + '}', "https://chat.gog.com");
    }

    $('.chat-frame').load(function() {
        settings.onchange('chat-disable-enter-to-send', on_update);
    });
}

function updateChatDetailsBox(data)
{
    if(data != undefined)
    {
        if (!data.isRoom)
        {
            var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
            ];
            $('.af-chat-box-username').text(data.username);
            $('.af-chat-box-avatar').attr("src",data.avatars.small2x);
            var date = new Date(data.userSince * 1000);
            //var date = new Date(created_date);
            $('.af-user-since-box').text("Registered: " + monthNames[date.getMonth()] + " " + date.getFullYear());
        }
        else if (data.isRoom)
        {
            $('.af-chat-box-username').text(data.name);
            $('.af-chat-box-avatar').attr("src",data.images.medium2x);
            $('.af-user-since-box').html("Registered: Data cannot be retrieved<br> due to privacy settings");
        }
    }
}

function createChatOptionsBox(data)
{
    addGlobalStyle('.af-chat-box { padding-top: 10px }');
    addGlobalStyle('.af-chat-label { margin-left: 5px; display: inline-block; width: 30%; }');
    addGlobalStyle('.af-chat-checkbox { display: inline-block; float: right; margin-top: 4px; }');
    addGlobalStyle('.af-chat-options,.af-chat-sort { float: left; width:50% }');
    addGlobalStyle('.af-chat-details { display: inline; float: right; width: 50%; color: #262626 }');
    addGlobalStyle('.af-chat-box-avatar { width: 25px; height: 25px; }');
    addGlobalStyle('.af-chat-box-username { margin-top: 0; text-transform: none; }');
    addGlobalStyle('.af-user-since-box { text-transform: none; margin-left: 30px; }');
    addGlobalStyle('.af-chat-transcript-button { font-size: 12px; float: right; margin-top: 7px; margin-right: 20px; }');
    var box = $('<div class="page-header module-header cf af-chat-box"><div class="module-header-in cf"> <div class="af-chat-options"><div class="af-chat-sort"> <label>Room Sort by:<select id="af-chat-sort-dropdown" name="chat-sort-dropdown" style="margin-left: 20px"> <option value="last-active">Last Active</option> <option value="online-first">Online First</option> </select></label></div><div class="af-chat-filter" style="float: right; width:50%"> <label class="af-chat-label">Online<input class="af-chat-checkbox" type="checkbox" value="onlineCheckBox" id="onlineCheckBox"></label><label class="af-chat-label">Unread<input class="af-chat-checkbox" type="checkbox" value="unreadCheckBox" id="unreadCheckBox"></label></div></div><div class="af-chat-details"> <div style="float: left;"><img class="message__avatar avatar af-chat-box-avatar" src=""><div class="message__header" style="display: inline;"> <h2 class="message__header__name user-name af-chat-box-username">USERNAME</h2><h2 class="message__header__name user-name af-user-since-box">Registered: </h2> </div></div><button id="afTranscriptButton" class="af-chat-transcript-button">Chat Transcript</button></div></div></div>');
    //Friends Checkbox (not usable)
    //<label class="af-chat-label">Friends<input class="af-chat-checkbox" type="checkbox" id="friendsCheckBox" value="friendsCheckBox"></label><br>
    var staffTag = $('<span class="user-name__flag">GOG</span>');
    $(box).insertAfter('.page-header');

    $('#af-chat-sort-dropdown').change(function() {
        settings.set('chat-rooms-sort', $(this).find('option:selected').val());
    });

    $('#onlineCheckBox').change(function() {
        var iframe = $('.chat-frame')[0].contentWindow;
        if ($(this).is(":checked"))
        {
            iframe.postMessage('{"action":"chat.rooms.filterChanged", "filters" : {"online": true}}', "https://chat.gog.com");
        }
        else
        {
            iframe.postMessage('{"action":"chat.rooms.filterChanged", "filters" : {"online": false}}', "https://chat.gog.com");
        }
    });

    $('#unreadCheckBox').change(function() {
        var iframe = $('.chat-frame')[0].contentWindow;
        if ($(this).is(":checked"))
        {
            iframe.postMessage('{"action":"chat.rooms.filterChanged", "filters" : {"unread": true}}', "https://chat.gog.com");
        }
        else
        {
            iframe.postMessage('{"action":"chat.rooms.filterChanged", "filters" : {"unread": false}}', "https://chat.gog.com");
        }
    });

    $('#afTranscriptButton').click(function() {
        var iframe = $('.chat-frame')[1].contentWindow;
        iframe.postMessage('{"action":"chat.messages.fetchTranscript"}', "https://chat.gog.com");
    });

    updateChatDetailsBox(data);
}

function roomsFilterAndSort()
{
    unsafeWindow.afChatSort = settings.get('chat-rooms-sort');
    unsafeWindow.afFilterNamesList = settings.get('chat-filter-names');
    contentEval(function(){
        angular.element(document.querySelectorAll('.rooms__list-container')).injector().invoke(function($compile, $templateCache) {
            var roomsScope = angular.element(document.querySelectorAll('.rooms__list-container')).scope();
            if (window.afChatSort == "online-first")
                {
                  roomsScope.afOnlineFirst = true;
                }
            else
                {
                    roomsScope.afOnlineFirst = false;
                }
            roomsScope.afFilteredNames = window.afFilterNamesList;
            if (roomsScope.afFilteredNames == undefined)
                roomsScope.afFilteredNames = [];
            else
                roomsScope.afFilteredNames = JSON.parse(window.afFilterNamesList);
            roomsScope.afFilter = function(room)
            {
                if (room.participantBlocked)
                    return false;
                for (var i = 0; i < roomsScope.afFilteredNames.length; i++)
                {
                    if (room.name == roomsScope.afFilteredNames[i] && room.isUnread)
                    {
                        roomsScope.afUnHidePerson(room.name);
                        return true;
                    }
                    else if (room.name == roomsScope.afFilteredNames[i] && !room.isUnread)
                    {
                        return false;
                    }
                }
                return true;
            }
            roomsScope.afHidePerson = function(name)
            {
                window.parent.postMessage('{"action":"chat.rooms.hidePerson", "data" : ' + JSON.stringify(name) + '}', "https://www.gog.com");
            }
            roomsScope.afUnHidePerson = function(name)
            {
                window.parent.postMessage('{"action":"chat.rooms.unhidePerson", "data" : ' + JSON.stringify(name) + '}', "https://www.gog.com");
            }
            window.compiledRooms = $compile('<ul class="rooms__list" ng-cloak ng-controller="oldConversationActionsOnListCtrl as action"> <li class="room" ng-repeat="room in (afOnlineFirst ? (rooms.list | orderBy:[\'participantBlocked\', \'-isUnread\',\'-online\',\'-lastActive\'] | filter:rooms.filter | filter:afFilter) : (rooms.list | orderBy:[\'participantBlocked\', \'-isUnread\',\'-lastActive\',\'-online\'] | filter:rooms.filter | filter:afFilter)) track by room.id" ng-click="rooms.openRoom(room.url, room.name, room.id)" ng-class="{\'room--no-status-text\': !room.statusText, \'is-current\': room.isCurrent, \'is-unread\': room.unreadMessages, \'is-online\': room.online && !room.participantBlocked}" > <img class="room__avatar avatar" ng-srcset="[[ ::room.images.medium]] , [[ ::room.images.medium2x]] 2x"> <div class="_dropdown is-contracted small-dropdown room__right room__dropdown" gog-dropdown gog-dropdown-collision ng-click="$event.stopPropagation()" > <div class="_dropdown__toggle small-dropdown__btn room__square"> <i class="ic icon-dropdown-down"></i> <i class="_dropdown__pointer-up small-dropdown__pointer"></i> </div><span class="_dropdown__items small-dropdown__items js-collision-measure"> <div class="_dropdown__item" ng-click="action.toggleParticipantBlock( room.secondParticipant )"> <span ng-hide="action.usersBlockState[room.secondParticipant]">Block this person</span> <span ng-show="action.usersBlockState[room.secondParticipant]">Unblock this person</span> </div><div class="_dropdown__item" ng-click="afHidePerson( room.name );">Hide this Person </div><div class="_dropdown__item" ng-click="action.clearRoom( room.id );rooms.clearUnread(room.id);"> Clear conversation </div></span></div><div class="room__right room__square room__unread-count" ng-bind="room.unreadMessages"></div><h2 class="room__name user-name user-name--with-status"> [[ ::room.name]] <span class="user-name__flag" ng-hide="::!room.isEmployee">GOG</span> </h2> <p class="room__status-text small-grey-text" ng-hide="room.participantBlocked" ng-bind="room.statusText" ></p><p class="room__status-text small-grey-text" ng-show="room.participantBlocked" >Blocked</p></li></ul>')(roomsScope);
        });

        function receiveMessage(event)
        {
            if (event.origin !== "https://www.gog.com")
                return;

            var eventData = JSON.parse(event.data);
            var roomsScope = angular.element(document.querySelectorAll('.rooms__list-container')).scope();
            if (eventData.action == "chat.rooms.sortChanged")
            {
                roomsScope.$apply(function() {
                    roomsScope.afOnlineFirst = eventData.onlineFirst;
                });
            }
            else if (eventData.action == "chat.rooms.filterChanged")
            {
                roomsScope.$apply(function() {
                    if (eventData.filters.hasOwnProperty('online'))
                    {
                        if (eventData.filters.online)
                        {
                            roomsScope.rooms.filter.online = "True";
                        }
                        else
                        {
                            delete roomsScope.rooms.filter.online;
                        }
                    }
                    if (eventData.filters.hasOwnProperty('unread'))
                    {
                        if (eventData.filters.unread)
                        {
                            roomsScope.rooms.filter.isUnread = "True";
                        }
                        else
                        {
                            delete roomsScope.rooms.filter.isUnread;
                        }
                    }
                });
            }
            else if (eventData.action == "chat.rooms.afSendRoomData")
            {
                var currentRoom = roomsScope.rooms._roomsListManager._getRoomById(roomsScope.rooms._roomsListManager._currentRoomId);
                event.source.postMessage('{"action":"chat.rooms.roomDataSent", "data" : ' + JSON.stringify(currentRoom) + '}', "https://www.gog.com");
            }
            else if (eventData.action == "chat.rooms.afFilterNamesChanged")
            {
                var roomsScope = angular.element(document.querySelectorAll('.rooms__list-container')).scope();
                roomsScope.$apply(function() {
                    roomsScope.afFilteredNames = JSON.parse(eventData.filterNamesList);
                });
            }
        }
        window.addEventListener("message", receiveMessage, false);
    });
    setTimeout(function() {
        $('.rooms__list').replaceWith(unsafeWindow.compiledRooms);
    }, 10);
}

function chatEnterButton()
{
    contentEval(function(){
        function receiveMessage(event)
        {
            if (event.origin !== "https://www.gog.com")
                return;

            var eventData = JSON.parse(event.data);
            var inputScope = angular.element(document.querySelectorAll(".chat-view__send-message")).scope();
            if (eventData.action == "chat.messages.enterChanged")
            {
                inputScope.$apply(function() {
                    inputScope.afEnterToSend = eventData.enterToSend;
                });
            }
            else if (eventData.action == "chat.messages.fetchTranscript")
            {
                var messageScope = angular.element(document.querySelectorAll(".conversation-view-messages")).scope();
                function recurringLoadMore()
                {
                    if (messageScope.messages._oldRoomMessages._thereAreMoreMessagesToLoad)
                    {
                        messageScope.messages.triggerLoadingMore();
                        setTimeout(recurringLoadMore, 500);
                    }
                    else
                    {
                        event.source.postMessage('{"action":"chat.messages.transcriptSent", "data" : ' + JSON.stringify(messageScope.messages._oldRoomMessages._messages) + '}', "https://www.gog.com");
                        return;
                    }
                }

                recurringLoadMore();
            }
        }
        window.addEventListener("message", receiveMessage, false);
    });
    setTimeout(function() {
        unsafeWindow.angular.element(document.querySelectorAll(".chat-send-message__input")).unbind('keydown');
        var inputScope = unsafeWindow.angular.element(document.querySelectorAll(".chat-view__send-message")).scope();
        function newHandleKeyDown(e)
        {
            if (!inputScope.afEnterToSend)
            {
                if (e.keyCode === 13 && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    inputScope.sendMessage.sendMessage();
                    inputScope.$apply();
                }
            }
            else
            {
                if (e.keyCode === 13 && !e.shiftKey && e.ctrlKey && !e.metaKey && !e.altKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    inputScope.sendMessage.sendMessage();
                    inputScope.$apply();
                }
            }
        };
        $('.chat-send-message__input').bind('keydown', newHandleKeyDown);
    }, 100);
}

//End of Chat Functions

// Forum Search Bar
function checkIsForumPage()
{
    if(!$('.n_b_t_main_2').length)
    {
        debugLogger.debugLog('Forum');
        return true;
    }
    else
    {
        debugLogger.debugLog('Thread');
        return false;
    }
}

function getNoResultForum()
{
    debugLogger.debugLog('Forum Search: No Results');
    return $('<div class="list_row_odd "><div class="last_update">now</div><div class="babel_h"><div class="babel niebieski_b_odd"></div></div><div class="topic_s" style="width: 642px;"><a href="" class="topic_s_a"><b>Sorry there are no results matching your query.</b> </a> </div><div class="created_by"> <span class="user is-data-pending user--block"><span class="user__avatar-container avatar--small avatar--in-text t_u_avatar_h"> <img class="avatar avatar--small avatar--in-text t_u_avatar_h" src="https://www.gog.com/upload/avatars/2008/07/1215790476123_t.jpg" alt=""> <i class="icon-pointer"></i></span> <span class="user__name ">GOG.com</span> <span class="user__data"> <span class="user__item user__item--header"> <img class="avatar user__header-avatar" alt=""> <span class="user__header-details"> <span class="user__name ">GOG.com</span> </span> <i class="_spinner user__header-spinner is-spinning"></i> </span> <span class="user__item user__item--error"> Sorry, data for given user is currently unavailable. Please, try again later. </span> <a ng-show="user.data.hasSharedWishlist" ng-href="" class="user__item user__item--action ng-hide">View wishlist</a> <a ng-href="" gog-login-required="" class="user__item user__item--action">Start conversation</a> <span ng-show="user.data.isAnonymous" ng-click="user.inviteToFriends(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Invite to friends</span><span ng-show="user.data.isAwaiting" ng-click="user.acceptInvitation(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Accept invitation</span> <span ng-show="user.data.isInvited" class="user__item user__item--status ng-hide">Pending invitation...</span> <span ng-show="!user.data.isFriend" class="user__item user__item--info ng-binding"> <i class="ic icon-friend"></i>User since  </span> <span ng-show="user.data.isFriend" class="user__item user__item--info ng-binding ng-hide"> <i class="ic icon-friends user__icon--friend"></i>Friends since  </span> </span> </span><!--<div class="t_u_avatar_h"><img src="--><!--" alt="--><!--" width="16" height="16"/></div>--><!--<div class="user_name">--><!----><!--</div>--></div><div class="clear"></div></div>');
}

function getNoResultThread()
{
    debugLogger.debugLog('Thread Search: No Results');
    return $('<div id="p_b_1" class="spot_h" style=";"><div class="big_post_h" style=""><div class="big_post_left"></div><div class="big_post_main"><div class="big_user_info"><div class="b_u_info_1"> <span class="user is-data-pending user--block"> <div class="b_p_avatar_h"><span class="user__avatar-container avatar--medium "> <img src="https://images.gog.com/9b1aae00838bf648d83b017801d926f025abf226278d1263e20fd8d0df154445_forum_avatar.jpg" alt="GOG.com" width="49" height="49"><i class="icon-pointer"></i></span> </div> <div class="b_u_name"><a href="http://www.gogwiki.com/wiki/Special:GOGUser/GOG.com" target="_blank">GOG.com</a></div> <div class="b_u_stat">Editor</div> <span class="user__data"> <span class="user__item user__item--header"> <img class="avatar user__header-avatar" alt=""> <span class="user__header-details"> <span class="user__name ">GOG.com</span> </span> <i class="_spinner user__header-spinner is-spinning"></i> </span> <span class="user__item user__item--error"> Sorry, data for given user is currently unavailable. Please, try again later. </span> <a ng-show="user.data.hasSharedWishlist" ng-href="" class="user__item user__item--action ng-hide">View wishlist</a> <a ng-href="" gog-login-required="" class="user__item user__item--action">Start conversation</a> <span ng-show="user.data.isAnonymous" ng-click="user.inviteToFriends(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Invite to friends</span><span ng-show="user.data.isAwaiting" ng-click="user.acceptInvitation(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Accept invitation</span> <span ng-show="user.data.isInvited" class="user__item user__item--status ng-hide">Pending invitation...</span> <span ng-show="!user.data.isFriend" class="user__item user__item--info ng-binding"> <i class="ic icon-friend"></i>User since  </span> <span ng-show="user.data.isFriend" class="user__item user__item--info ng-binding ng-hide"> <i class="ic icon-friends user__icon--friend"></i>Friends since  </span> </span> </span><div class="clear"></div></div></div><div class="big_post_content "><div class="post_header_h"><div class="post_date">Posted now</div>  </div><div class="post_text"><div class="post_text_c news_post"><span class="bold">Sorry, no results have been found to match your search query.</span>      </div></div> </div></div><div class="big_post_right"></div><div class="clear"></div></div></div>');
}

function getNumberOfResultsForum(pageStart, pageEnd, number, time)
{
    return $('<div class="list_row_odd "><div class="last_update">now</div><div class="babel_h"><div class="babel niebieski_b_odd"></div></div><div class="topic_s" style="width: 642px;"><a href="" class="topic_s_a"><b>Between page ' + pageStart + ' and page ' + pageEnd + ' there are ' + number + ' results, returned in ' + time + ' seconds</b> </a> </div><div class="created_by"> <span class="user is-data-pending user--block"><span class="user__avatar-container avatar--small avatar--in-text t_u_avatar_h"> <img class="avatar avatar--small avatar--in-text t_u_avatar_h" src="https://www.gog.com/upload/avatars/2008/07/1215790476123_t.jpg" alt=""></span> <span class="user__name ">GOG.com</span> <span class="user__data"> <span class="user__item user__item--header"> <img class="avatar user__header-avatar" alt=""> <span class="user__header-details"> <span class="user__name ">GOG.com</span> </span> <i class="_spinner user__header-spinner is-spinning"></i> </span> <span class="user__item user__item--error"> Sorry, data for given user is currently unavailable. Please, try again later. </span> <a ng-show="user.data.hasSharedWishlist" ng-href="" class="user__item user__item--action ng-hide">View wishlist</a> <a ng-href="" gog-login-required="" class="user__item user__item--action">Start conversation</a> <span ng-show="user.data.isAnonymous" ng-click="user.inviteToFriends(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Invite to friends</span><span ng-show="user.data.isAwaiting" ng-click="user.acceptInvitation(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Accept invitation</span> <span ng-show="user.data.isInvited" class="user__item user__item--status ng-hide">Pending invitation...</span> <span ng-show="!user.data.isFriend" class="user__item user__item--info ng-binding"> <i class="ic icon-friend"></i>User since  </span> <span ng-show="user.data.isFriend" class="user__item user__item--info ng-binding ng-hide"> <i class="ic icon-friends user__icon--friend"></i>Friends since  </span> </span> </span><!--<div class="t_u_avatar_h"><img src="--><!--" alt="--><!--" width="16" height="16"/></div>--><!--<div class="user_name">--><!----><!--</div>--></div><div class="clear"></div></div>');
}

function getNumberOfResultsThread(pageStart, pageEnd, number, time)
{
    return $('<div id="p_b_1" class="spot_h" style=";"><div class="big_post_h" style="padding-bottom: 0px;"><div class="big_post_left" style="height: 35px;"></div><div class="big_post_main"><div class="big_post_content "><div class="post_header_h"><div class="post_date">Between page ' + pageStart + ' and page ' + pageEnd + ' there are ' + number + ' results, returned in ' + time + ' seconds</div>  </div> </div></div><div class="big_post_right" style="height: 36px;"></div><div class="clear"></div></div></div>');
}

function getNumberOfResultsForumWithinResults(number, time)
{
    return $('<div class="list_row_odd "><div class="last_update">now</div><div class="babel_h"><div class="babel niebieski_b_odd"></div></div><div class="topic_s" style="width: 642px;"><a href="" class="topic_s_a"><b>On this page there are ' + number + ' results, returned in ' + time + ' seconds</b> </a> </div><div class="created_by"> <span class="user is-data-pending user--block"><span class="user__avatar-container avatar--small avatar--in-text t_u_avatar_h"> <img class="avatar avatar--small avatar--in-text t_u_avatar_h" src="https://www.gog.com/upload/avatars/2008/07/1215790476123_t.jpg" alt=""></span> <span class="user__name ">GOG.com</span> <span class="user__data"> <span class="user__item user__item--header"> <img class="avatar user__header-avatar" alt=""> <span class="user__header-details"> <span class="user__name ">GOG.com</span> </span> <i class="_spinner user__header-spinner is-spinning"></i> </span> <span class="user__item user__item--error"> Sorry, data for given user is currently unavailable. Please, try again later. </span> <a ng-show="user.data.hasSharedWishlist" ng-href="" class="user__item user__item--action ng-hide">View wishlist</a> <a ng-href="" gog-login-required="" class="user__item user__item--action">Start conversation</a> <span ng-show="user.data.isAnonymous" ng-click="user.inviteToFriends(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Invite to friends</span><span ng-show="user.data.isAwaiting" ng-click="user.acceptInvitation(); $event.stopPropagation()" class="user__item user__item--action ng-hide">Accept invitation</span> <span ng-show="user.data.isInvited" class="user__item user__item--status ng-hide">Pending invitation...</span> <span ng-show="!user.data.isFriend" class="user__item user__item--info ng-binding"> <i class="ic icon-friend"></i>User since  </span> <span ng-show="user.data.isFriend" class="user__item user__item--info ng-binding ng-hide"> <i class="ic icon-friends user__icon--friend"></i>Friends since  </span> </span> </span><!--<div class="t_u_avatar_h"><img src="--><!--" alt="--><!--" width="16" height="16"/></div>--><!--<div class="user_name">--><!----><!--</div>--></div><div class="clear"></div></div>');
}

function getNumberOfResultsThreadWithinResults(number, time)
{
    return $('<div id="p_b_1" class="spot_h" style=";"><div class="big_post_h" style="padding-bottom: 0px;"><div class="big_post_left" style="height: 35px;"></div><div class="big_post_main"><div class="big_post_content "><div class="post_header_h"><div class="post_date">On this page there are ' + number + ' results, returned in ' + time + ' seconds</div>  </div> </div></div><div class="big_post_right" style="height: 36px;"></div><div class="clear"></div></div></div>');
}

function splitSearchTerms()
{
    var searchText = $("#search_text_box").val();
    if ($("#exact_checkbox").prop('checked'))
    {
        return [["\\b"+searchText+"\\b"]];
    }
    else
    {
        var orTermsArray = searchText.split(';');
        var termsArray = [];
        for(var i = 0; i < orTermsArray.length; i++)
        {
            termsArray.push(orTermsArray[i].split('&'));
        }
        debugLogger.debugLog("Search Term Array: " + termsArray);
        return termsArray;
    }
}

function threadSearchBase()
{
    if($("#resultsSearch_checkbox").prop('checked'))
    {
        debugLogger.debugLog('Thread Search: Within Results');
        threadSearchWithinResults();
    }
    else
    {
        debugLogger.debugLog('Thread Search: Normal Search');
        threadSearch();
    }
}

function forumSearchBase()
{
    if($("#resultsSearch_checkbox").prop('checked'))
    {
        debugLogger.debugLog('Forum Search: Within Results');
        forumSearchWithinResults();
    }
    else
    {
        debugLogger.debugLog('Forum Search: Normal Search');
        forumSearch();
    }
}

function threadFilter(array, post, andSearchTerms)
{
    var result = true;
    for(var i = 0; i < andSearchTerms.length; i++)
    {
        result &= threadFilterInner(array, post, andSearchTerms[i]);
    }
    if(result)
    {
        array[post.id] = post;
    }
}

function threadFilterInner(array, post, searchValueUntrimmed)
{
    var searchValue = searchValueUntrimmed.trim();
    debugLogger.debugLog('Thread Search: Post Number ' + post.id);
    if($(post).find('.b_u_name:Contains(' + searchValue + ')').length && $("#usernames_checkbox").prop('checked'))
    {
        if($("#highlight_checkbox").prop('checked'))
        {
            var caseSensitivity = false;
            if ($("#exact_checkbox").prop('checked'))
            {
                searchValue = searchValue.split('\\b').join('');
                caseSensitivity = true;
            }
            $(post).find('.b_u_name').highlight(searchValue, { caseSensitive: caseSensitivity, wordsOnly: caseSensitivity });
        }
        return true;
    }
    else if($(post).find('.post_text_c:Contains(' + searchValue + ')').length && $("#posts_checkbox").prop('checked'))
    {
        if($("#highlight_checkbox").prop('checked'))
        {
            var caseSensitivity = false;
            if ($("#exact_checkbox").prop('checked'))
            {
                searchValue = searchValue.split('\\b').join('');
                caseSensitivity = true;
            }
            $(post).find('.post_text_c').highlight(searchValue, { caseSensitive: caseSensitivity, wordsOnly: caseSensitivity });
        }
        return true;
    }
    else if($(post).find('.post_text_c:has(span.bold:Contains(' + searchValue + '))').length && $("#bold_checkbox").prop('checked'))
    {
        if($("#highlight_checkbox").prop('checked'))
        {
            var caseSensitivity = false;
            if ($("#exact_checkbox").prop('checked'))
            {
                searchValue = searchValue.split('\\b').join('');
                caseSensitivity = true;
            }
            $(post).find('span.bold').highlight(searchValue, { caseSensitive: caseSensitivity, wordsOnly: caseSensitivity });
        }
        return true;
    }
}

function forumFilter(array, thread, andSearchTerms)
{
    var result = true;
    for(var i = 0; i < andSearchTerms.length; i++)
    {
        result &= forumFilterInner(array, thread, andSearchTerms[i]);
    }
    if(result)
    {
        var key = $(thread).find('.topic_s a').attr('href');
        array[key] = thread;
    }
}

function forumFilterInner(array, thread, searchValueUntrimmed)
{
    var searchValue = searchValueUntrimmed.trim();
    debugLogger.debugLog('Forum Search: Thread Name ' + $(thread).find('.topic_s').text());
    if($(thread).find('.user__name:Contains(' + searchValue + ')').length && $("#usernames_checkbox").prop('checked'))
    {
        if($("#highlight_checkbox").prop('checked'))
        {
            var caseSensitivity = false;
            if ($("#exact_checkbox").prop('checked'))
            {
                searchValue = searchValue.split('\\b').join('');
                caseSensitivity = true;
            }
            $(thread).find('.user__name').highlight(searchValue, { caseSensitive: caseSensitivity, wordsOnly: caseSensitivity });
        }
        return true;
    }
    else if($(thread).find('.topic_s:Contains(' + searchValue + ')').length && $("#posts_checkbox").prop('checked'))
    {
        if($("#highlight_checkbox").prop('checked'))
        {
            var caseSensitivity = false;
            if ($("#exact_checkbox").prop('checked'))
            {
                searchValue = searchValue.split('\\b').join('');
                caseSensitivity = true;
            }
            $(thread).find('.topic_s').highlight(searchValue, { caseSensitive: caseSensitivity, wordsOnly: caseSensitivity });
        }
        return true;
    }
}

function threadSearch()
{
    var start = performance.now();
    var endpage;
    if($("#endpage_box").val())
    {
        endpage = parseInt($("#endpage_box").val());
    }
    else
    {
        endpage = FindLastPageNumber();
    }
    var startpage;
    if($("#startpage_box").val())
    {
        startpage = parseInt($("#startpage_box").val());
    }
    else
    {
        startpage = 1;
    }
    if(endpage > startpage + 500)
    {
        endpage = startpage + 500;
    }
    if((endpage - startpage) > settings.get('search-warn-limit'))
    {
        if(!confirm('You are searching more than ' + settings.get('search-warn-limit') + ' pages, do you want to continue?' ))
            return;
    }
    $('.spot_h').remove();
    var postsPerPage = 20;
    var currentPostsOnPage = 0;
    var currentPage = 1;
    var selectedPage = 1;
    var postsArray = {};
    var searchTerms = splitSearchTerms();
    $(document).off('ajaxStop');
    $(document).ajaxStop(function()
                         {
        if(!jQuery.isEmptyObject(postsArray))
        {
            var postsKeys = Object.keys(postsArray);
            postsKeys.sort(naturalCompare);
            for(var i = 0; i < postsKeys.length; i++)
            {
                var k = postsKeys[i];
                var post = postsArray[k];
                if(!$(".page" + currentPage + "posts").length)
                {
                    var $newdiv = $("<div class='page" + currentPage + "posts'/>");
                    $(".list_h").append($newdiv);
                }
                $(post).appendTo(".page" + currentPage + "posts");
                currentPostsOnPage++;
                if(currentPostsOnPage > postsPerPage)
                {
                    currentPostsOnPage = 0;
                    currentPage++;
                }
            }
            var end = performance.now();
            var timeTaken = Math.round((end - start) / 1000);
            var resultPost = getNumberOfResultsThread(startpage, endpage, postsKeys.length, timeTaken);
            $(resultPost).prependTo(".list_h");
        }
        else
        {
            var noResultPost = getNoResultThread();
            $(noResultPost).appendTo(".list_h");
        }
        if($(".quick_post").length)
        {
            $(".list_h").append($(".quick_post"));
        }
    });
    for(var i = startpage; i < endpage + 1; i++)
    {
        debugLogger.debugLog('PageNumber: ' + i);
        var fullURL = window.location.pathname;
        var threadURL = RemoveLastDirIfLonger(fullURL, 4) + "/page" + i;
        ajaxQueue.add(threadURL, function(data)
                      {
            var $page = $(data);
            $page.find('.big_post_h').parents('.spot_h').each(function(index)
                                                              {
                for(var i = 0; i < searchTerms.length; i++)
                {
                    debugLogger.debugLog('Or Search Term: ' + searchTerms[i]);
                    threadFilter(postsArray, this, searchTerms[i]);
                }
            });
        });
    }
}

function forumSearch()
{
    var start = performance.now();
    var endpage;
    if($("#endpage_box").val())
    {
        endpage = parseInt($("#endpage_box").val());
    }
    else
    {
        endpage = FindLastPageNumber();
    }
    var startpage;
    if($("#startpage_box").val())
    {
        startpage = parseInt($("#startpage_box").val());
    }
    else
    {
        startpage = 1;
    }
    if(endpage > startpage + 500)
    {
        endpage = startpage + 500;
    }
    if((endpage - startpage) > settings.get('search-warn-limit'))
    {
        if(!confirm('You are searching more than ' + settings.get('search-warn-limit') + ' pages, do you want to continue?' ))
            return;
    }
    $('.list_row_odd').remove();
    var postsPerPage = 20;
    var currentPostsOnPage = 0;
    var currentPage = 1;
    var selectedPage = 1;
    var postsArray = {};
    var searchTerms = splitSearchTerms();
    $(document).off('ajaxStop');
    $(document).ajaxStop(function()
                         {
        if(!jQuery.isEmptyObject(postsArray))
        {
            var postsKeys = Object.keys(postsArray);
            postsKeys.sort(function(a, b)
                           {
                var dateA = parseDate($(postsArray[a]).find(".last_update").text());
                var dateB = parseDate($(postsArray[b]).find(".last_update").text());
                return dateB - dateA;
            });
            for(var i = 0; i < postsKeys.length; i++)
            {
                var k = postsKeys[i];
                var post = postsArray[k];
                if(!$(".page" + currentPage + "posts").length)
                {
                    var $newdiv = $("<div class='page" + currentPage + "posts'/>");
                    $("#t_norm > .list_row_h").append($newdiv);
                }
                $(post).appendTo(".page" + currentPage + "posts");
                currentPostsOnPage++;
                if(currentPostsOnPage > postsPerPage)
                {
                    currentPostsOnPage = 0;
                    currentPage++;
                }
            }
            var end = performance.now();
            var timeTaken = Math.round((end - start) / 1000);
            var resultPost = getNumberOfResultsForum(startpage, endpage, postsKeys.length, timeTaken);
            $(resultPost).prependTo("#t_norm > .list_row_h");
        }
        else
        {
            var noResultPost = getNoResultForum();
            $(noResultPost).appendTo("#t_norm > .list_row_h");
        }
    });
    for(var i = startpage; i < endpage + 1; i++)
    {
        debugLogger.debugLog('Page Number: ' + i);
        var fullURL = window.location.pathname;
        var threadURL = RemoveLastDirIfLonger(fullURL, 3) + "/page" + i;
        ajaxQueue.add(threadURL, function(data)
                      {
            var $page = $(data);
            $page.find('.list_row_odd').each(function(index)
                                             {
                for(var i = 0; i < searchTerms.length; i++)
                {
                    debugLogger.debugLog('Search Term: ' + searchTerms[i]);
                    forumFilter(postsArray, this, searchTerms[i]);
                }
            });
        });
    }
}

function threadSearchWithinResults()
{
    var start = performance.now();
    var postsPerPage = 20;
    var currentPostsOnPage = 0;
    var currentPage = 1;
    var selectedPage = 1;
    var postsArray = {};
    var searchTerms = splitSearchTerms();
    $(document).off('ajaxStop');
    $('.big_post_h').parents('.spot_h').each(function(index)
                                             {
        for(var i = 0; i < searchTerms.length; i++)
        {
            threadFilter(postsArray, this, searchTerms[i]);
        }
    });
    $('.spot_h').remove();
    if(!jQuery.isEmptyObject(postsArray))
    {
        var postsKeys = Object.keys(postsArray);
        postsKeys.sort(naturalCompare);
        for(var i = 0; i < postsKeys.length; i++)
        {
            var k = postsKeys[i];
            var post = postsArray[k];
            if(!$(".page" + currentPage + "posts").length)
            {
                var $newdiv = $("<div class='page" + currentPage + "posts'/>")
                $(".list_h").append($newdiv)
            }
            $(post).appendTo(".page" + currentPage + "posts");
            currentPostsOnPage++;
            if(currentPostsOnPage > postsPerPage)
            {
                currentPostsOnPage = 0;
                currentPage++;
            }
        }
        var end = performance.now();
        var timeTaken = Math.round((end - start) / 1000);
        var post = getNumberOfResultsThreadWithinResults(postsKeys.length, timeTaken);
        $(post).prependTo(".list_h");
    }
    else
    {
        var post = getNoResultThread();
        $(post).appendTo(".list_h");
    }
    if($(".quick_post").length)
    {
        $(".list_h").append($(".quick_post"));
    }
}

function forumSearchWithinResults()
{
    var start = performance.now();
    var postsPerPage = 20;
    var currentPostsOnPage = 0;
    var currentPage = 1;
    var selectedPage = 1;
    var postsArray = {};
    var searchTerms = splitSearchTerms();
    $(document).off('ajaxStop');
    $('.list_row_odd').each(function(index)
                            {
        for(var i = 0; i < searchTerms.length; i++)
        {
            forumFilter(postsArray, this, searchTerms[i]);
        }
    });
    $('.list_row_odd').remove();
    if(!jQuery.isEmptyObject(postsArray))
    {
        var postsKeys = Object.keys(postsArray);
        postsKeys.sort(function(a, b)
                       {
            var dateA = parseDate($(postsArray[a]).find(".last_update").text());
            var dateB = parseDate($(postsArray[b]).find(".last_update").text());
            return dateB - dateA;
        });
        for(var i = 0; i < postsKeys.length; i++)
        {
            var k = postsKeys[i];
            var post = postsArray[k];
            if(!$(".page" + currentPage + "posts").length)
            {
                var $newdiv = $("<div class='page" + currentPage + "posts'/>");
                $("#t_norm > .list_row_h").append($newdiv);
            }
            $(post).appendTo(".page" + currentPage + "posts");
            currentPostsOnPage++;
            if(currentPostsOnPage > postsPerPage)
            {
                currentPostsOnPage = 0;
                currentPage++;
            }
        }
        var end = performance.now();
        var timeTaken = Math.round((end - start) / 1000);
        var resultPost = getNumberOfResultsForumWithinResults(postsKeys.length, timeTaken);
        $(resultPost).prependTo("#t_norm > .list_row_h");
    }
    else
    {
        var noResultPost = getNoResultForum();
        $(noResultPost).appendTo("#t_norm > .list_row_h");
    }
}

function threadReplies()
{
    var start = performance.now();
    var endpage;
    if($("#endpage_box").val())
    {
        endpage = parseInt($("#endpage_box").val());
    }
    else
    {
        endpage = FindLastPageNumber();
    }
    var startpage;
    if($("#startpage_box").val())
    {
        startpage = parseInt($("#startpage_box").val());
    }
    else
    {
        startpage = 1;
    }
    if(endpage > startpage + 500)
    {
        endpage = startpage + 500;
    }
    if((endpage - startpage) > settings.get('search-warn-limit'))
    {
        if(!confirm('You are searching more than ' + settings.get('search-warn-limit') + ' pages, do you want to continue?' ))
            return;
    }
    $('.spot_h').remove();
    var postsPerPage = 20;
    var currentPostsOnPage = 0;
    var currentPage = 1;
    var selectedPage = 1;
    var postsArray = {};
    $(document).off('ajaxStop');
    $(document).ajaxStop(function()
                         {
        if(!jQuery.isEmptyObject(postsArray))
        {
            var postsKeys = Object.keys(postsArray);
            postsKeys.sort(naturalCompare);
            for(var i = 0; i < postsKeys.length; i++)
            {
                var k = postsKeys[i];
                var post = postsArray[k];
                if(!$(".page" + currentPage + "posts").length)
                {
                    var $newdiv = $("<div class='page" + currentPage + "posts'/>")
                    $(".list_h").append($newdiv)
                }
                $(post).appendTo(".page" + currentPage + "posts");
                currentPostsOnPage++;
                if(currentPostsOnPage > postsPerPage)
                {
                    currentPostsOnPage = 0;
                    currentPage++;
                }
            }
            var end = performance.now();
            var timeTaken = Math.round((end - start) / 1000);
            var resultPost = getNumberOfResultsThread(startpage, endpage, postsKeys.length, timeTaken);
            $(resultPost).prependTo(".list_h");
        }
        else
        {
            var post = getNoResultThread();
            $(post).appendTo(".list_h");
        }
        if($(".quick_post").length)
        {
            $(".list_h").append($(".quick_post"));
        }
    });
    for(var i = startpage; i < endpage + 1; i++)
    {
        var fullURL = window.location.pathname;
        var threadURL = RemoveLastDirIfLonger(fullURL, 4) + "/page" + i;
        ajaxQueue.add(threadURL, function(data)
                      {
            var $page = $(data);
            $page.find('.big_post_h').parents('.spot_h').each(function(index)
                                                              {
                if($(this).find('.r_t_y').length)
                {
                    postsArray[this.id] = this;
                }
            });
        });
    }
}

function forumReplies()
{
    window.location.href = "http://www.gog.com/forum/myrecentposts";
}

function setUsernamesCheckbox() 
{
    function on_update(value) 
    {
        $('#usernames_checkbox').prop('checked', value);
    }

    settings.onchange('search-usernames', on_update);
}

function setPostsCheckbox() 
{
    function on_update(value) 
    {
        $('#posts_checkbox').prop('checked', value);
    }

    settings.onchange('search-posts', on_update);
}

function setBoldCheckbox() 
{
    function on_update(value) 
    {
        $('#bold_checkbox').prop('checked', value);
    }

    settings.onchange('search-bold', on_update);
}

function setHighlightResultsCheckbox() 
{
    function on_update(value) 
    {
        $('#highlight_checkbox').prop('checked', value);
    }

    settings.onchange('search-highlight-results', on_update);
}
function setExactResultsCheckbox() 
{
    function on_update(value) 
    {
        $('#exact_checkbox').prop('checked', value);
    }

    settings.onchange('search-exact', on_update);
}

function setAdvancedOptions() 
{
    function on_update(value) 
    {
        if (value)
        {
            $('#advancedOptionsLabel').text("-");
            $('#gsb-advancedOptions-div').removeClass('hide-options');
            $('#gsb-top-div').removeClass('ao-closed');
            $("#showSearchBarButton").removeClass('ao-closed2');
        }
        else
        {
            $('#advancedOptionsLabel').text("+");
            $('#gsb-advancedOptions-div').addClass('hide-options');
            $('#gsb-top-div').addClass('ao-closed');
            $("#showSearchBarButton").addClass('ao-closed2');
        }
        var newHeight = 76 + $('#gogSearchBox').outerHeight();
        $(".nav_bar_top_h").css("height", newHeight + "px");
    }

    settings.onchange('search-advanced-options', on_update);
}

function enableSearchBar()
{
    loadForumSearchBar();
    $('#gogSearchBox').remove();
    $(".nav_bar_top_h").removeAttr("style");
    $("#showSearchBarButton").removeClass("search-bar-on");
    $("#showSearchBarButton").remove();
    function on_update(value) 
    {
        if (value)
        {
            createSearchButton();
            settings.onchange('search-show-bar');
            //settings.set('search-show-bar', settings.get('search-show-bar'));
        }
        else
        {
            $('#gogSearchBox').remove();
            $(".nav_bar_top_h").removeAttr("style");
            $("#showSearchBarButton").removeClass("search-bar-on");
            $("#showSearchBarButton").remove();
        }
    }

    settings.onchange('search-enable-bar', on_update);
}

function createSearchButton()
{
    addGlobalStyle('#showSearchBarButton { position: absolute; top: 40px; left: -15px; width: 15px; height: 15px; text-align: center; font-size: 7pt; color: #87b60c; background-color: #474747; -moz-border-radius: 5px 0 0 5px; -webkit-border-radius: 5px 0 0 5px; border-radius: 5px 0 0 5px; -khtml-border-radius: 5px 0 0 5px; cursor: pointer; }');
    addGlobalStyle('#showSearchBarButton:hover { left: -60px; width: 60px; height: 25px; }');
    addGlobalStyle('#showSearchBarButton.search-bar-on { top: 110px }');
    addGlobalStyle('#showSearchBarButton.search-bar-on.ao-closed2 { top: 87px; }');
    var showSearchBarButton = $('<div id="showSearchBarButton" title="Adalia Fundamentals Search Bar"><p id="showSearchBarLabel" style="position: relative; top: 2.4px; left: 1px;">AF</p></div>');
    $(".nav_bar_top_h").prepend(showSearchBarButton);
    $("#showSearchBarButton").on({
        mouseenter: function () {
            $("#showSearchBarLabel").text("AF Search Bar");
        },
        mouseleave: function () {
            $("#showSearchBarLabel").text("AF");
        }
    });
    $("#showSearchBarButton").on("click", function()
                                 {
        settings.set('search-show-bar', !settings.get('search-show-bar'));
    });
}

function loadForumSearchBar() 
{
    //createSearchButton();
    function on_update(value) 
    {
        if (value && settings.get('search-enable-bar'))
        {
            loadSearchBar();
            setUsernamesCheckbox();
            setPostsCheckbox();
            setBoldCheckbox();
            setHighlightResultsCheckbox();
            setExactResultsCheckbox();
            setAdvancedOptions();
            $("#showSearchBarButton").addClass("search-bar-on");
        }
        else
        {
            $('#gogSearchBox').remove();
            $(".nav_bar_top_h").removeAttr("style");
            $("#showSearchBarButton").removeClass("search-bar-on");
        }
    }

    settings.onchange('search-show-bar', on_update);
}

function loadSearchBar()
{
    $(document).off('ajaxSend');
    $(document).off('ajaxComplete');
    $(document).ajaxSend(function()
                         {
        ajaxQueue.currentRequests++;
    });
    $(document).ajaxComplete(function()
                             {
        ajaxQueue.currentRequests--;
        if (ajaxQueue.currentRequests < ajaxQueue.maxRequests && ajaxQueue.requests.length > 0)
        {
            request = ajaxQueue.requests.shift();
            $.get(request.pageURL, request.callbackFunction);
            debugLogger.debugLog('AJAX Removed From Queue');
        }
        debugLogger.debugLog('AJAX Complete');
    });
    addGlobalStyle('#gogSearchBox {   background-color: #474747;  padding: 15px 17px 0 10px; color: #a1a1a1;  font-size: 12px; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; -khtml-border-radius: 10px; border-bottom: #aaa 1px solid; border-top: #aaa 1px solid; margin-bottom: 10px;}');
    //addGlobalStyle('div.nav_bar_top_h { height: 141px;}');
    addGlobalStyle('#filter_go { position: relative; top: -6px; display: inline; float: right; background: #aaa; color: #ececec; padding: 4px; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 5px; -khtml-border-radius: 10px; }');
    addGlobalStyle('#find_replies_button { display: inline; position: absolute; right: 60px; top: 40px; margin: 2px; }');
    addGlobalStyle('.highlight { background-color: #FFFF88; color: #000; }');
    addGlobalStyle('#gsb-advancedOptions-div { padding: 10px 0px 4px 10px; }');
    addGlobalStyle('.hide-options { display: none; }');
    addGlobalStyle('.ao-closed { padding-bottom: 7px; }');
    addGlobalStyle('#advancedOptionsButton { position: absolute; top: 40px; left: -15px; width: 15px; height: 15px; text-align: center; font-size: 12pt; color: #edb816; background-color: #474747; -moz-border-radius: 5px 0 0 5px; -webkit-border-radius: 5px 0 0 5px; border-radius: 5px 0 0 5px; -khtml-border-radius: 5px 0 0 5px; cursor: pointer; }');
    var $filterbar = $('<div id="gogSearchBox"><div id="gsb-top-div"><p style="display: inline;">Search: </p><input type="text"value="" id="search_text_box" style="display: inline; margin-right: 10px;"><p style="display:inline;">First Page: </p><input type="text" value="" id="startpage_box" style="display:inline; margin-right: 10px;"><p style="display: inline;">End Page: </p><input type="text" value="" id="endpage_box" style="display: inline; margin-right: 50px;"><a id="find_replies_button"><div title="Show Replies" class="r_t_y"></div></a><a title="Search" id="filter_go">Go</a></div><div id="gsb-advancedOptions-div"><input type="checkbox" id="posts_checkbox" value="True" style="display: inline; margin-right: 5px;"> <p style="display: inline; margin-right: 20px;">Posts</p><input type="checkbox" id="usernames_checkbox" value="True" style="display: inline; margin-right: 5px;"><p style="display: inline; margin-right: 20px;">Usernames</p><input type="checkbox" id="bold_checkbox" value="True" style="display: inline; margin-right: 5px;"><p style="display: inline; margin-right: 20px;">Bold</p><p id="version" style="display: inline; float: right; font-size: 75%; margin-top: 2px;">' + version + '</p><input type="checkbox" id="resultsSearch_checkbox" value="True" style="display: inline;  float: right;margin-right: 26px;"><p style="display: inline; float: right;margin-right: 5px;font-style: italic;">Search Within Results</p><input type="checkbox" id="highlight_checkbox" value="True" style="display: inline;  float: right;margin-right: 10px;"><p style="display: inline; float: right;margin-right: 5px;font-style: italic;">Highlight Results</p><input type="checkbox" id="exact_checkbox" value="False" style="display: inline;  float: right;margin-right: 10px;"><p style="display: inline; float: right;margin-right: 5px;font-style: italic;">Exact Match Only</p></div></div>');
    var advancedOptionsButton = $('<div id="advancedOptionsButton" title="Advanced Options"><p id="advancedOptionsLabel" style="position: relative; top: -1px; left: 1px;">+</p></div>');
    $($filterbar).prepend(advancedOptionsButton);
    $(".nav_bar_top_h").prepend($filterbar);
    $("#advancedOptionsButton").on("click", function()
                                   {
        settings.set('search-advanced-options', !settings.get('search-advanced-options'));
    });
    $('#highlight_checkbox').change(function() 
                                    {
        settings.set('search-highlight-results', this.checked);
    });
    $('#exact_checkbox').change(function() 
                                {
        settings.set('search-exact', this.checked);
    });
    $('#bold_checkbox').change(function() 
                               {
        settings.set('search-bold', this.checked);
    });
    $('#usernames_checkbox').change(function() 
                                    {
        settings.set('search-usernames', this.checked);
    });
    $('#posts_checkbox').change(function()
                                {
        settings.set('search-posts', this.checked);
    });
    if (checkIsForumPage())
    {
        $("#filter_go").on("click", forumSearchBase);
        $('#search_text_box, #endpage_box, #startpage_box').bind("enterKey", forumSearchBase);
        $('#search_text_box, #endpage_box, #startpage_box').keyup(function(e)
                                                                  {
            if (e.keyCode == 13)
            {
                $(this).trigger("enterKey");
            }
        });
        $("#find_replies_button").on("click", forumReplies);
    }
    else
    {
        $("#filter_go").on("click", threadSearchBase);
        $('#search_text_box, #endpage_box, #startpage_box').bind("enterKey", threadSearchBase);
        $('#search_text_box, #endpage_box, #startpage_box').keyup(function(e)
                                                                  {
            if (e.keyCode == 13)
            {
                $(this).trigger("enterKey");
            }
        });
        $("#find_replies_button").on("click", threadReplies);
    }
}

// End of Forum Search Bar Functions

// General Forum Functions

function setLanguageForums()
{
    function on_update(value)
    {
        $('#forum_general').toggle(value.English);
        $('#forum_general_archive').toggle(value.Archives);
        $('#forum_general_br').toggle(value.Brazilian);
        $('#forum_general_de').toggle(value.German);
        $('#forum_general_fr').toggle(value.French);
        $('#forum_general_ru').toggle(value.Russian);
        $('#forum_general_zh').toggle(value.Chinese);
    }
    settings.onchange('forum-language-forums', on_update);
}

function sortGameForums()
{
    function getSorted(data, selector) {
        return $($(data).toArray().sort(function(a, b) {
            var dateA = parseDate($(a).find(".updated").text().trim());
            var dateB = parseDate($(b).find(".updated").text().trim());
            return dateB - dateA;
        }));
    }

    function on_update(value)
    {
        if (value)
        {
            $('h2:contains("Game specific forums")').append('<div style="padding-top: 15px;" id="sortButton"><button>Sort By Last Update</button><label style="padding-left: 15px;"><input type="checkbox" id="afFavouriteSort"> Sort Favourites Only</label></div>');
            $('#sortButton').click(function() {
                $.ajax({
                    url: 'https://www.gog.com/forum/ajax?a=getArrayList&s=Find+specific+forum...&showAll=1',
                    type: 'get',
                    datatype: 'html',
                    success: function (data) {
                        debugLogger.debugLog("Game Forums Loaded");
                        data = $(data).filter('div');
                        var languageForums = settings.get('forum-language-forums');
                        data = $(data).filter(function() {
                            if((!languageForums.Archives) && $(this).is('#forum_general_archive'))
                            {
                                return false;
                            }
                            else if((!languageForums.Brazilian) && $(this).is('#forum_general_br'))
                            {
                                return false;
                            }
                            else if((!languageForums.German) && $(this).is('#forum_general_de'))
                            {
                                return false;
                            }
                            else if((!languageForums.French) && $(this).is('#forum_general_fr'))
                            {
                                return false;
                            }
                            else if((!languageForums.Russian) && $(this).is('#forum_general_ru'))
                            {
                                return false;
                            }
                            else if((!languageForums.Chinese) && $(this).is('#forum_general_zh'))
                            {
                                return false;
                            }
                            else
                                return true;
                        });
                        if ($('#afFavouriteSort').is(":checked"))
                        {
                            data = $(data).filter(function() {
                                if ($(this).find('.checkbox').hasClass('unchecked'))
                                    return false;
                                else
                                    return true;
                            });
                        }
                        var sorted = getSorted(data, ' > div');
                        $('#forums_list_holder').html(sorted);
                    }
                });
            });
        }
        else
        {
            $('#sortButton').remove();
        }
    }

    settings.onchange('forum-game-forums-sort', on_update);
}

function setCommunityWishlist()
{
    function on_update(value)
    {
        var wishlist = $('.wishlist_highlights h2').first();
        if (value == 'show')
        {
            wishlist.parent().show();
            if (wishlist.hasClass('collapsed'))
            {
                wishlist.find('span').first().click();
            }
        }
        else if (value == 'collapse')
        {
            if (!wishlist.hasClass('collapsed'))
            {
                wishlist.find('span').first().click();
            }
        }
        else if (value == 'remove')
        {
            if (!wishlist.hasClass('collapsed'))
            {
                wishlist.find('span').first().click();
            }
            wishlist.parent().hide();
        }
    }

    settings.onchange('forum-community-wishlist', on_update);
}

function setFavouriteTopic()
{
    function on_update(value)
    {
        var favouriteTopics = $('.text:contains(My favourite topics)').parent();
        if (value == 'show')
        {
            favouriteTopics.show();
            if (favouriteTopics.hasClass('collapsed'))
            {
                favouriteTopics.find('span').first().click();
            }
        }
        else if (value == 'collapse')
        {
            if (!favouriteTopics.hasClass('collapsed'))
            {
                favouriteTopics.find('span').first().click();
            }
        }
        else if (value == 'remove')
        {
            if (!favouriteTopics.hasClass('collapsed'))
            {
                favouriteTopics.find('span').first().click();
            }
            favouriteTopics.hide();
        }
    }

    settings.onchange('forum-favourite-topics', on_update);
}

function setParticipatedTopic()
{
    function on_update(value)
    {
        var participatedTopics = $('#moreRecent').parent();
        if (value == 'show')
        {
            participatedTopics.show();
            if (participatedTopics.hasClass('collapsed'))
            {
                participatedTopics.find('span').first().click();
            }
        }
        else if (value == 'collapse')
        {
            if (!participatedTopics.hasClass('collapsed'))
            {
                participatedTopics.find('span').first().click();
            }
        }
        else if (value == 'remove')
        {
            if (!participatedTopics.hasClass('collapsed'))
            {
                participatedTopics.find('span').first().click();
            }
            participatedTopics.hide();
        }
    }

    settings.onchange('forum-participated-topics', on_update);
}

function setHotTopic()
{
    function on_update(value)
    {
        var hotTopics = $('#moreMostPopular').parent();
        if (value == 'show')
        {
            hotTopics.show();
            if (hotTopics.hasClass('collapsed'))
            {
                hotTopics.find('span').first().click();
            }
        }
        else if (value == 'collapse')
        {
            if (!hotTopics.hasClass('collapsed'))
            {
                hotTopics.find('span').first().click();
            }
        }
        else if (value == 'remove')
        {
            if (!hotTopics.hasClass('collapsed'))
            {
                hotTopics.find('span').first().click();
            }
            hotTopics.hide();
        }
    }

    settings.onchange('forum-hot-topics', on_update);
}

function setAllHide()
{
    function on_update(value)
    {
        if (settings.get('forum-favourite-topics') == "remove" && settings.get('forum-hot-topics') == "remove" && settings.get('forum-participated-topics') == "remove")
        {
            $('.module.topics').hide();
        }
        else
        {
            $('.module.topics').show();
        }
    }

    settings.onchange('forum-favourite-topics', on_update);
    settings.onchange('forum-hot-topics', on_update);
    settings.onchange('forum-participated-topics', on_update);
}


function setFavouritesHide()
{
    function on_update(value)
    {
        var toggleValue = settings.get('forum-favourites-toggle');
        if (value && toggleValue)
        {
            $("#t_fav .list_row_h").hide();
        }
        else
        {
            $("#t_fav .list_row_h").show();
        }
    }

    settings.onchange('forum-favourites-hide', on_update);
}

function setFavouritesToggle()
{
    function on_update(value)
    {
        if (value)
        {
            settings.onchange('forum-favourites-hide');
            $("#t_fav .lista_bar_text").click(function() {
                var previousSetting = settings.get('forum-favourites-hide');
                settings.set('forum-favourites-hide', !previousSetting);
            });
            $("#t_fav .lista_bar_text").css('cursor','pointer');
        }
        else
        {
            $("#t_fav .list_row_h").show();
            $("#t_fav .lista_bar_text").off('click');
            $("#t_fav .lista_bar_text").css('cursor','default');
        }
    }

    settings.onchange('forum-favourites-toggle', on_update);
}

// End of General Forum Functions

// Account Page Functions

function loadAllGoodiesDownloadLink()
{
    var downloadRows = $(".game-details__column--right .rows");
    var accountProductsScope = unsafeWindow.angular.element(document.querySelectorAll('.game-details__title')).scope();
    if ( typeof accountProductsScope.details.url != 'undefined')
    {
        var downloaderLinksURL = accountProductsScope.details.url.oldGogDownloader;
        debugLogger.debugLog(downloaderLinksURL);
        $.get(downloaderLinksURL, function(data)
              {
            var $page = $(data);
            var downloadLinks = $page.find('.downloader__links');
            var allGoodies = downloadLinks.find('a').last();
            var goodiesText = allGoodies.text().split(',');
            var allGoodiesBlock = $('<a class="game-link row all-goodies" href=""><span class="game-link__name row__column"></span><span class="game-link__right game-link__size row__column"></span></a>');
            allGoodiesBlock.attr("href", allGoodies.attr("href"))
            allGoodiesBlock.find('.game-link__name').text(goodiesText[0].trim());
            allGoodiesBlock.find('.game-link__size').text(goodiesText[1].trim());
            //debugLogger.debugLog(allGoodiesBlock);
            $('.all-goodies').remove();
            downloadRows.append(allGoodiesBlock);
        });
        debugLogger.debugLog("Load all goodies link completed");
    }
}

function changeDownloadLinks()
{
    debugLogger.debugLog("Change Download Links called");
    $('.game-details').attrchange(
        {
            trackValues: true,
            callback: function(event)
            {
                if (event.attributeName == "gog-account-product")
                {
                    if (!(event.newValue === ""))
                    {
                        debugLogger.debugLog("Game Details Loaded: " + event.newValue);
                        if (settings.get('library-show-update-info'))
                        {
                            loadUpdateInfo();
                        }
                        if (settings.get('library-downloader-links'))
                        {
                            setTimeout(loadAllGoodiesDownloadLink, 1000);
                        }
                        else
                        {
                            $('.all-goodies').remove();
                        }
                        if (settings.get('library-classic-links'))
                        {
                            debugLogger.debugLog("Loading Classic Links");
                            setTimeout(loadClassicLinks, 500);
                        }
                    }
                }
            }
        });
}

function loadClassicLinks()
{
    contentEval(function() {
        var accountProductsScope = angular.element(document.querySelectorAll('.game-details__title')).scope();
        accountProductsScope.details.openClassicDownloads();
        accountProductsScope.$apply();
    });
    debugLogger.debugLog("Classic Links Loaded");
}


function compileNewDownloadLinks()
{
    if ((GetLastPartOfDirectory(window.location.pathname) == "account") || (GetLastPartOfDirectory(window.location.pathname) == "movies"))
    {
        var accountProductsScope = unsafeWindow.angular.element(document.querySelectorAll('.game-details__title')).scope();
        unsafeWindow.downloadLinksOn = settings.get('library-downloader-links');
        debugLogger.debugLog("Before $compile function");
        contentEval(function() {
            angular.element(document).injector().invoke(function($compile) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "In $compile"});
                document.dispatchEvent(debugEvent);
                var accountProductsScope = angular.element(document.querySelectorAll('.game-details__title')).scope();
                accountProductsScope.getLink = function(item)
                {
                    if (window.downloadLinksOn)
                        return item.downloaderUrl;
                    else
                        return item.manualUrl;
                }
                accountProductsScope.downloaderLinksSelected = function()
                {
                    return window.downloadLinksOn;
                }
                window.gameDetailsBoxCompiled = $compile('<div class="_page _page--MAIN downloads"><div class="game-details__column game-details__column--left"> <section class="game-details__section details-product" ng-if="details.isBaseProductMissing"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"> Base game missing </span></div> </header><div class="details-product__message"><div class="rich-text">You don\'t have the base product necessary to play the DLC. You can buy it below or <a href="/redeem/">redeem it</a> if you already have the code.</div></div><div class="details-product__wrapper"><div class="product-state-holder product-row details-product__product" gog-product="{{ details.missingBaseProductId }}"><div class="product-row__price product-row__alignment"><a class="product-state__price-btn price-btn price-btn--active ng-cloak " href="" ng-if="product.customAttributes.customPriceButtonVariant == &#039;join&#039;" ng-href="{{ product.url }}"><span class="price-btn__text"><span class="price-btn__text--owned product-state__is-owned"> owned </span><span class="product-state__is-free"> Free </span><span class="product-state__price"><span class="hide-on-not-owned"> owned </span><span class="product-state__price hide-on-owned"> Free </span></span></span></a><div class="product-state__price-btn price-btn price-btn--active" ng-click="productCtrl.addToCart()" gog-track-event="{event:\'addToCart\',wayAddToCart:\'Price\'}" ng-class="{ \'price-btn--in-cart\' : product.inCart, \'price-btn--free\': product.price.isFree }" ng-hide="product.customAttributes.customPriceButtonVariant == &#039;join&#039;"><span class="price-btn__text "><span class="product-status__in-cart"><i class="ic icon-cart"></i></span><span class="product-state__is-tba"> TBA </span><span class="price-btn__text--owned product-state__is-owned"> owned					</span><span class="product-state__is-free"> Free					</span><span class="_price product-state__price" ng-bind="product.price.amount"></span></span></div></div> <a ng-href="{{ product.url }}" class="product-row__link"><div class="product-row__picture"> <img class="product-row__img" ng-srcset="{{ product.image | image:100:&#039;jpg&#039; }} , {{ product.image | image:200:&#039;jpg&#039; }} 2x" alt="{{product.title}}" /></div><div class="product-row__discount product-row__alignment product-state__discount"><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>%</span></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isWishlisted &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isWishlisted || product.isInDevelopment" ng-cloakgog-labeled-title= \'{ "maxLineNumber": 2, "title": "{{ product.title}}" }\'><span class="product-title__text" ng-bind="product.title"></span><span class="product-title__flags"><i ng-if="product.isWishlisted" class="_product-flag product-title__icon ic icon-heart" ></i><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div></div><div class="product-row__info product-row__alignment"><span class="product-row__os" ng-if="product.isGame"><i class="ic icon-win" ng-if="product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="product.isMovie">MOVIE</span><span ng-if="product.releaseDate" class="product-row__date" gog-release-date=\'{ "date": {{ product.releaseDate }}, "visibilityDate": {{ product.salesVisibility.from }} }\'>2017</span><span ng-if="product.category" class="product-row__genre" ng-bind="product.category"></span></div></div></div></div> </a></div></div> </section> <section class="game-details__section" ng-if="details.isPreOrder && details.showProductData"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"> pre-order </span></div> </header><div class="details-message" gog-counter="{{ details.releaseTimestamp }}"><p class="details-message__body details-preorder" ng-if="!counter.hasEnded"><span class="details-preorder__text"> This game will be available for full download on&nbsp;{{ details.releaseDate }} </span><span class="details-preorder__counter"><span ng-if="counter.days >= 2" ng-bind="\'&#039; + counter.days + &#039; day, &#039; + ( counter.hours|padding:2 ) + &#039; : &#039; + ( counter.minutes|padding:2 ) + &#039; : &#039; + ( counter.seconds|padding:2 ) + &#039; left\'" ></span><span ng-if="counter.days < 2" ng-bind="\'only &#039; + ( ( counter.hours + counter.days * 24 )|padding:2 ) + &#039; : &#039; + ( counter.minutes|padding:2 ) + &#039; : &#039; + ( counter.seconds|padding:2 ) + &#039; left\'"></span></span></p><p class="details-message__body details-preorder-available" ng-show="counter.hasEnded">The game\'s files will be available for download soon.</p></div> </section> <section class="game-details__section" ng-if="details.main.is.available"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"><span ng-hide="downloaderLinksSelected() || !details.galaxyInstallersSelected || details.main.currentSystem != \'windows\'"> GOG GALAXY GAME INSTALLERS </span><span ng-hide="downloaderLinksSelected() || details.galaxyInstallersSelected && details.main.currentSystem == \'windows\'"> CLASSIC GAME INSTALLERS </span><span ng-hide="!downloaderLinksSelected()"> GOG DOWNLOADER INSTALLERS </span></span></div><div class="module-header2__section--secondary"><div class="game-details__section__dropdown module-header2__element"><span class="module-header2__element-label">os:</span><span ng-show="details.main.is.systemSelectAvailable" class="module-header2__dropdown _dropdown is-contracted" gog-dropdown> {{ details.main.currentSystem }}<span class="_dropdown__pointer-wrapper module-header2__pointer-wrapper"><i class="ic icon-dropdown-down module-header2__dropdown-icon"></i><i class="_dropdown__pointer-up"></i></span><span class="_dropdown__items module-header2__dropdown-items"><span class="file-filter _dropdown__item" ng-class="{ \'is-unavailable\': !os.isAvailable }" ng-repeat="os in details.main.systems" ng-click="details.setMainDownloadsOS(os.name)" ng-bind="os.name" ></span></span> </span><span ng-show="!details.main.is.systemSelectAvailable" class="module-header2__dropdown"> {{ details.main.currentSystem }} </span></div><div class="game-details__section__dropdown module-header2__element"><span class="module-header2__element-label">lang:</span><span ng-show="details.main.is.languageSelectAvailable" class="module-header2__dropdown _dropdown is-contracted" gog-dropdown> {{ details.main.currentLanguage }}<span class="_dropdown__pointer-wrapper module-header2__pointer-wrapper"><i class="ic icon-dropdown-down module-header2__dropdown-icon"></i><i class="_dropdown__pointer-up"></i></span><span class="_dropdown__items module-header2__dropdown-items"><span class="file-filter _dropdown__item" ng-class="{ \'is-unavailable\': !lang.isAvailable }" ng-repeat="lang in details.main.languages" ng-click="details.setMainDownloadsLang(lang.name)" ng-bind="lang.name" ></span></span> </span><span ng-show="!details.main.is.languageSelectAvailable" class="module-header2__dropdown"> {{ details.main.currentLanguage }} </span></div></div> </header><div class="rows"><a class="game-link row" ng-repeat="item in details.main.currentDownloads" ng-href="{{ getLink(item) }}"><span class="game-link__name row__column" ng-bind="item.name"></span><span class="game-link__right game-link__info row__column"> {{ item.version }} <span ng-if="item.date" class="game-link__info__details">(<span gog-relative-time="item.date"></span>)</span></span><span class="game-link__right game-link__size row__column">{{ item.size }}</span></a></div><div class="details-message" ng-show="!details.main.is.availableToDownload"><p class="details-message__body">Unfortunately, there are no files available for the selected language (<b ng-bind="details.main.currentLanguage"></b>) and operating system (<b ng-bind="details.main.currentSystem"></b>) combination.</p></div> </section> <section class="game-installers-description__section"><div class="rich-text" ng-hide="(downloaderLinksSelected() || !details.galaxyInstallersSelected || details.isPreOrder) || details.main.currentSystem != \'windows\'">The above installer includes GOG Galaxy client for the full experience and the best support of all features for the game, including: auto-updates, <span ng-bind="details.featuresString"></span>.</div><div class="rich-text" ng-hide="(downloaderLinksSelected() || details.galaxyInstallersSelected || details.isPreOrder) && details.main.currentSystem == \'windows\'">The above installer does not include GOG Galaxy - our optional client which makes it easy to manage your GOG library and keep your games up to date.</div><div class="rich-text" ng-hide="(!downloaderLinksSelected() || details.isPreOrder)">The above installer links are downloaded through the Gog Downloader and do not include GOG Galaxy.</div> </section> <section class="game-details__section" ng-if="details.isDlcPreOrderPresent"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"><ng-pluralize count="details.dlcPreOrdersCount" when="{ one: \'DLC pre-order\', few: \'DLC pre-orders\', many: \'DLC pre-orders\', other: \'DLC pre-orders\' }" ></ng-pluralize></span></div> </header><div ng-repeat="dlcCounter in details.dlcCounters" class="details-message" gog-counter="{{ dlcCounter.releaseTimestamp }}"><p class="details-message__body details-preorder" ng-if="!counter.hasEnded"><span class="details-preorder__text"> DLC &quot;{{ dlcCounter.title }}&quot; will be available for full download on&nbsp;{{ dlcCounter.releaseDate }} </span><span class="details-preorder__counter"><span ng-if="counter.days >= 2" ng-bind="\'&#039; + counter.days + &#039; day, &#039; + ( counter.hours|padding:2 ) + &#039; : &#039; + ( counter.minutes|padding:2 ) + &#039; : &#039; + ( counter.seconds|padding:2 ) + &#039; left\'" ></span><span ng-if="counter.days < 2" ng-bind="\'only &#039; + ( ( counter.hours + counter.days * 24 )|padding:2 ) + &#039; : &#039; + ( counter.minutes|padding:2 ) + &#039; : &#039; + ( counter.seconds|padding:2 ) + &#039; left\'"></span></span></p><p class="details-message__body details-preorder-available" ng-show="counter.hasEnded">DLC "{{ dlcCounter.title }}" files will be available for download soon. Please refresh the page.</p></div> </section> <section class="game-details__section" ng-if="details.dlc.is.available"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"> DLC Downloads </span></div><div class="module-header2__section--secondary"><div class="game-details__section__dropdown module-header2__element"><span class="module-header2__element-label">os:</span><span ng-show="details.dlc.is.systemSelectAvailable" class="module-header2__dropdown _dropdown is-contracted" gog-dropdown> {{ details.dlc.currentSystem }}<span class="_dropdown__pointer-wrapper module-header2__pointer-wrapper"><i class="ic icon-dropdown-down module-header2__dropdown-icon"></i><i class="_dropdown__pointer-up"></i></span><span class="_dropdown__items module-header2__dropdown-items"><span class="_dropdown__item" ng-repeat="os in details.dlc.systems" ng-click="details.setDLCDownloadsOS(os.name)" ng-bind="os.name" ></span></span> </span><span ng-show="!details.dlc.is.systemSelectAvailable" class="module-header2__dropdown"> {{ details.dlc.currentSystem }} </span></div><div class="game-details__section__dropdown module-header2__element"><span class="module-header2__element-label">lang:</span><span ng-show="details.dlc.is.languageSelectAvailable" class="module-header2__dropdown _dropdown is-contracted" gog-dropdown> {{ details.dlc.currentLanguage }}<span class="_dropdown__pointer-wrapper module-header2__pointer-wrapper"><i class="ic icon-dropdown-down module-header2__dropdown-icon"></i><i class="_dropdown__pointer-up"></i></span><span class="_dropdown__items module-header2__dropdown-items"><span class="_dropdown__item" ng-repeat="lang in details.dlc.languages" ng-click="details.setDLCDownloadsLang(lang.name)" ng-bind="lang.name" ></span></span> </span><span ng-show="!details.dlc.is.languageSelectAvailable" class="module-header2__dropdown"> {{ details.dlc.currentLanguage }} </span></div></div> </header><div class="rows"><a class="game-link row" ng-repeat="item in details.dlc.currentDownloads" ng-href="{{ getLink(item) }}"><span class="game-link__name row__column" ng-bind="item.fullName"></span><span class="game-link__right game-link__info row__column"> {{ item.version }} <span ng-if="item.date" class="game-link__info__details">(<span gog-relative-time="item.date"></span>)</span></span><span class="game-link__right game-link__size row__column" ng-bind="item.size"></span></a></div><div class="details-message" ng-show="!details.dlc.is.availableToDownload"><p class="details-message__body">Unfortunately, there are no files available for the selected language (<b ng-bind="details.dlc.currentLanguage"></b>) and operating system (<b ng-bind="details.dlc.currentSystem"></b>) combination.</p></div> </section> <section class="game-details__section" ng-if="details.showMessages"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected" ng-bind="\'message_from_gog\'|trans:details.messagesCount"></span></div> </header><div class="rich-text" ng-repeat="message in details.messages" ng-bind-html="message"></div> </section></div><div class="game-details__column game-details__column--right" ng-show="details.showExtras"> <section class="game-details__section" ng-if="details.showProductExtras"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"><ng-pluralize count="details.main.extrasCount" when="{ one: \'Game goodie\', few: \'Game goodies\', many: \'Game goodies\', other: \'Game goodies\' }" ></ng-pluralize></span></div> </header><div class="rows"><a class="game-link row" ng-repeat="item in details.main.extras" ng-href="{{ getLink(item) }}"><span class="game-link__name row__column"> {{ item.name }} <span ng-show="item.info > 2">({{ item.info }})</span></span><span class="game-link__right game-link__size row__column" ng-bind="item.size"></span></a></div> </section> <section class="game-details__section" ng-repeat="dlc in details.dlc.extras"> <header class="module-header2"><div class="module-header2__section--primary"><span class="module-header2__element module-header2__element--selected"><ng-pluralize count="dlc.extrasCount" when="{ one: \'&#039; + dlc.title + &#039; goodie\', few: \'&#039; + dlc.title + &#039; goodies\', many: \'&#039; + dlc.title + &#039; goodies\', other: \'&#039; + dlc.title + &#039; goodies\' }" ></ng-pluralize></span></div> </header><div class="rows"><a class="game-link row" ng-repeat="item in dlc.extras" ng-href="{{ getLink(item) }}"><span class="game-link__name row__column"> {{ item.name }} <span ng-show="item.info > 2">({{ item.info }})</span></span><span class="game-link__right game-link__size row__column" ng-bind="item.size"></span></a></div> </section></div></div>')(accountProductsScope);
            });
        });

        $('._page--MAIN.downloads').replaceWith(unsafeWindow.gameDetailsBoxCompiled);

        accountProductsScope.$apply();

        if (settings.get('library-downloader-links'))
        {
            loadAllGoodiesDownloadLink();
        }
        else
        {
            $('.all-goodies').remove();
        }
    }
}

function setDownloadOptions()
{
    debugLogger.debugLog('setDownloadOptions called');
    var linksButton = $('<div id="linksButton" class="btn btn--tall btn--wide"> <label id="linkButtonLabel" for="linkButtonCheck">Downloader Links</label> <input id="linkButtonCheck" type="checkbox"></div>');
    addGlobalStyle('#linksButton { text-transform: capitalize; float: right; display: inline-block; }');
    addGlobalStyle('#linkButtonCheck {zoom: 1.5; margin-left: 5px; vertical-align: middle;}');
    addGlobalStyle('.btn--checked { background: linear-gradient(to bottom, #8aa800, #5f8000); color: #fff;}');
    addGlobalStyle('.btn--unchecked { background: linear-gradient(to bottom, #970000, #b00000); color: #fff;}');
    $('.game-details__header').append(linksButton);
    $('#linkButtonCheck').click(function(event)
                                {
        settings.set('library-downloader-links', this.checked)
        event.stopPropagation();
    });
    $('#linkButtonLabel').click(function(event)
                                {
        settings.set('library-downloader-links', this.checked)
        event.stopPropagation();
    });
    $('#linksButton').click(function()
                            {
        $('#linkButtonCheck').trigger('click');
    });
    function on_update(value)
    {
        compileNewDownloadLinks();
        $('#linkButtonCheck').prop('checked', value);
        if (value)
        {
            $('#linksButton').addClass('btn--checked');
            $('#linksButton').removeClass('btn--unchecked');
        }
        else
        {
            $('#linksButton').addClass('btn--unchecked');
            $('#linksButton').removeClass('btn--checked');
        }
    }
    debugLogger.debugLog('setDownloadOptions finished');
    settings.onchange('library-downloader-links', on_update);
}

function setShowUpdateInfo()
{
    debugLogger.debugLog('setShowUpdateInfo called');
    var updateInfo = $('<b id="updateInfo">Last updated:</b>');
    addGlobalStyle('#updateInfo { display: inline; font-size: 1em; float: right; margin-top: 0px; margin-right: 10px; height: 40px; line-height: 40px }');

    function on_update(value)
    {
        if (value)
        {
            $('#linksButton').after(updateInfo);
        }
        else
        {
            $('#updateInfo').remove();
        }
    }
    settings.onchange('library-show-update-info', on_update);
}

function loadUpdateInfo()
{
    var accountProductsScope = unsafeWindow.angular.element(document.querySelectorAll('.game-details__title')).scope();
    var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list')).scope();
    var http = unsafeWindow.angular.element(document.body).injector().get('$http');
    var id = accountProductsScope.product.id;
    if (typeof unsafeWindow.updatedList[id] !== 'undefined')
    {
        var versionName = unsafeWindow.updatedList[id].win.version_name;
        var datePublished = new Date(unsafeWindow.updatedList[id].win.date_published);
        var formattedDate = datePublished.getDate() + '/' + (datePublished.getMonth() + 1) + '/' +  datePublished.getFullYear()

        $('#updateInfo').text("Version: " + versionName + ", Date Published: " + formattedDate);
    }
    else
    {
        if (!libraryScope.reportedUrls.hasOwnProperty(id))
        {
            http.get("https://gog.bigpizzapies.com/af_legacy_urls.php?report&&id=" + id);
            libraryScope.reportedUrls[id] = "reported";
        }
    }
    debugLogger.debugLog('Update Info Loaded');
}

function styleTopPagination()
{
    if (settings.get('library-style').indexOf("Legacy") == -1)
    {
        $('.af-top-pagin').css('margin-top', '-70px').css('margin-bottom', '30px');
    }
    else if (settings.get('library-style').indexOf("Legacy") > -1)
    {
        $('.af-top-pagin').find('.account__pagination').addClass('legacy');
        $('.af-top-pagin').removeAttr('style');
    }
    else
    {
        $('.af-top-pagin').removeAttr('style');
    }
}

function addTopPagination()
{
    if ((GetLastPartOfDirectory(window.location.pathname) == "account") || (GetLastPartOfDirectory(window.location.pathname) == "movies"))
    {
        contentEval(function() {
            angular.element(document).injector().invoke(function($compile) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "addTopPagination called"});
                document.dispatchEvent(debugEvent);
                var rootScope = angular.element(document.body).injector().get('$rootScope');
                var viewScope = angular.element(document.querySelectorAll('.header__switch')).scope();
                window.topPagination = $compile('<div class="af-top-pagin" ng-show="!view.isDataProcessing"><div ng-controller="hiddenProductsLinkCtrl as hiddenProductsLink" ng-hide="view.noResultsFound"><div ng-controller="productsPaginationCtrl as pagination" ng-cloak><div class="pagin account__pagination list__pagination no-hl"><div class="list-navigation__elem" ng-show="hiddenFlag.isActive" ng-controller="accountHiddenFlagCtrl as hiddenFlag" ng-click="hiddenFlag.toggle()" ng-cloak ><span class="checkbox list-navigation__checkbox" ng-class="{\'is-selected\': hiddenFlag.isSet}" ></span> Show hidden games </div><div class="skin-selector list-navigation__elem list-navigation__elem--right" ng-show="view.isInGridMode"> Style: <span class="_dropdown is-contracted" gog-dropdown><b class="skin-selector__current" ng-show="skin.selected.wood">Wood</b><b class="skin-selector__current" ng-show="skin.selected.dark">Dark</b><b class="skin-selector__current" ng-show="skin.selected.glass">Glass</b><b class="skin-selector__current" ng-show="skin.selected.chrome">Chrome</b><b class="skin-selector__current" ng-show="skin.selected.white">White</b><b class="skin-selector__current" ng-show="skin.selected.piano">Piano</b><span class="_dropdown__pointer-wrapper skin-selector__pointer-wrapper"><i class="ic icon-dropdown-down header__switch-icon skin-selector__dropdown-icon"></i><i class="_dropdown__pointer-up"></i></span><div class="_dropdown__items skin-selector__items"><div class="_dropdown__item skin-selector__item" ng-click="skin.setWood()" ng-class="{\'is-selected\' : skin.selected.wood}"><i class="dropdown-input radio"></i>Wood <div class="skin-selector__tmb skin-selector__tmb--wood"></div></div><div class="_dropdown__item skin-selector__item" ng-click="skin.setDark()" ng-class="{\'is-selected\' : skin.selected.dark}"><i class="dropdown-input radio"></i>Dark <div class="skin-selector__tmb skin-selector__tmb--dark"></div></div><div class="_dropdown__item skin-selector__item" ng-click="skin.setGlass()" ng-class="{\'is-selected\' : skin.selected.glass}"><i class="dropdown-input radio"></i>Glass <div class="skin-selector__tmb skin-selector__tmb--glass"></div></div><div class="_dropdown__item skin-selector__item" ng-click="skin.setChrome()" ng-class="{\'is-selected\' : skin.selected.chrome}"><i class="dropdown-input radio"></i>Chrome <div class="skin-selector__tmb skin-selector__tmb--chrome"></div></div><div class="_dropdown__item skin-selector__item" ng-click="skin.setWhite()" ng-class="{\'is-selected\' : skin.selected.white}"><i class="dropdown-input radio"></i>White <div class="skin-selector__tmb skin-selector__tmb--white"></div></div><div class="_dropdown__item skin-selector__item" ng-click="skin.setPiano()" ng-class="{\'is-selected\' : skin.selected.piano}"><i class="dropdown-input radio"></i>Piano <div class="skin-selector__tmb skin-selector__tmb--piano"></div></div></div></span></div><span ng-if="pagination.totalPages > 1" class="list-navigation__pagin"><span class="pagin__prev" ng-click="pagination.prevPage()" ng-class="{\'pagin__part--inactive\' : pagination.currentPage <=1}" ><i class="ic icon-arrow-left2"></i></span><span class="pagin__current"><input type="number" min="0" max="{{pagination.totalPages}}" class="pagin__input" ng-model="pagination.currentPage" ng-model-options="{debounce:{\'default\': 500}}" ></span> of <span class="pagin__total">{{pagination.totalPages}}</span><span class="pagin__next" ng-click="pagination.nextPage()" ng-class="{\'pagin__part--inactive\' : pagination.currentPage >=pagination.totalPages}" ><i class="ic icon-arrow-right2"></i></span></span></div></div></div></div>')(viewScope);
            });
        });
        function on_update(value) 
        {
            if (GetLastPartOfDirectory(window.location.pathname) == "account")
            {
                if (value)
                {
                    $('.collection-header').after(unsafeWindow.topPagination);
                    contentEval(function() {
                        var rootScope = angular.element(document.body).injector().get('$rootScope');
                        rootScope.$evalAsync(function(rootScope)
                                             {
                            var debugEvent = new CustomEvent("debugLog",{ detail: "$evalASync"});
                            document.dispatchEvent(debugEvent);
                        });

                    });
                    styleTopPagination();
                }
                else
                {
                    $('.af-top-pagin').remove();
                }
            }
        }

        settings.onchange('library-top-pagin', on_update);
    }
}

function setShelfColour() 
{
    function on_update(value) 
    {
        if (value == "Black")
        {
            $('.library-container').addClass('black');
        }
        else
        {
            $('.library-container').removeClass('black');
        }
    }

    settings.onchange('library-shelf-colour', on_update);
}

function setLibraryStyle() 
{
    function on_update(value) 
    {
        changeLibraryStyle();
        styleTopPagination();
        if (settings.get('library-sort') == "Manual")
        {
            setTimeout(allowManualSort, 100);
        }
    }

    settings.onchange('library-style', on_update);
}

function changeLibraryStyle()
{
    if (GetLastPartOfDirectory(window.location.pathname) == "account")
    {
        switch (settings.get('library-style'))
        {
            case 'Legacy':
                debugLogger.debugLog("Legacy Library View");
                var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list-inner')).scope();
                var viewScope = unsafeWindow.angular.element(document.querySelectorAll('.header__switch')).scope();
                if (viewScope.view.isInGridMode)
                {
                    $('.list--grid').addClass('legacy').removeClass('legacy-remix');
                    $('.collection-header').addClass('legacy');
                    $('.account__pagination').addClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: settings.get('library-style')});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Legacy Library Grid View");
                }
                else
                {
                    $('.list--grid').removeClass('legacy-remix').removeClass('legacy');
                    $('.collection-header').removeClass('legacy');
                    $('.account__pagination').removeClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: 'GoG Default'});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Legacy Library List View");
                }
                break;
            case 'Legacy Remix':
                debugLogger.debugLog("Legacy Remix Library View");
                var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list-inner')).scope();
                var viewScope = unsafeWindow.angular.element(document.querySelectorAll('.header__switch')).scope();
                if (viewScope.view.isInGridMode)
                {
                    $('.list--grid').addClass('legacy-remix').removeClass('legacy');
                    $('.collection-header').addClass('legacy');
                    $('.account__pagination').addClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: settings.get('library-style')});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Legacy Remix Library Grid View");
                }
                else
                {
                    $('.list--grid').removeClass('legacy-remix').removeClass('legacy');
                    $('.collection-header').removeClass('legacy');
                    $('.account__pagination').removeClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: 'GoG Default'});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Legacy Remix Library List View");
                }
                break;
            case 'Remix':
                debugLogger.debugLog("Remix Library View");
                var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list-inner')).scope();
                var viewScope = unsafeWindow.angular.element(document.querySelectorAll('.header__switch')).scope();
                if (viewScope.view.isInGridMode)
                {
                    $('.list--grid').removeClass('legacy-remix').removeClass('legacy');
                    $('.collection-header').removeClass('legacy');
                    $('.account__pagination').removeClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: settings.get('library-style')});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Remix Library Grid View");
                }
                else
                {
                    $('.list--grid').removeClass('legacy-remix').removeClass('legacy');
                    $('.collection-header').removeClass('legacy');
                    $('.account__pagination').removeClass('legacy');
                    var compileEvent = new CustomEvent("changeTemplate",{ detail: 'GoG Default'});
                    document.dispatchEvent(compileEvent);
                    debugLogger.debugLog("Remix Library List View");
                }
                break;
            case 'GoG Default':
            default:
                $('.list--grid').removeClass('legacy-remix').removeClass('legacy');
                $('.collection-header').removeClass('legacy');
                $('.account__pagination').removeClass('legacy');
                var compileEvent = new CustomEvent("changeTemplate",{ detail: settings.get('library-style')});
                document.dispatchEvent(compileEvent);
                debugLogger.debugLog("GoG Default Library View");
                break;
        }
    }
}

function loadLibraryStyleChanger()
{
    if (GetLastPartOfDirectory(window.location.pathname) == "account")
    {
        $(document).on('updateLibraryEvent', function (e) {
            changeLibraryStyle();
            if (settings.get('library-sort') == 'Manual')
            {
                setTimeout(allowManualSort, 200);
            }
        });
        $(document).on('productsChangedEvent', function (e) {
            if (settings.get('library-sort') == 'Manual')
            {
                setTimeout(allowManualSort, 200);
            }
        });
        if (settings.get('library-sort') != 'Gog')
        {
            unsafeWindow.manualSort = true;
        }
        else
        {
            unsafeWindow.manualSort = false;
        }
        unsafeWindow.afSort = settings.get('library-sort');

        // Text colors & shadows
        addGlobalStyle('.module-header.legacy, .legacy .account__filters-option, .list__pagination.legacy { color: #210f00; text-shadow: 0 1px rgba(255, 255, 255, 0.2); }');
        addGlobalStyle('.account__pagination.legacy .skin-selector__current { color: #fff; }');
        addGlobalStyle('.black .account__pagination.legacy { color: #b2b2b2; }');
        addGlobalStyle('.black .module-header.legacy, .black .legacy .account__filters-option, .black .account__pagination.legacy .skin-selector__current, .black .account__pagination.legacy .skin-selector__dropdown-icon { color: #d5d5d5; }');
        addGlobalStyle('.black .legacy .account__filters-option, .black .collection-header.legacy, .black .account__pagination.legacy, .account__pagination.legacy .skin-selector__current { text-shadow: 0 1px rgba(0, 0, 0, 0.2); }');
        addGlobalStyle('._dropdown__items { text-shadow: none; }');
        // Header & top pagination
        addGlobalStyle('.collection-header.legacy { background: url(/www/default/-img/acc_shelf_wood1.jpg) no-repeat 0 0 / cover; padding-left: 30px; }');
        addGlobalStyle('.black .collection-header.legacy { background: url(/www/default/-img/acc_shelf_dark1.jpg) no-repeat 0 0 / cover; }');
        addGlobalStyle('.af-top-pagin .account__pagination.legacy { background: none !important; height: 51px; margin: 0 0 -51px; padding: 0; position: relative; top: -51px; }');
        addGlobalStyle('.af-top-pagin .legacy .list-navigation__elem:first-child { display: none !important; }');
        // Library
        addGlobalStyle('.list--grid .product-row-wrapper.no-after:after { content: none; }');
        addGlobalStyle('.legacy ._product-flag.product-title__flag.af-bundle-text { padding: 2px 5px; font-size: 10px; line-height: 13px; background: none; color: #000; color: white; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }');
        //Style works when zoomed in
        //addGlobalStyle('@media (min-width: 530px) {.list--grid .product-row-wrapper.no-after:before { content: ""; position: absolute; left: 0; right: 0; z-index: -1; height: 286px; background: url(/www/default/-img/shelf_bg.jpg) 0%/165% no-repeat; background-position: 0 0;}}');
        addGlobalStyle('.list--grid .product-row-wrapper.no-after:before { background: url(/www/default/-img/shelf_bg.jpg) no-repeat 0 0 / cover; content: ""; height: 286px; position: absolute; left: 0; right: 0; z-index: -1; }');
        addGlobalStyle('.black .list--grid .product-row-wrapper.no-after:before { background-image: url(/www/default/-img/acc_shelf_dark2.jpg); height: 272px; }');
        addGlobalStyle('@media (max-width: 1100px) { .black .list--grid .product-row-wrapper.no-after:before { height: 248px; }}');
        addGlobalStyle('.list--grid.legacy { padding-left: 5px; }');
        addGlobalStyle('.list--grid.legacy-remix { padding: 0 15px; }');
        addGlobalStyle('.list--grid.legacy, .list--grid.legacy-remix { margin: 0; }');
        addGlobalStyle('.list--grid .product-row-wrapper.legacy { box-sizing: content-box; padding: 0 25px 91px; width: 160px; height: 180px; }');
        addGlobalStyle('@media (max-width: 1100px) { .list--grid .product-row-wrapper.legacy { box-sizing: content-box; padding: 0 20px 68px; width: 144px; height: 180px; }}');
        addGlobalStyle('@media (max-width: 1100px) { .legacy .product-row__picture { padding-bottom: 202.5px !important; }}');
        // Update markers
        addGlobalStyle('.remix .is-updated .product-hover-trigger { top: 5px; right: 5px; left: auto; bottom: auto; width: 15px; height: 15px; background: #2f93da; background: -moz-linear-gradient(45deg, #2f93da 1%, #7db9e8 100%); background: -webkit-gradient(linear, left bottom, right top, color-stop(1%,#2f93da), color-stop(100%,#7db9e8)); background: -webkit-linear-gradient(45deg, #2f93da 1%,#7db9e8 100%); background: -o-linear-gradient(45deg, #2f93da 1%,#7db9e8 100%); background: -ms-linear-gradient(45deg, #2f93da 1%,#7db9e8 100%); background: linear-gradient(45deg, #2f93da 1%,#7db9e8 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#2f93da\', endColorstr=\'#7db9e8\',GradientType=1 ); border-radius: 70px; box-shadow: 0 0px 6px 2px rgb(255, 255, 255); z-index: 0; }');
        addGlobalStyle('.remix .product-updated-tooltip { top: 30px; right: -10px; bottom: auto; left: auto; }');
        addGlobalStyle('.remix ._tooltip__triangle { right: 12px; bottom: 100%; top: auto; left: auto; -moz-transform: scaleY(-1); -o-transform: scaleY(-1); -webkit-transform: scaleY(-1); -ms-transform: scaleY(-1); transform: scaleY(-1); -ms-filter: "FlipV"; filter: FlipV; }');
        //New / Coming Soon markers
        addGlobalStyle('.remix .product-title__flags { display: block; position: absolute; top: 5px; right: auto; left: 5px; bottom: auto; }');
        addGlobalStyle('.remix ._product-flag.product-title__flag { padding: 2px 5px; font-size: 10px; line-height: 13px; background: #b00000; color: #f7f7f7; }');
        // (Mostly bottom) pagination
        addGlobalStyle('.account__pagination.legacy { background: url(/www/default/-img/acc_shelf_wood1.jpg) no-repeat 0 -52px / cover; height: 68px; position: relative; margin-top: 0; }');
        addGlobalStyle('.black .account__pagination.legacy { background: url(/www/default/-img/acc_shelf_dark1.jpg) no-repeat 0 -52px / cover; }');
        addGlobalStyle('.legacy .list-navigation__elem:first-child { padding: 0; position: absolute; left: 30px; top: 50%; transform: translateY(-50%); }');
        addGlobalStyle('.legacy .list-navigation__pagin { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }');
        addGlobalStyle('.account__pagination.legacy .pagin__current { background-image: linear-gradient(to bottom, rgba(83, 37, 0, 0.7), rgba(126, 78, 31, 0.7)); border: 1px solid; border-color: #4c2809 #58300d #6e4117 #5f3613; border-radius: 4px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.2); margin: 0 12px 0 6px; }');
        addGlobalStyle('.black .account__pagination.legacy .pagin__current { background-color: rgba(37, 37, 37, 0.5); background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(37, 37, 37, 0.5)); border-color: #080808 #0f0f0f #161616 #0e0e0e; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.05); }');
        addGlobalStyle('.account__pagination.legacy .skin-selector { margin: 0; padding: 0; position: absolute; right: 30px; top: 50%; transform: translateY(-50%); z-index: 1; }');
        //unsafeWindow.legacyUrls    = cloneInto (urlList, unsafeWindow);
        contentEval(function() {
            var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
            var http = angular.element(document.body).injector().get('$http');
            libraryScope.reportedUrls = {};
            libraryScope.getLegacyUrl = function (id) 
            {
                if (window.legacyUrls.hasOwnProperty(id))
                {
                    if (window.legacyUrls[id].hasOwnProperty("url"))
                    {
                        return window.legacyUrls[id].url;
                    }
                    else if (window.legacyUrls.hasOwnProperty(window.legacyUrls[id].bundleId))
                    {
                        return window.legacyUrls[window.legacyUrls[id].bundleId].url;
                    }
                }
                else
                {
                    if (!libraryScope.reportedUrls.hasOwnProperty(id))
                    {
                        http.get("https://gog.bigpizzapies.com/af_legacy_urls.php?report&&id=" + id);
                        libraryScope.reportedUrls[id] = "reported";
                    }
                }
            }
            libraryScope.isBundled = function (id) 
            {
                if (window.legacyUrls.hasOwnProperty(id))
                {
                    if ((!window.legacyUrls[id].hasOwnProperty("url")) && window.legacyUrls[id].hasOwnProperty("bundleId"))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            libraryScope.manualSort = function()
            {
                return window.manualSort;
            }

            angular.element(document).injector().invoke(function($compile, $templateCache) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "compileLibrary called"});
                document.dispatchEvent(debugEvent);
                var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
                $templateCache.put('afDefault.html', '<div class="list-inner" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in productPage.products track by product.id" ng-class="{ \'dimming-chooser__active-element-wrap\': chooser.chosenID === product.id }"><div class="product-state-holder product-row js-details-pointer dimming-chooser__element product-row--has-action" draggable="{{manualSort()}}" gog-account-product="{{:: product.id }}" gog-product-dropdown-pointer="{{ product.id }}" ng-class="{ \'is-hidden\': product.isHidden, \'is-updated\': product.updates }" ng-click="chooser.setChosenID({{ ::product.id }}, $event)"><div class="js-dropdown-pointer product-row__action product-row__action--dropdown-pointer product-row__alignment"></div><div class="product-btn product-btn--placeholder"></div><div class="product-row__link"><div class="product-row__picture"><img class="product-row__img" ng-srcset="{{::product.image | image:196:\'jpg\'}} , {{::product.image | image:392:\'jpg\'}} 2x" alt="{{product.title}}"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isNew &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="::product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isNew || product.isInDevelopment" ng-cloak gog-labeled-title=\'{ "maxLineNumber": 2, "title": "{{ ::product.title }}" }\'><span class="product-title__text" ng-bind="::product.title"></span><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isNew" class="_product-flag product-title__flag product-title__flag--new">new</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating js-star-rating star-rating"></span><span class="product-row__os" ng-if="::product.isGame"><i class="ic icon-win" ng-if="::product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="::product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="::product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="::product.isMovie">MOVIE</span><span class="product-row__genre product-row__tag" ng-bind="accountProduct.firstTag"></span></div></div></div></div></div><div class="product-hover-trigger"></div><div class="_tooltip product-updated-tooltip"> UPDATED! This game has updates waiting for you <span class="_tooltip__triangle"></span></div></div></div></div>');
                $templateCache.put('afLegacy.html', '<div class="list-inner remix" ng-show="!view.isDataProcessing"><div class="product-row-wrapper no-after legacy" ng-repeat="product in productPage.products track by product.id" ng-class="{\'dimming-chooser__active-element-wrap\': chooser.chosenID === product.id}"><div class="product-state-holder product-row js-details-pointer dimming-chooser__element product-row--has-action" draggable="{{manualSort()}}" gog-account-product="{{:: product.id }}" gog-product-dropdown-pointer="{{ product.id }}" ng-class="{\'is-hidden\': product.isHidden, \'is-updated\': product.updates}" ng-click="chooser.setChosenID({{ ::product.id }}, $event)" style="margin-top: 20px; box-shadow: rgba(0, 0, 0, 0.74902) 5px -5px 5px 0px;"><div class="js-dropdown-pointer product-row__action product-row__action--dropdown-pointer product-row__alignment"></div><div class="product-btn product-btn--placeholder"></div><div class="product-row__link"><div class="product-row__picture" style="padding-bottom: 225px;"><img class="product-row__img" ng-srcset="{{getLegacyUrl(product.id)}}" alt="{{product.title}}" title="{{product.title}}"></div><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isNew" class="_product-flag product-title__flag product-title__flag--new">new</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span><span class="product-title__flags" style="top: auto; bottom: 5px; white-space: pre-wrap; margin: 0 5px; left: auto;"><span ng-if="isBundled(product.id)" class="_product-flag product-title__flag ng-scope af-bundle-text">{{product.title}}</span></span><div class="product-hover-trigger"></div><div class="_tooltip product-updated-tooltip"> UPDATED! This game has updates waiting for you <span class="_tooltip__triangle"></span></div></div></div><!-- wrapper --></div>');
                $templateCache.put('afLegacyRemix.html', '<div class="list-inner remix" ng-show="!view.isDataProcessing"><div class="product-row-wrapper no-after" ng-repeat="product in productPage.products track by product.id" ng-class="{\'dimming-chooser__active-element-wrap\': chooser.chosenID === product.id}"><div class="product-state-holder product-row js-details-pointer dimming-chooser__element product-row--has-action" draggable="{{manualSort()}}" gog-account-product="{{:: product.id }}" gog-product-dropdown-pointer="{{ product.id }}" ng-class="{\'is-hidden\': product.isHidden, \'is-updated\': product.updates}" ng-click="chooser.setChosenID({{ ::product.id }}, $event)" style="margin-top: 55px; margin-bottom: 25px; box-shadow: rgba(0, 0, 0, 0.74902) 5px -5px 5px 0px;"><div class="js-dropdown-pointer product-row__action product-row__action--dropdown-pointer product-row__alignment"></div><div class="product-btn product-btn--placeholder"></div><div class="product-row__link"><div class="product-row__picture" style="padding-bottom: 100%;"><img class="product-row__img" ng-srcset="{{::product.image | image:392:\'jpg\'}} 2x" alt="{{product.title}}"></div><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isNew" class="_product-flag product-title__flag product-title__flag--new">new</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span><div class="product-hover-trigger"></div><div class="_tooltip product-updated-tooltip"> UPDATED! This game has updates waiting for you <span class="_tooltip__triangle"></span></div></div></div><!-- wrapper --></div>');
                $templateCache.put('afRemix.html', '<div class="list-inner remix" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in productPage.products track by product.id" ng-class="{\'dimming-chooser__active-element-wrap\': chooser.chosenID === product.id}"><div class="product-state-holder product-row js-details-pointer dimming-chooser__element product-row--has-action" draggable="{{manualSort()}}" gog-account-product="{{:: product.id }}" gog-product-dropdown-pointer="{{ product.id }}" ng-class="{\'is-hidden\': product.isHidden, \'is-updated\': product.updates}"ng-click="chooser.setChosenID({{ ::product.id }}, $event)" style="box-shadow: rgba(0, 0, 0, 0.74902) 5px -5px 5px 0px;"><div class="js-dropdown-pointer product-row__action product-row__action--dropdown-pointer product-row__alignment"></div><div class="product-btn product-btn--placeholder"></div><div class="product-row__link"><div class="product-row__picture" style="padding-bottom: 100%;"><img class="product-row__img" ng-srcset="{{::product.image | image:392:\'jpg\'}} 2x" alt="{{product.title}}"></div><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isNew" class="_product-flag product-title__flag product-title__flag--new">new</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span><div class="product-hover-trigger"></div><div class="_tooltip product-updated-tooltip"> UPDATED! This game has updates waiting for you <span class="_tooltip__triangle"></span></div></div></div><!-- wrapper --></div>');
                //libraryScope.template = 'afDefault.html';
                window.templateCompiled = $compile('<div ng-repeat="productPage in afProducts | orderBy: \'page\'"><ng:include src="template"></ng:include></div>')(libraryScope);
                libraryScope.setTemplate = function (templateName) {
                    switch (templateName)
                    {
                        case 'GoG Default':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "GoG Default template set"});
                            document.dispatchEvent(debugEvent);
                            libraryScope.template = 'afDefault.html';
                            break;
                        case 'Legacy':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "Legacy template set"});
                            document.dispatchEvent(debugEvent);
                            libraryScope.template = 'afLegacy.html';
                            break;
                        case 'Legacy Remix':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "Legacy Remix template set"});
                            document.dispatchEvent(debugEvent);
                            libraryScope.template = 'afLegacyRemix.html';
                            break;
                        case 'Remix':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "Remix template set"});
                            document.dispatchEvent(debugEvent);
                            libraryScope.template = 'afRemix.html';
                            break;
                    }
                }
                var debugEvent = new CustomEvent("debugLog",{ detail: "Templates Compiled"});
                document.dispatchEvent(debugEvent);
            });



            document.addEventListener('changeTemplate', function (e) 
                                      { 
                var debugEvent = new CustomEvent("debugLog",{ detail: "Change template event called"});
                document.dispatchEvent(debugEvent);
                var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
                libraryScope.$evalAsync(function(libraryScope)
                                        {
                    libraryScope.setTemplate(e.detail);
                });
            }, false);

            var viewScope = angular.element(document.querySelectorAll('.header__switch')).scope();
            viewScope.$watch(
                "view.isInGridMode",
                function(newValue, oldValue)
                {
                    if (newValue != oldValue)
                    {
                        var debugEvent = new CustomEvent("debugLog",{ detail: "Library view changed"});
                        document.dispatchEvent(debugEvent);
                        document.dispatchEvent(new Event("updateLibraryEvent"));
                    }
                }
            );
        });
        //if (GetLastPartOfDirectory(window.location.pathname) == "account")
        //{
        $('.list-inner').replaceWith(unsafeWindow.templateCompiled);
        //}
        setLibraryStyle();
    }
}

function setGamesPerPage() 
{
    var firstCall = true;
    function on_update(value) 
    {
        unsafeWindow.gamesPerPage = settings.get('library-games-per-page');
        if (!firstCall)
        {
            if (GetLastPartOfDirectory(window.location.pathname) == "account")
            {
                contentEval(function(){
                    var accountPagin = angular.element(document.body).injector().get('accountPagination');
                    accountPagin.resetPage();
                    var account = angular.element(document.body).injector().get('account');
                    account._filtersAggregator._updateListeners.callListeners();
                });
            }
        }
        firstCall = false;
    }

    settings.onchange('library-games-per-page', on_update);
}

function gamesPerPageOption()
{
    if (GetLastPartOfDirectory(window.location.pathname) == "account")
    {
        $(document).on('manualSortEvent', function (e) {
            manualSortProducts();
            document.dispatchEvent(new Event("FinishDataLoadManualSortEvent"));
        });
        $(document).on('lastUpdatedSortEvent', function (e) {
            lastUpdatedSortProducts();
            document.dispatchEvent(new Event("FinishDataLoadManualSortEvent"));
        });

        unsafeWindow.gamesPerPage = settings.get('library-games-per-page');
        if (settings.get('library-sort') != 'Gog')
        {
            unsafeWindow.manualSort = true;
        }
        else
        {
            unsafeWindow.manualSort = false;
        }
        unsafeWindow.afSort = settings.get('library-sort');
        contentEval(function(){
            var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
            libraryScope.afProducts = [];
            libraryScope.afManualSortProducts = [];
            var account = angular.element(document.body).injector().get('account');
            var tempArray = [];
            var lastFilters;
            account.afGetData = function() {
                libraryScope.afProducts.length = 0;
                var gamesPerPage = window.gamesPerPage;
                var e;
                var promises = [];
                account._setDataProcessingState(!0);
                var c = account._accountParametersAggregator.getCurrentParameters();
                var currentPage = c.page;
                var debugEvent = new CustomEvent("debugLog",{ detail: "afGetData Called page: " + currentPage});
                document.dispatchEvent(debugEvent);
                if (!window.manualSort)
                {
                    if (gamesPerPage == "All")
                    {
                        for (var i = 1; i <= c.totalPages; i++)
                        {
                            var b, c, d;
                            d = {};
                            c = account._accountParametersAggregator.getCurrentParameters();
                            b = account._filtersAggregator.getCurrentParameters();
                            angular.extend(d, c, b);
                            d.page = i;
                            e = account._gameSeeker.call(d);
                            e.then(account._afProcessDataUpdate.bind(account, i));
                            promises.push(e);
                        }
                    }
                    else
                    {
                        for (var i = 1 + ((currentPage - 1) * (gamesPerPage / 100)); i <= Math.min((currentPage * (gamesPerPage / 100)), c.totalPages); i++)
                        {
                            var b, c, d;
                            d = {};
                            c = account._accountParametersAggregator.getCurrentParameters();
                            b = account._filtersAggregator.getCurrentParameters();
                            angular.extend(d, c, b);
                            d.page = i;
                            e = account._gameSeeker.call(d);
                            e.then(account._afProcessDataUpdate.bind(account, i));
                            promises.push(e);
                        }
                    }
                }
                else
                {
                    var filterParameters = account._filtersAggregator.getCurrentParameters();
                    var arrayChanged = false;
                    if (JSON.stringify(filterParameters) !== JSON.stringify(lastFilters) || account.afRefreshManualSort)
                    {
                        libraryScope.afManualSortProducts.length = 0
                        tempArray = [];
                        var debugEvent = new CustomEvent("debugLog",{ detail: "Manual sorting selected, retrieving products"});
                        document.dispatchEvent(debugEvent);
                        for (var i = 1; i <= gogData.totalPages/*c.totalPages*/; i++)
                        {
                            var b, c, d;
                            d = {};
                            c = account._accountParametersAggregator.getCurrentParameters();
                            b = account._filtersAggregator.getCurrentParameters();
                            angular.extend(d, c, b);
                            d.page = i;
                            e = account._gameSeeker.call(d);
                            e.then(account._afProcessDataUpdateManualSort.bind(account, i));
                            promises.push(e);
                        }
                        lastFilters = filterParameters;
                        arrayChanged = true;
                        account.afRefreshManualSort = false;
                    }
                    else
                    {
                        var debugEvent = new CustomEvent("debugLog",{ detail: "Filters not changed, product list does not need updating"});
                        document.dispatchEvent(debugEvent);
                    }
                }

                angular.element(document.body).injector().get('$q').all(promises).then(function()
                                                                                       {
                    if (!window.manualSort)
                    {
                        account._afFinishDataLoad(currentPage, gamesPerPage);
                    }
                    else
                    {
                        account._afFinishDataLoadManualSort(currentPage, gamesPerPage, arrayChanged);
                    }
                }
                                                                                      );
                return angular.element(document.body).injector().get('$q').all(promises)["finally"](account._setDataProcessingState.bind(account, !1))
            }
            account._afProcessDataUpdate = function(i, a) {
                null == a && (a = {
                    products: [],
                    totalProducts: 0,
                    totalHiddenProductsCount: 0
                });
                libraryScope.afProducts.push({ page: i, products: a.products});
            }
            account._afProcessDataUpdateManualSort = function(i, a) {
                null == a && (a = {
                    products: [],
                    totalProducts: 0,
                    totalHiddenProductsCount: 0
                });
                var debugEvent = new CustomEvent("debugLog",{ detail: "Process Manual Sort page: " + i});
                document.dispatchEvent(debugEvent);
                //libraryScope.afManualSortProducts.push.apply(libraryScope.afManualSortProducts, a.products);
                //libraryScope.afManualSortProducts.splice.apply(libraryScope.afManualSortProducts, [(i-1)*100, 0].concat(a.products));
                tempArray[i] = a.products;
            }

            account._afFinishDataLoad = function(currentPage, gamesPerPage) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "Finish Data Load"});
                document.dispatchEvent(debugEvent);
                var totalPages;
                if (gamesPerPage == "All")
                {
                    totalPages = 1;
                }
                else
                {
                    totalPages = Math.ceil(parseInt(libraryScope.products.totalProducts) / gamesPerPage);
                }
                var b = {
                    page: currentPage,
                    totalProducts: libraryScope.products.totalProducts,
                    totalPages: totalPages
                };
                var c = {
                    page: currentPage,
                    sortBy: account.sortBy,
                    contentSystemCompatibility: account.contentSystemCompatibility
                };

                account._paginationDataListeners.callListeners(b)
                account._filteringDataListeners.callListeners(c)
                document.dispatchEvent(new Event("productsChangedEvent"));
            }
            account._afFinishDataLoadManualSort = function(currentPage, gamesPerPage, arrayChanged) {
                if (arrayChanged)
                {
                    for (var i = 1; i <= gogData.totalPages; i++)
                    {
                        libraryScope.afManualSortProducts.push.apply(libraryScope.afManualSortProducts, tempArray[i]);
                    }
                }
                if (window.afSort == "Manual")
                {
                    document.dispatchEvent(new Event("manualSortEvent"));
                }
                else if (window.afSort == "Last Updated")
                {
                    document.dispatchEvent(new Event("lastUpdatedSortEvent"));
                }
            }

            document.addEventListener('updateManualSortEvent', function (e) 
                                      { 
                libraryScope.$apply(function(libraryScope)
                                    {
                    libraryScope.afProducts = [];
                    var gamesPerPage = window.gamesPerPage;
                    var c = account._accountParametersAggregator.getCurrentParameters();
                    var currentPage = c.page;
                    if (gamesPerPage == "All")
                    {
                        for (var i = 0; i < gogData.totalPages; i++)
                        {
                            libraryScope.afProducts.push({ page: i, products: libraryScope.afManualSortProducts.slice(i * 100, (i * 100)+100)});
                        }
                    }
                    else
                    {
                        for (var i = ((currentPage - 1) * (gamesPerPage / 100)); i < (currentPage * (gamesPerPage / 100)); i++)
                        {
                            libraryScope.afProducts.push({ page: i, products: libraryScope.afManualSortProducts.slice(i * 100, (i * 100)+100)});
                        }
                    }
                });
                document.dispatchEvent(new Event("productsChangedEvent"));
            }, false);

            document.addEventListener('FinishDataLoadManualSortEvent', function (e) 
                                      { 
                var debugEvent = new CustomEvent("debugLog",{ detail: "Finish Data Load (Manual Sort)"});
                document.dispatchEvent(debugEvent);

                var currentPage = account._accountParametersAggregator.getCurrentParameters().page;
                var gamesPerPage = window.gamesPerPage;
                var totalPages;
                if (gamesPerPage == "All")
                {
                    totalPages = 1;
                }
                else
                {
                    totalPages = Math.ceil(parseInt(libraryScope.products.totalProducts) / gamesPerPage);
                }
                var b = {
                    page: currentPage,
                    totalProducts: libraryScope.products.totalProducts,
                    totalPages: totalPages
                };
                var c = {
                    page: currentPage,
                    sortBy: account.sortBy,
                    contentSystemCompatibility: account.contentSystemCompatibility
                };
                if (gamesPerPage == "All")
                {
                    for (var i = 0; i < gogData.totalPages; i++)
                    {
                        libraryScope.afProducts.push({ page: i, products: libraryScope.afManualSortProducts.slice(i * 100, (i * 100)+100)});
                    }
                }
                else
                {
                    for (var i = ((currentPage - 1) * (gamesPerPage / 100)); i < (currentPage * (gamesPerPage / 100)); i++)
                    {
                        libraryScope.afProducts.push({ page: i, products: libraryScope.afManualSortProducts.slice(i * 100, (i * 100)+100)});
                    }
                }

                account._paginationDataListeners.callListeners(b)
                account._filteringDataListeners.callListeners(c)
                document.dispatchEvent(new Event("productsChangedEvent"));
            }, false);

            account.afGetData();
            account.registerProductsDataListener(account.afGetData);
        });
    }
}

function setManualSort()
{
    var firstCall = true;
    function on_update(value)
    {
        if (settings.get('library-sort') != 'Gog')
        {
            unsafeWindow.manualSort = true;
        }
        else
        {
            unsafeWindow.manualSort = false;
        }
        unsafeWindow.afSort = settings.get('library-sort');
        if (GetLastPartOfDirectory(window.location.pathname) == "account")
        {
            if (!firstCall)
            {
                contentEval(function(){
                    var accountPagin = angular.element(document.body).injector().get('accountPagination');
                    accountPagin.resetPage();
                    var account = angular.element(document.body).injector().get('account');
                    account._filtersAggregator._updateListeners.callListeners();
                });
            }
            firstCall = false;
            if (value == "Manual")
            {
                allowManualSort();
                var dropdownItem = $('<span class="product-dropdown__item _dropdown__item" id="af-dropdown-manual-sort">Move</span>');
                $(".product-dropdown__items").append(dropdownItem);
                $("#af-dropdown-manual-sort").click(function() {
                    debugLogger.debugLog('Manual Sort Move');
                    var scope = unsafeWindow.angular.element(this).scope();
                    changeSortPopUp(scope.product.id, scope.product.title);
                });
            }
            else
            {
                $("#af-dropdown-manual-sort").remove();
            }
        }
    }

    settings.onchange('library-sort', on_update);
}

function normaliseManualSortOrder(sortOrder)
{
    debugLogger.debugLog("Normalise Manual Sort Order");
    var keys = Object.keys(sortOrder);

    function sortKeys(a, b)
    {
        if (sortOrder[a].sortBy === null && sortOrder[b].sortBy === null)
        {
            return naturalCompare(sortOrder[a].name, sortOrder[b].name);
        }
        else if (sortOrder[a].sortBy === null)
        {
            return 1;
        }
        else if (sortOrder[b].sortBy === null)
        {
            return -1;
        }
        return (sortOrder[a].sortBy < sortOrder[b].sortBy) ? -1 : (sortOrder[a].sortBy > sortOrder[b].sortBy) ? 1 : naturalCompare(sortOrder[a].name, sortOrder[b].name);
    }

    keys.sort(sortKeys);

    for (var i = 0; i < keys.length; i++)
    {
        sortOrder[keys[i]].sortBy = i;
    }
    GM_setValue('manual_sort_order',JSON.stringify(sortOrder));
}

function retrieveManualSortOrder()
{
    debugLogger.debugLog("Retrieve Manual Sort Order");
    var manualSortOrderJSON = GM_getValue('manual_sort_order');
    var manualSortOrder;
    if (manualSortOrderJSON === undefined)
    {
        manualSortOrder = {};
        var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list')).scope();
        var products = libraryScope.afManualSortProducts;
        for (var i = 0; i < products.length; i++)
        {
            manualSortOrder[products[i].id] = {id: products[i].id, name: products[i].title, sortBy: i};
        }
        GM_setValue('manual_sort_order',JSON.stringify(manualSortOrder));
    }
    else
    {
        manualSortOrder = JSON.parse(manualSortOrderJSON);
    }

    addNewGamesToSortOrder(manualSortOrder);
    unsafeWindow.manualSortOrder = cloneInto (manualSortOrder, unsafeWindow);
    return manualSortOrder;
}

function addNewGamesToSortOrder(manualSortOrder)
{
    var libraryScope = unsafeWindow.angular.element(document.querySelectorAll('.list')).scope();
    var products = libraryScope.afManualSortProducts;
    var update = false;
    for (var i = 0; i < products.length; i++)
    {
        if (!manualSortOrder.hasOwnProperty(products[i].id))
        {
            debugLogger.debugLog("New Product");
            var sortByValue;
            if (settings.get('library-manual-sort-new-game'))
            {
                sortByValue = -1;
            }
            else
            {
                sortByValue = 9999;
            }
            manualSortOrder[products[i].id] = {id: products[i].id, name: products[i].title, sortBy: sortByValue};
            var update = true;
        }
    }
    if (update)
    {
        normaliseManualSortOrder(manualSortOrder);
        //GM_setValue('manual_sort_order',JSON.stringify(manualSortOrder));
    }
}

function changeSortPopUp(idToMove, title)
{
    debugLogger.debugLog('Change Sort Pop Up');
    manualSortPopup.show(idToMove, title);
}

function changeProductSortOrder(idToMove, newPositionId)
{
    debugLogger.debugLog("Change Product Sort Order");
    debugLogger.debugLog(idToMove + " " + newPositionId);
    var manualSortOrder = retrieveManualSortOrder();
    var movingId = manualSortOrder[idToMove];
    debugLogger.debugLog(movingId.sortBy + " " + manualSortOrder[newPositionId].sortBy);
    var difference = movingId.sortBy - manualSortOrder[newPositionId].sortBy;
    if (difference == -1)
    {
        movingId.sortBy = manualSortOrder[newPositionId].sortBy + 0.1;
    }
    else
    {
        movingId.sortBy = manualSortOrder[newPositionId].sortBy - 0.1;
    }

    normaliseManualSortOrder(manualSortOrder);
    manualSortProducts();
    var scroll = $(window).scrollTop();
    document.dispatchEvent(new Event("updateManualSortEvent"));
    $(window).scrollTop(scroll);
}

function exportManualSort(manualSortOrder)
{
    unsafeWindow.manualSortOrderJSON = cloneInto (JSON.stringify(manualSortOrder), unsafeWindow);
    contentEval(function(){
        window.manualSortOrder = JSON.parse(window.manualSortOrderJSON);
    });
}

function manualSortProducts()
{
    debugLogger.debugLog("Manual Sort Products");
    var manualSortOrder = retrieveManualSortOrder();

    if (palemoon)
    {
        exportManualSort(manualSortOrder);
    }

    contentEval(function(){

        function naturalCompare(a, b)
        {
            // thanks to stackoverflow user georg for this function here: http://stackoverflow.com/a/15479354
            var ax = [],
                bx = [];
            a.replace(/(\d+)|(\D+)/g, function(_, $1, $2)
                      {
                ax.push([$1 || Infinity, $2 || ""])
            });
            b.replace(/(\d+)|(\D+)/g, function(_, $1, $2)
                      {
                bx.push([$1 || Infinity, $2 || ""])
            });
            while(ax.length && bx.length)
            {
                var an = ax.shift();
                var bn = bx.shift();
                var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
                if(nn) return nn;
            }
            return ax.length - bx.length;
        }

        function manualSortFunction(a, b)
        {
            if (manualSortOrder[a.id].sortBy === null && manualSortOrder[b.id].sortBy === null)
            {
                return naturalCompare(manualSortOrder[a.id].name, manualSortOrder[b.id].name);
            }
            else if (manualSortOrder[a.id].sortBy === null)
            {
                return 1;
            }
            else if (manualSortOrder[b.id].sortBy === null)
            {
                return -1;
            }
            return (manualSortOrder[a.id].sortBy < manualSortOrder[b.id].sortBy) ? -1 : (manualSortOrder[a.id].sortBy > manualSortOrder[b.id].sortBy) ? 1 : naturalCompare(manualSortOrder[a.id].name, manualSortOrder[b.id].name);
        }
        var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
        libraryScope.afManualSortProducts.sort(manualSortFunction);
    });
    debugLogger.debugLog("Manual Sort Done");
}

function lastUpdatedSortProducts()
{
    debugLogger.debugLog("Last Updated Sort Products");

    contentEval(function(){
        function naturalCompare(a, b)
        {
            // thanks to stackoverflow user georg for this function here: http://stackoverflow.com/a/15479354
            var ax = [],
                bx = [];
            a.replace(/(\d+)|(\D+)/g, function(_, $1, $2)
                      {
                ax.push([$1 || Infinity, $2 || ""])
            });
            b.replace(/(\d+)|(\D+)/g, function(_, $1, $2)
                      {
                bx.push([$1 || Infinity, $2 || ""])
            });
            while(ax.length && bx.length)
            {
                var an = ax.shift();
                var bn = bx.shift();
                var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
                if(nn) return nn;
            }
            return ax.length - bx.length;
        }

        function lastUpdatedSortFunction(a, b)
        {
            if (!(updatedList.hasOwnProperty(a.id)) && !(updatedList.hasOwnProperty(b.id)))
            {
                return naturalCompare(a.title, b.title);
            }
            else if (!updatedList.hasOwnProperty(a.id))
            {
                return 1;
            }
            else if (!updatedList.hasOwnProperty(b.id))
            {
                return -1;
            }
            else if (updatedList[a.id]['win'] === null && updatedList[b.id]['win'] === null)
            {
                return naturalCompare(a.title, b.title);
            }
            else if (updatedList[a.id]['win'] === null)
            {
                return 1;
            }
            else if (updatedList[b.id]['win'] === null)
            {
                return -1;
            }
            var dateA = new Date(updatedList[a.id]['win']["date_published"]);
            var dateB = new Date(updatedList[b.id]['win']["date_published"]);
            return dateA>dateB ? -1 : dateA<dateB ? 1 : 0;
        }
        var libraryScope = angular.element(document.querySelectorAll('.list')).scope();
        libraryScope.afManualSortProducts.sort(lastUpdatedSortFunction);
    });

    debugLogger.debugLog("Last Updated Sort Done");
}

function allowManualSort()
{
    if (GetLastPartOfDirectory(window.location.pathname) == "account")
    {
        debugLogger.debugLog("Allow Manual Sort");
        addGlobalStyle('.dragging { opacity: 0.4; border: solid #b70000 3px !important}');
        addGlobalStyle('.product-row.over { opacity: 0.6 }');
        //$(".product-row").attr("draggable","true");

        var dragSrcEl = null;
        var products = unsafeWindow.angular.element(document.querySelectorAll('.list')).scope().afManualSortProducts;

        function handleDragStart(e) {
            debugLogger.debugLog("drag start");
            $(this).addClass('dragging');  // this / e.target is the source node.

            dragSrcEl = this;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }
        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }

            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
        }
        function handleDragEnter(e) {
            //debugLogger.debugLog("drag enter");
            // this / e.target is the current hover target.
            if (dragSrcEl != this)
                $(this).addClass('over');
        }

        function handleDragLeave(e) {
            //debugLogger.debugLog("drag leave");
            $(this).removeClass('over');  // this / e.target is previous target element.
        }
        function handleDrop(e) {
            debugLogger.debugLog("drag drop");
            // this / e.target is current target element.
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }

            $(dragSrcEl).removeClass('dragging');

            // Don't do anything if dropping the same column we're dragging.
            if (dragSrcEl != this) {
                //debugLogger.debugLog($(this).find(".product-row").attr("gog-account-product"));
                //$(this).before(dragSrcEl);
                //debugLogger.debugLog(products.indexOf(productRepository[$(dragSrcEl).find(".product-row").attr("gog-account-product")]));
                changeProductSortOrder($(dragSrcEl).attr("gog-account-product"), $(this).attr("gog-account-product"));
            }

            return false;
        }
        function handleDragEnd(e) {
            debugLogger.debugLog("drag end");
            $(this).removeClass('dragging');
            // this/e.target is the source node.
            $(".product-row").removeClass('over');
        }
        $(".product-row").each(function( index ) {
            if(!$(this).data("handlersBound"))
            {
                this.addEventListener('dragstart', handleDragStart, false);
                this.addEventListener('dragenter', handleDragEnter, false);
                this.addEventListener('dragover', handleDragOver, false);
                this.addEventListener('dragleave', handleDragLeave, false);
                this.addEventListener('drop', handleDrop, false);
                this.addEventListener('dragend', handleDragEnd, false);
                $(this).data("handlersBound", true);
            }
        });
    }
}

function setLibraryProductTotals()
{
    function on_update(value)
    {
        if ((GetLastPartOfDirectory(window.location.pathname) == "account") || (GetLastPartOfDirectory(window.location.pathname) == "movies"))
        {
            unsafeWindow.afProductCountBool = value;
            contentEval(function() {
                var scope = angular.element(document.querySelectorAll('.collection-header')).scope();
                scope.afProductCount = window.afProductCountBool;
                scope.$apply();
            });
        }
    }

    settings.onchange('library-product-count', on_update);
}

function fixLibraryProductTotals()
{
    if ((GetLastPartOfDirectory(window.location.pathname) == "account") || (GetLastPartOfDirectory(window.location.pathname) == "movies"))
    {
        contentEval(function() {
            angular.element(document).injector().invoke(function($compile) {
                var html = '<div class="module-header collection-header cf" ng-cloak><div class="_dropdown header-dropdown is-contracted" gog-dropdown><span ng-show="view.showingCategoryCollection"> My Collection (<span ng-show="afProductCount"><span ng-bind="products.totalProducts"></span> / </span><span ng-bind="view.totalProductsCount"></span><span ng-if="view.totalUpdatedCount">, <ng-pluralize count="view.totalUpdatedCount" when="{ one: \'{} updated\', few: \'{} updated\', many: \'{} updated\', other: \'{} updated\' }"></ng-pluralize></span>)</span><span class="ng-show" ng-show="view.showingCategoryUpdated"> Updated (<span ng-bind="view.totalUpdatedCount"></span>) </span><span class="ng-show" ng-show="view.showingCategoryHidden"> Hidden (<span ng-bind="view.totalHiddenProducts"></span>) </span><span class="_dropdown__pointer-wrapper"><i class="ic icon-dropdown-down header__switch-icon"></i><i class="_dropdown__pointer-up"></i></span><div class="header-dropdown__items _dropdown__items"><div class="_dropdown__item" ng-class="{ \'is-selected\' : view.showingCategoryCollection }" ng-click="view.setShowVisible()" ><i class="radio"></i> My Collection <span class="header-view__count" ng-bind="view.totalProductsCount"></span></div><div class="_dropdown__item" ng-class="{ \'is-selected\' : view.showingCategoryUpdated, \'is-disabled js-not-toggle\' : view.disabledCategoryUpdated }" ng-click="view.setShowUpdated($event)" ><i class="radio"></i> Updated <span class="header-view__count" ng-bind="view.totalUpdatedCount"></span></div><div class="_dropdown__item" ng-class="{ \'is-selected\' : view.showingCategoryHidden, \'is-disabled js-not-toggle\' : view.disabledCategoryHidden }" ng-click="view.setShowHidden($event)" ><i class="radio"></i> Hidden <span class="header-view__count" ng-bind="view.totalHiddenProducts"></span></div></div></div><strong class="account__filters-option collection-header__clear" ng-show="view.areProductsFiltered" ng-controller="accountAllFiltersCtrl as allFilters" ng-click="allFilters.clearAll()" > Clear filters <i class="ic icon-close2"></i></strong></div><div class="list cf account__products account__products--games" ng-cloakng-class="{ \'list--rows list--rows--no-border\' : view.isInListMode, \'list--grid\' : view.isInGridMode }" ng-show="!view.userHasNoProducts" >'
                var debugEvent = new CustomEvent("debugLog",{ detail: "fixLibraryProductTotals called"});
                document.dispatchEvent(debugEvent);
                var scope = angular.element(document.querySelectorAll('.collection-header')).scope();
                scope.afProductCount = window.afProductCountBool;
                window.productCount = $compile(html)(scope);
            });
        });

        $('.collection-header').replaceWith(unsafeWindow.productCount);
        changeLibraryStyle();
        styleTopPagination();
    }
}

function setWishlistProductTotals()
{
    function on_update(value)
    {
        unsafeWindow.afProductCountBool = value;
        contentEval(function() {
            var scope = angular.element(document.querySelectorAll('.list')).scope();
            scope.afProductCount = window.afProductCountBool;
            scope.$apply();
        });
    }

    settings.onchange('wishlist-product-count', on_update);
}

function fixWishlistProductTotals()
{
    contentEval(function() {
        angular.element(document).injector().invoke(function($compile) {
            var html = '<div class="header__main"> Wishlisted titles <span ng-show="products.wishlistedProductsCount"> (<span ng-show="afProductCount"><span ng-bind="products._accountProducts._totalProducts"></span> / </span><span ng-bind="products.wishlistedProductsCount"></span>) </span><strong class="account__filters-option collection-header__clear" ng-show="view.areProductsFiltered" ng-controller="accountAllFiltersCtrl as allFilters" ng-click="allFilters.clearAll()" > Clear filters <i class="ic icon-close2"></i></strong></div>'
            var debugEvent = new CustomEvent("debugLog",{ detail: "compileWishlist called"});
            document.dispatchEvent(debugEvent);
            var scope = angular.element(document.querySelectorAll('.list')).scope();
            scope.afProductCount = window.afProductCountBool;
            window.productCount = $compile(html)(scope);
        });
    });

    $('.collection-header .header__main').replaceWith(unsafeWindow.productCount);
}

function setPrivateWishlistTags()
{
    function on_update(value)
    {
        if (value)
        {
            var compileEvent = new CustomEvent("changePrivateWishlistTemplate",{ detail: "AF"});
            document.dispatchEvent(compileEvent);
        }
        else
        {
            var compileEvent = new CustomEvent("changePrivateWishlistTemplate",{ detail: "Default"});
            document.dispatchEvent(compileEvent);
        }
    }

    settings.onchange('wishlist-private-tags', on_update);
}

function setPublicWishlistTags()
{
    function on_update(value)
    {
        if (value)
        {
            var compileEvent = new CustomEvent("changePublicWishlistTemplate",{ detail: "AF"});
            document.dispatchEvent(compileEvent);
        }
        else
        {
            var compileEvent = new CustomEvent("changePublicWishlistTemplate",{ detail: "Default"});
            document.dispatchEvent(compileEvent);
        }
    }

    settings.onchange('wishlist-public-tags', on_update);
}

function setPrivateWishlistSort()
{
    function on_update(value)
    {
        var changeSortEvent = new CustomEvent("changePrivateWishlistSort",{ detail: value});
        document.dispatchEvent(changeSortEvent);
    }

    settings.onchange('wishlist-private-sort', on_update);
}

function setPublicWishlistSort()
{
    function on_update(value)
    {
        var changeSortEvent = new CustomEvent("changePublicWishlistSort",{ detail: value});
        document.dispatchEvent(changeSortEvent);
    }

    settings.onchange('wishlist-public-sort', on_update);
}

function setWishlistSync()
{
    var firstCall = true;

    function on_update(value)
    {
        if (value)
        {
            syncWishlistPriorityData();
        }
        else
        {
            if (!firstCall)
            {
                $.ajax({
                    url: 'https://www.gog.com/userData.json',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        debugLogger.debugLog("Userdata Retrieved");
                        var id = data.userId;
                        var username = data.username;
                        $.ajax({
                            url: 'https://gog.bigpizzapies.com/wishlistPriorityTags.php?clear&username=' + username,
                            type: 'post',
                            dataType: 'json',
                            success: function (data) {
                                var wishlistPriorityJSON = GM_getValue('wishlist_priority');
                                var wishlistPriority;
                                if (wishlistPriorityJSON === undefined)
                                {
                                    return;
                                }
                                else
                                {
                                    wishlistPriority= JSON.parse(wishlistPriorityJSON);
                                    wishlistPriority.index.lastUpdated = new Date(0);
                                    GM_setValue('wishlist_priority',JSON.stringify(wishlistPriority));
                                }
                            }
                        });
                    }
                });
            }
            firstCall = false;
        }
    }

    settings.onchange('wishlist-sync', on_update);
}

function addWishlistTags()
{
    //addGlobalStyle('.af-wishlist-tag { font-size: 0.9em; float: right;}');
    addGlobalStyle('.af-wishlist-tag { font-size: 0.9em; float: right; left: 495px; position: absolute; top: 20px; color: rgb(38, 38, 38); font-weight: 600;}');
    addGlobalStyle('.af-wishlist-tag label {cursor: default;}');
    addGlobalStyle('.af-wishlist-tag select { margin-left: 3px; margin-right: 3px;}');
    addGlobalStyle('.product-title { max-width: 370px;}');

    debugLogger.debugLog("Retrieve Wishlist Priority");

    $.ajax({
        url: 'https://www.gog.com/userData.json',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            debugLogger.debugLog("Userdata Retrieved");
            var id = data.userId;
            var username = data.username;
            $.ajax({
                url: 'https://gog.bigpizzapies.com/wishlistPriorityTags.php?request&username=' + username,
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    debugLogger.debugLog("Wishlist Priority Loaded");
                    if (data.hasOwnProperty('empty') || !settings.get('wishlist-sync'))
                    {
                        var wishlistPriorityJSON = GM_getValue('wishlist_priority');
                        var wishlistPriority;
                        if (wishlistPriorityJSON === undefined)
                        {
                            debugLogger.debugLog("Wishlist Priority Not Defined");

                            wishlistPriority = {};
                            wishlistPriority.index = {};
                            wishlistPriority.index.lastModified = new Date();
                            wishlistPriority.index.lastUpdated = new Date(0);
                            GM_setValue('wishlist_priority',JSON.stringify(wishlistPriority));
                        }
                        else
                        {
                            debugLogger.debugLog("Wishlist Priority Set");
                            wishlistPriority= JSON.parse(wishlistPriorityJSON);
                        }
                    }
                    else
                    {
                        wishlistPriority = data;
                    }
                    removeOldWishlistItems(wishlistPriority);
                    unsafeWindow.wishlistPriority    = cloneInto (wishlistPriority, unsafeWindow);
                    document.dispatchEvent(new Event("wishlistLoadFinishedPrivate"));
                }
            });
        }
    });

    function removeOldWishlistItems(wishlistPriorities)
    {
        $.ajax({
            url: 'https://www.gog.com/user/wishlist.json',
            type: 'post',
            dataType: 'json',
            success: function (data) {
                var modified = false;
                var newWishlistPriorities = {};
                $.each(wishlistPriorities, function (index, value) {
                    if (index !== "index")
                    {
                        if (!data.wishlist.hasOwnProperty(index))
                        {
                            debugLogger.debugLog(index + " Item removed!");
                            modified = true;
                        }
                        else
                        {
                            newWishlistPriorities[index] = value;
                        }
                    }
                    else
                    {
                        newWishlistPriorities[index] = value;
                    }
                });
                if (modified)
                {
                    wishlistPriority = newWishlistPriorities;
                    unsafeWindow.wishlistPriority    = cloneInto (wishlistPriority, unsafeWindow);
                    saveWishlistPriority()
                }
            }
        });
    }

    function saveWishlistPriority()
    {
        unsafeWindow.wishlistPriority.index.lastModified = new Date();
        debugLogger.debugLog(unsafeWindow.wishlistPriority)
        GM_setValue('wishlist_priority',JSON.stringify(unsafeWindow.wishlistPriority));
    }

    $(document).on('saveWishlistPriority', function (e) {
        debugLogger.debugLog("saveWishlistPriority event fired");
        saveWishlistPriority();
    });

    $(document).on('wishlistLoadFinishedPrivate', function (e) {
        contentEval(function() {
            angular.element(document).injector().invoke(function($compile, $templateCache) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "compileWishlist called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.getWishlistPriority = function (id, priority) {
                    var setPriority;
                    if (window.wishlistPriority.hasOwnProperty(id))
                    {
                        setPriority = window.wishlistPriority[id].priority;
                    }
                    else
                    {
                        setPriority = "Not Set";
                    }
                    if (setPriority === priority)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                wishlistScope.wishlistTagSort = function(product)
                {
                    var id = product.id;
                    if (window.wishlistPriority.hasOwnProperty('empty') || wishlistScope.afWishlistSort == 'Default')
                    {
                        return wishlistScope.products.products.indexOf(product);
                    }
                    else if (wishlistScope.afWishlistSort == 'Price')
                    {
                        return parseFloat(product.price.finalAmount);
                    }
                    else if (wishlistScope.afWishlistSort == 'Tags')
                    {
                        if (window.wishlistPriority.hasOwnProperty(id))
                        {
                            switch (window.wishlistPriority[id].priority)
                            {
                                case "Low":
                                    return 3;
                                case "Medium":
                                    return 2;
                                case "High":
                                    return 1;
                                case "Watching":
                                    return 4;
                                case "Backup":
                                    return 5;
                                default:
                                    return 6;
                            }
                        }
                        else
                        {
                            return 6;
                        }
                    }
                }
                window.changeWishlistPriority = function (select) {
                    var value = select.value;
                    var scope = angular.element(select).scope();
                    var id = scope.product.id;
                    var wp = window.wishlistPriority;
                    if (wp.hasOwnProperty(id))
                    {
                        if (value === "Not Set")
                        {
                            delete wp[id];
                            document.dispatchEvent(new Event("saveWishlistPriority"));
                        }
                        else
                        {
                            wp[id].priority = value;
                            document.dispatchEvent(new Event("saveWishlistPriority"));
                        }
                    }
                    else
                    {
                        wp[id] = {};
                        wp[id].priority = value;
                        document.dispatchEvent(new Event("saveWishlistPriority"));
                    }
                }
                $templateCache.put('afWishlistDefault.html', '<div class="list-inner" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in products.products track by product.id"><div class="product-state-holder product-row product-row--wishlist" gog-product="{{:: product.id }}" ng-class="{ \'is-hidden\': !product.isWishlisted, \'is-buyable\': product.isPriceVisible, \'product-row--has-action\': product.url, \'is-owned\' : product.isOwned, \'is-free\': product.price.isFree && product.isPriceVisible, \'is-discounted\' : product.price.isDiscounted, \'is-tba\' : !product.isPriceVisible, \'is-in-cart\' : product.inCart }" gog-star-rating="{{ product.id }}"><div class="product-row__price product-row__alignment"><a class="product-state__price-btn price-btn price-btn--active ng-cloak " href="" ng-if="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;" ng-href="{{ ::product.url }}"><span class="price-btn__text"><span class="price-btn__text--owned product-state__is-owned"> owned </span><span class="product-state__is-free"> Free </span><span class="product-state__price"><span class="hide-on-not-owned"> owned </span><span class="product-state__price hide-on-owned"> Free </span></span></span></a><div class="product-state__price-btn price-btn price-btn--active" ng-click="productCtrl.addToCart()" gog-track-event="{event:\'addToCart\',wayAddToCart:\'Price\'}" ng-class="{ \'price-btn--in-cart\' : product.inCart, \'price-btn--free\': product.price.isFree }" ng-hide="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;"><span class="price-btn__text "><span class="product-status__in-cart"><i class="ic icon-cart"></i></span><span class="product-state__is-tba"> TBA </span><span class="price-btn__text--owned product-state__is-owned"> owned					</span><span class="product-state__is-free"> Free					</span><span class="_price product-state__price" ng-bind="product.price.amount"></span></span></div></div> <a ng-href="{{ ::product.url }}" class="product-row__link"><div class="product-row__picture"> <img class="product-row__img" ng-srcset="{{ :: product.image | image:100:&#039;jpg&#039; }} , {{ :: product.image | image:200:&#039;jpg&#039; }} 2x" alt="{{product.title}}" /></div><div class="product-row__action product-row__alignment"><span class="btn product-btn" ng-show="product.isWishlisted" ng-click="productCtrl.removeFromWishlist(); $event.preventDefault()" hook-test="wishlistRemove"><i class="ic icon-close2 product-btn__icon--remove"></i></span><span class="btn product-btn" ng-show="!product.isWishlisted" ng-click="productCtrl.addToWishlist(); $event.preventDefault()" hook-test="wishlistAdd"><i class="ic icon-heart product-btn__icon--wishlist"></i></span></div><div class="product-row__discount product-row__alignment product-state__discount"><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>%</span></div><div class="product-row__discount" ng-if="!product.price.isDiscounted"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="::product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isInDevelopment" ng-cloak gog-labeled-title=\'{ "maxLineNumber": 2, "title": "{{ ::product.title }}" }\'><span class="product-title__text" ng-bind="::product.title"></span><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating js-star-rating star-rating"></span><span class="product-row__os" ng-if="::product.isGame"><i class="ic icon-win" ng-if="::product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="::product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="::product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="::product.isMovie">MOVIE</span><span ng-if="product.releaseDate" class="product-row__date" gog-release-date=\'{ "date": {{ ::product.releaseDate }}, "visibilityDate": {{ ::product.salesVisibility.from }} }\'>2017</span><span ng-if="::product.category" class="product-row__genre" ng-bind="::product.category"></span></div></div></div></div></a></div></div></div>');
                //$templateCache.put('afPrivateWishlist.html', '<div class="list-inner"ng-show="!view.isDataProcessing"><div class="product-row-wrapper"ng-repeat="product in products.products track by product.id"><div class="product-row product-row--wishlist"gog-product="{{:: product.id }}"ng-class="{\'is-hidden\': !product.isWishlisted,\'is-buyable\': product.isPriceVisible,\'product-row--has-action\': product.url}" ng-class="{\'is-owned\' : product.isOwned,\'product-row--has-card\': product.url,\'is-free\': product.price.isFree && product.isPriceVisible, \'is-buyable\' : product.isPriceVisible, }"><div class="product-row__price product-row__alignment"><div class="price-btn ng-cloak"ng-if="!product.isPriceVisible"><span class="price-btn__text">TBA</span></div><div ng-if="::product.isPriceVisible"class="price-btn price-btn--active"ng-click="productCtrl.addToCart()"ng-class="{\'price-btn--in-cart\' : product.inCart,\'price-btn--free\': product.price.isFree}"><span ng-show="product.inCart"class="price-btn__text ng-cloak"><i class="ic icon-cart"></i></span><span ng-if="!product.inCart"class="price-btn__text"><span class="price-btn__text--owned"ng-cloak ng-show="product.isOwned">owned</span><span ng-show="product.price.isFree"ng-cloak> Free </span><span ng-show="!product.price.isFree"><span class="curr-symbol"ng-bind="::product.price.symbol"></span><span ng-bind="product.price.amount"></span></span></span></div></div><a ng-href="{{ ::product.url }}"class="product-row__link"><div class="product-row__picture"><img class="product-row__img"ng-srcset="{{ :: product.image | image:100:&#039;jpg&#039; }} , {{ :: product.image | image:200:&#039;jpg&#039; }} 2x"alt="{{product.title}}"></div><div class="product-row__action product-row__alignment"><span class="btn product-btn"ng-show="product.isWishlisted"ng-click="productCtrl.removeFromWishlist(); $event.preventDefault()"><i class="ic icon-close2 product-btn__icon--remove"></i></span><span class="btn product-btn"ng-show="!product.isWishlisted"ng-click="productCtrl.addToWishlist(); $event.preventDefault()"><i class="ic icon-heart product-btn__icon--wishlist"></i></span></div><div class="product-row__discount product-row__alignment"ng-if="product.price.isDiscounted && product.price.discount != 100"ng-cloak><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>% </span></div><div class="product-row__discount"ng-if="!product.price.isDiscounted"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title"ng-if="!product.isComingSoon &amp;&amp; !product.isInDevelopment"><span class="product-title__text"ng-bind="::product.title"></span></div><div class="product-title product-title--flagged"ng-if="product.isComingSoon || product.isInDevelopment"ng-cloak gog-labeled-title=\'{"maxLineNumber": 2,"title": "{{ ::product.title}}"}\'><span class="product-title__text"ng-bind="::product.title"></span><span class="product-title__flags"><span ng-if="product.isComingSoon"class="_product-flag product-title__flag product-title__flag--soon">Soon</span><span ng-if="product.isInDevelopment"class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div><div class="af-wishlist-tag" onclick="event.preventDefault();"><label>Priority<select id="af-wps-{{ product.id }}" class="af-wishlist-priority-select" onChange="changeWishlistPriority(this)"><option value="Not Set" ng-selected="{{ getWishlistPriority(product.id, \'Not Set\') }}">Not Set</option><option value="Low" ng-selected="{{ getWishlistPriority(product.id, \'Low\') }}">Low</option><option value="Medium" ng-selected="{{ getWishlistPriority(product.id, \'Medium\') }}">Medium</option><option value="High" ng-selected="{{ getWishlistPriority(product.id, \'High\') }}">High</option><option value="Backup" ng-selected="{{ getWishlistPriority(product.id, \'Backup\') }}">Backup</option><option value="Watching" ng-selected="{{ getWishlistPriority(product.id, \'Watching\') }}">Watching</option></select></label></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating rating"star-rating="{{::product.rating}}"></span><span class="product-row__os"ng-if="::product.isGame"><i class="ic icon-win"ng-if="::product.worksOn.Windows"></i><i class="product-row__plus ic icon-plus"ng-if-start="::product.worksOn.Mac"></i><i class="ic icon-mac"ng-if-end></i><i class="product-row__plus ic icon-plus"ng-if-start="::product.worksOn.Linux"></i><i class="ic icon-linux"ng-if-end></i></span><span class="product-row__os product-row__media"ng-if="::product.isMovie">MOVIE</span><span ng-if="product.releaseDate"class="product-row__date"gog-release-date=\'{"date": {{ ::product.releaseDate }},"visibilityDate": {{ ::product.salesVisibility.from }}}\'>2016</span><span ng-if="::product.category"class="product-row__genre"ng-bind="::product.category"></span></div></div></div></div></a></div></div><!-- wrapper --></div>');
                $templateCache.put('afPrivateWishlist.html', '<div class="list-inner" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in products.products | orderBy:wishlistTagSort track by product.id"><div class="product-state-holder product-row product-row--wishlist" gog-product="{{:: product.id }}" ng-class="{ \'is-hidden\': !product.isWishlisted, \'is-buyable\': product.isPriceVisible, \'product-row--has-action\': product.url, \'is-owned\' : product.isOwned, \'is-free\': product.price.isFree && product.isPriceVisible, \'is-discounted\' : product.price.isDiscounted, \'is-tba\' : !product.isPriceVisible, \'is-in-cart\' : product.inCart }" gog-star-rating="{{ product.id }}"><div class="product-row__price product-row__alignment"><a class="product-state__price-btn price-btn price-btn--active ng-cloak " href="" ng-if="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;" ng-href="{{ ::product.url }}"><span class="price-btn__text"><span class="price-btn__text--owned product-state__is-owned"> owned </span><span class="product-state__is-free"> Free </span><span class="product-state__price"><span class="hide-on-not-owned"> owned </span><span class="product-state__price hide-on-owned"> Free </span></span></span></a><div class="product-state__price-btn price-btn price-btn--active" ng-click="productCtrl.addToCart()" gog-track-event="{event:\'addToCart\',wayAddToCart:\'Price\'}" ng-class="{ \'price-btn--in-cart\' : product.inCart, \'price-btn--free\': product.price.isFree }" ng-hide="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;"><span class="price-btn__text "><span class="product-status__in-cart"><i class="ic icon-cart"></i></span><span class="product-state__is-tba"> TBA </span><span class="price-btn__text--owned product-state__is-owned"> owned					</span><span class="product-state__is-free"> Free					</span><span class="_price product-state__price" ng-bind="product.price.amount"></span></span></div></div> <a ng-href="{{ ::product.url }}" class="product-row__link"><div class="product-row__picture"> <img class="product-row__img" ng-srcset="{{ :: product.image | image:100:&#039;jpg&#039; }} , {{ :: product.image | image:200:&#039;jpg&#039; }} 2x" alt="{{product.title}}" /></div><div class="product-row__action product-row__alignment"><span class="btn product-btn" ng-show="product.isWishlisted" ng-click="productCtrl.removeFromWishlist(); $event.preventDefault()" hook-test="wishlistRemove"><i class="ic icon-close2 product-btn__icon--remove"></i></span><span class="btn product-btn" ng-show="!product.isWishlisted" ng-click="productCtrl.addToWishlist(); $event.preventDefault()" hook-test="wishlistAdd"><i class="ic icon-heart product-btn__icon--wishlist"></i></span></div><div class="product-row__discount product-row__alignment product-state__discount"><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>%</span></div><div class="product-row__discount" ng-if="!product.price.isDiscounted"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="::product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isInDevelopment" ng-cloak gog-labeled-title=\'{ "maxLineNumber": 2, "title": "{{ ::product.title }}" }\'><span class="product-title__text" ng-bind="::product.title"></span><span class="product-title__flags"><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating js-star-rating star-rating"></span><span class="product-row__os" ng-if="::product.isGame"><i class="ic icon-win" ng-if="::product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="::product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="::product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="::product.isMovie">MOVIE</span><span ng-if="product.releaseDate" class="product-row__date" gog-release-date=\'{ "date": {{ ::product.releaseDate }}, "visibilityDate": {{ ::product.salesVisibility.from }} }\'>2017</span><span ng-if="::product.category" class="product-row__genre" ng-bind="::product.category"></span></div></div></div></div> </a><div class="af-wishlist-tag" onclick="event.preventDefault();"> <label>Priority <select id="af-wps-{{ product.id }}" class="af-wishlist-priority-select" onChange="changeWishlistPriority(this)"><option value="Not Set" ng-selected="{{ getWishlistPriority(product.id, \'Not Set\') }}">Not Set</option><option value="Low" ng-selected="{{ getWishlistPriority(product.id, \'Low\') }}">Low</option><option value="Medium" ng-selected="{{ getWishlistPriority(product.id, \'Medium\') }}">Medium</option><option value="High" ng-selected="{{ getWishlistPriority(product.id, \'High\') }}">High</option><option value="Backup" ng-selected="{{ getWishlistPriority(product.id, \'Backup\') }}">Backup</option><option value="Watching" ng-selected="{{ getWishlistPriority(product.id, \'Watching\') }}">Watching</option> </select> </label></div></div></div></div>');
                window.privateWishlistTemplateCompiled = $compile('<ng:include src="wishlistTemplate"></ng:include>')(wishlistScope);
                wishlistScope.setTemplate = function (templateName) {
                    switch (templateName)
                    {
                        case 'Default':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "GoG Default Wishlist template set"});
                            document.dispatchEvent(debugEvent);
                            wishlistScope.wishlistTemplate = 'afWishlistDefault.html';
                            break;
                        case 'AF':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "AF Wishlist template set"});
                            document.dispatchEvent(debugEvent);
                            wishlistScope.wishlistTemplate = 'afPrivateWishlist.html';
                            break;
                    }
                }
                var debugEvent = new CustomEvent("debugLog",{ detail: "Templates Compiled"});
                document.dispatchEvent(debugEvent);
            });

            document.addEventListener('changePrivateWishlistTemplate', function (e)
                                      {
                var debugEvent = new CustomEvent("debugLog",{ detail: "Change wishlist template event called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.$evalAsync(function(wishlistScope)
                                         {
                    wishlistScope.setTemplate(e.detail);
                });
            }, false);

            document.addEventListener('changePrivateWishlistSort', function (e)
                                      {
                var debugEvent = new CustomEvent("debugLog",{ detail: "Change wishlist sort event called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.$evalAsync(function(wishlistScope)
                                         {
                    wishlistScope.afWishlistSort = e.detail;
                });
            }, false);

        });

        $('.list-inner').replaceWith(unsafeWindow.privateWishlistTemplateCompiled);
        setPrivateWishlistTags();
        setPrivateWishlistSort();
    });
}

function syncWishlistPriorityData()
{
    var wishlistPriorityJSON = GM_getValue('wishlist_priority');
    var wishlistPriority;
    if (wishlistPriorityJSON === undefined)
    {
        debugLogger.debugLog("No wishlist priority data found");
        return;
    }
    else
    {
        debugLogger.debugLog("Wishlist Priority Set");
        wishlistPriority = JSON.parse(wishlistPriorityJSON);
        if (wishlistPriority.index.lastModified > wishlistPriority.index.lastUpdated && settings.get('wishlist-sync'))
        {
            $.ajax({
                url: 'https://www.gog.com/userData.json',
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    debugLogger.debugLog("Sync Userdata Retrieved");
                    var id = data.userId;
                    var username = data.username;
                    $.ajax({
                        url: 'https://gog.bigpizzapies.com/wishlistPriorityTags.php?id=' + id + '&username=' + username,
                        type: 'post',
                        dataType: 'json',
                        success: function (data) {
                            debugLogger.debugLog("Wishlist Priority Synced");
                            wishlistPriority.index.lastUpdated = new Date();
                            GM_setValue('wishlist_priority',JSON.stringify(wishlistPriority));
                        },
                        data: {"JSON": wishlistPriorityJSON}
                    });
                }
            });
        }
    }
}

function addPublicWishlistTags()
{
    addGlobalStyle('.af-wishlist-tag { font-size: 0.9em; float: right;}');
    addGlobalStyle('.af-wishlist-tag p { margin-top: 0; margin-right: 15px;}');
    addGlobalStyle('.af-wishlist-tag label {cursor: default;}');
    addGlobalStyle('.af-wishlist-tag select { margin-left: 3px; margin-right: 3px;}');

    $(document).on('wishlistLoadFinishedPublic', function (e) {
        contentEval(function() {
            angular.element(document).injector().invoke(function($compile, $templateCache) {
                var debugEvent = new CustomEvent("debugLog",{ detail: "compileWishlist called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.getPublicWishlistTag = function(id)
                {
                    if (window.publicWishlistData.hasOwnProperty('empty'))
                    {
                        return "";
                    }
                    else
                    {
                        if (window.publicWishlistData.hasOwnProperty(id))
                        {
                            return window.publicWishlistData[id].priority;
                        }
                        else
                        {
                            return "";
                        }
                    }
                }
                wishlistScope.wishlistTagSort = function(product)
                {
                    //return wishlistScope.products.products.indexOf(product);
                    var id = product.id;
                    if (window.publicWishlistData.hasOwnProperty('empty') || wishlistScope.afWishlistSort == 'Default')
                    {
                        return wishlistScope.products.products.indexOf(product);
                    }
                    else if (wishlistScope.afWishlistSort == 'Price')
                    {
                        return parseFloat(product.price.finalAmount);
                    }
                    else if (wishlistScope.afWishlistSort == 'Tags')
                    {
                        if (window.publicWishlistData.hasOwnProperty(id))
                        {
                            switch (window.publicWishlistData[id].priority)
                            {
                                case "Low":
                                    return 3;
                                case "Medium":
                                    return 2;
                                case "High":
                                    return 1;
                                case "Watching":
                                    return 4;
                                case "Backup":
                                    return 5;
                                default:
                                    return 6;
                            }
                        }
                        else
                        {
                            return 6;
                        }
                    }
                }
                $templateCache.put('afPublicWishlistDefault.html', '<div class="list-inner" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in products.products track by product.id"><div class="product-state-holder product-row " gog-product="{{:: product.id }}"><div class="product-row__price product-row__alignment"><a class="product-state__price-btn price-btn price-btn--active ng-cloak " href="" ng-if="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;" ng-href="{{ ::product.url }}"><span class="price-btn__text"><span class="price-btn__text--owned product-state__is-owned"> owned </span><span class="product-state__is-free"> Free </span><span class="product-state__price"><span class="hide-on-not-owned"> owned </span><span class="product-state__price hide-on-owned"> Free </span></span></span></a><div class="product-state__price-btn price-btn price-btn--active" ng-click="productCtrl.addToCart()" gog-track-event="{event:\'addToCart\',wayAddToCart:\'Price\'}" ng-class="{ \'price-btn--in-cart\' : product.inCart, \'price-btn--free\': product.price.isFree }" ng-hide="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;"><span class="price-btn__text "><span class="product-status__in-cart"><i class="ic icon-cart"></i></span><span class="product-state__is-tba"> TBA </span><span class="price-btn__text--owned product-state__is-owned"> owned					</span><span class="product-state__is-free"> Free					</span><span class="_price product-state__price" ng-bind="product.price.amount"></span></span></div></div> <a ng-href="{{ ::product.url }}" class="product-row__link"><div class="product-row__picture"> <img class="product-row__img" ng-srcset="{{ :: product.image | image:100:&#039;jpg&#039; }} , {{ :: product.image | image:200:&#039;jpg&#039; }} 2x" alt="{{product.title}}" /></div><div class="product-row__discount product-row__alignment product-state__discount"><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>%</span></div><div class="product-row__discount" ng-if="!product.price.isDiscounted"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isWishlisted &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="::product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isWishlisted || product.isInDevelopment" ng-cloak gog-labeled-title=\'{ "maxLineNumber": 2, "title": "{{ ::product.title }}" }\'><span class="product-title__text" ng-bind="::product.title"></span><span class="product-title__flags"><i ng-if="product.isWishlisted" class="_product-flag product-title__icon ic icon-heart" ></i><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating js-star-rating star-rating"></span><span class="product-row__os" ng-if="::product.isGame"><i class="ic icon-win" ng-if="::product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="::product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="::product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="::product.isMovie">MOVIE</span><span ng-if="product.releaseDate" class="product-row__date" gog-release-date=\'{ "date": {{ ::product.releaseDate }}, "visibilityDate": {{ ::product.salesVisibility.from }} }\'>2017</span><span ng-if="::product.category" class="product-row__genre" ng-bind="::product.category"></span></div></div></div></div> </a></div></div></div>');
                $templateCache.put('afPublicWishlist.html', '<div class="list-inner" ng-show="!view.isDataProcessing"><div class="product-row-wrapper" ng-repeat="product in products.products | orderBy:wishlistTagSort track by product.id"><div class="product-state-holder product-row " gog-product="{{:: product.id }}"><div class="product-row__price product-row__alignment"><a class="product-state__price-btn price-btn price-btn--active ng-cloak " href="" ng-if="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;" ng-href="{{ ::product.url }}"><span class="price-btn__text"><span class="price-btn__text--owned product-state__is-owned"> owned </span><span class="product-state__is-free"> Free </span><span class="product-state__price"><span class="hide-on-not-owned"> owned </span><span class="product-state__price hide-on-owned"> Free </span></span></span></a><div class="product-state__price-btn price-btn price-btn--active" ng-click="productCtrl.addToCart()" gog-track-event="{event:\'addToCart\',wayAddToCart:\'Price\'}" ng-class="{ \'price-btn--in-cart\' : product.inCart, \'price-btn--free\': product.price.isFree }" ng-hide="::product.customAttributes.customPriceButtonVariant == &#039;join&#039;"><span class="price-btn__text "><span class="product-status__in-cart"><i class="ic icon-cart"></i></span><span class="product-state__is-tba"> TBA </span><span class="price-btn__text--owned product-state__is-owned"> owned					</span><span class="product-state__is-free"> Free					</span><span class="_price product-state__price" ng-bind="product.price.amount"></span></span></div></div> <a ng-href="{{ ::product.url }}" class="product-row__link"><div class="product-row__picture"> <img class="product-row__img" ng-srcset="{{ :: product.image | image:100:&#039;jpg&#039; }} , {{ :: product.image | image:200:&#039;jpg&#039; }} 2x" alt="{{product.title}}" /></div><div class="product-row__discount product-row__alignment product-state__discount"><span class="price-text--discount"><span ng-bind="product.price.discountPercentage">0</span>%</span></div><div class="product-row__discount" ng-if="!product.price.isDiscounted"></div><div class="product-row__text"><div class="product-row__content"><div class="product-row__content-in"><div class="product-row__title"><div class="product-title" ng-if="!product.isComingSoon &amp;&amp; !product.isWishlisted &amp;&amp; !product.isInDevelopment"><span class="product-title__text" ng-bind="::product.title"></span></div><div class="product-title product-title--flagged" ng-if="product.isComingSoon || product.isWishlisted || product.isInDevelopment" ng-cloak gog-labeled-title=\'{ "maxLineNumber": 2, "title": "{{ ::product.title }}" }\'><span class="product-title__text" ng-bind="::product.title"></span><span class="product-title__flags"><i ng-if="product.isWishlisted" class="_product-flag product-title__icon ic icon-heart" ></i><span ng-if="product.isComingSoon" class="_product-flag product-title__flag product-title__flag--soon" >Soon</span><span ng-if="product.isInDevelopment" class="_product-flag product-title__flag product-title__flag--in-dev">IN DEV</span></span></div><div class="af-wishlist-tag"><p>{{ getPublicWishlistTag(product.id) }}</p></div></div><div class="product-row__info product-row__alignment"><span class="product-row__rating js-star-rating star-rating"></span><span class="product-row__os" ng-if="::product.isGame"><i class="ic icon-win" ng-if="::product.worksOn.Windows" ></i><i class="ic icon-mac" ng-if="::product.worksOn.Mac" ></i><i class="ic icon-linux" ng-if="::product.worksOn.Linux" ></i></span><span class="product-row__os product-row__media" ng-if="::product.isMovie">MOVIE</span><span ng-if="product.releaseDate" class="product-row__date" gog-release-date=\'{ "date": {{ ::product.releaseDate }}, "visibilityDate": {{ ::product.salesVisibility.from }} }\'>2017</span><span ng-if="::product.category" class="product-row__genre" ng-bind="::product.category"></span></div></div></div></div> </a></div></div></div>');
                window.publicWishlistTemplateCompiled = $compile('<ng:include src="wishlistTemplate"></ng:include>')(wishlistScope);
                wishlistScope.setTemplate = function (templateName) {
                    switch (templateName)
                    {
                        case 'Default':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "GoG Default Wishlist template set"});
                            document.dispatchEvent(debugEvent);
                            wishlistScope.wishlistTemplate = 'afPublicWishlistDefault.html';
                            break;
                        case 'AF':
                            var debugEvent = new CustomEvent("debugLog",{ detail: "AF Wishlist template set"});
                            document.dispatchEvent(debugEvent);
                            wishlistScope.wishlistTemplate = 'afPublicWishlist.html';
                            break;
                    }
                }
                var debugEvent = new CustomEvent("debugLog",{ detail: "Templates Compiled"});
                document.dispatchEvent(debugEvent);
            });

            document.addEventListener('changePublicWishlistTemplate', function (e)
                                      {
                var debugEvent = new CustomEvent("debugLog",{ detail: "Change wishlist template event called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.$evalAsync(function(wishlistScope)
                                         {
                    wishlistScope.setTemplate(e.detail);
                });
            }, false);

            document.addEventListener('changePublicWishlistSort', function (e)
                                      {
                var debugEvent = new CustomEvent("debugLog",{ detail: "Change wishlist sort event called"});
                document.dispatchEvent(debugEvent);
                var wishlistScope = angular.element(document.querySelectorAll('.list')).scope();
                wishlistScope.$evalAsync(function(wishlistScope)
                                         {
                    wishlistScope.afWishlistSort = e.detail;
                });
            }, false);

        });

        $('.list-inner').replaceWith(unsafeWindow.publicWishlistTemplateCompiled);
        setPublicWishlistTags();
        setPublicWishlistSort();
    });

    $.ajax({
        url: 'https://gog.bigpizzapies.com/wishlistPriorityTags.php?request&username=' + unsafeWindow.gogData.userInfo.username,
        type: 'post',
        dataType: 'json',
        success: function (data) {
            debugLogger.debugLog("Wishlist Priority Loaded");
            unsafeWindow.publicWishlistData    = cloneInto (data, unsafeWindow);
            document.dispatchEvent(new Event("wishlistLoadFinishedPublic"));
        }
    });
}

// End of Account Page Functions

// Game Page Functions

function sortByDateInner(a, b)
{
    return (a.added < b.added) ? 1 : (a.added > b.added) ? -1 : 0;
}

function sortByHelpfulnessInner(a, b)
{
    var aHelpfulness = 0;
    var bHelpfulness = 0;
    if (a.totalVotes != 0)
    {
        aHelpfulness = (a.helpfulVotes * a.helpfulVotes) / a.totalVotes;
    }
    if (b.totalVotes != 0)
    {
        bHelpfulness = (b.helpfulVotes * b.helpfulVotes) / b.totalVotes;
    }
    return (aHelpfulness < bHelpfulness) ? 1 : (aHelpfulness > bHelpfulness) ? -1 : 0;
}

function sortByStarsInner(a, b)
{
    return (a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : 0;
}

function sortByLengthInner(a, b)
{
    return (a.description.length < b.description.length) ? 1 : (a.description.length > b.description.length) ? -1 : 0;
}

function sortByDate(a, b)
{
    var result = sortByDateInner(a, b);
    if (result == 0)
    {
        result = sortByHelpfulnessInner(a, b);
        if (result == 0)
        {
            result = sortByStarsInner(a, b);
        }
    }
    return result;
}

function sortByHelpfulness(a, b)
{
    var result = sortByHelpfulnessInner(a, b);
    if (result == 0)
    {
        result = sortByDateInner(a, b);
        if (result == 0)
        {
            result = sortByStarsInner(a, b);
        }
    }
    return result;
}

function sortByStars(a, b)
{
    var result = sortByStarsInner(a, b);
    if (result == 0)
    {
        result = sortByHelpfulnessInner(a, b);
        if (result == 0)
        {
            result = sortByDateInner(a, b);
        }
    }
    return result;
}

function sortByLength(a, b)
{
    var result = sortByLengthInner(a, b);
    if (result == 0)
    {
        result = sortByHelpfulnessInner(a, b);
        if (result == 0)
        {
            result = sortByDateInner(a, b);
        }
    }
    return result;
}

function setReviewsPerPageDropdown()
{
    function on_update(value)
    {
        if (value == "All")
            $('#reviewsPerPage').val(0);
        else
            $('#reviewsPerPage').val(value);
    }

    settings.onchange('reviews-per-page', on_update);
}

function setSortOrderDropdown()
{
    function on_update(value)
    {
        $('#sortOrder').val(value);
    }

    settings.onchange('reviews-sort-order', on_update);
}

function setSortOrder2Dropdown()
{
    function on_update(value)
    {
        $('#sortOrder2').val(value);
    }

    settings.onchange('reviews-sort-order-2', on_update);
}

function loadReviewFilter()
{
    debugLogger.debugLog('Loading Reviews Filter');
    var reviewsAngularScope = unsafeWindow.angular.element(document.getElementById('reviews')).scope();
    var reviewFactory = unsafeWindow.angular.element(document.getElementById('reviews')).injector().get('reviewFactory');
    var reviewsURL = window.location.protocol + '//www.gog.com/reviews/product/' + unsafeWindow.gogData.gameProductData.id + '.json';
    var reviewsTotalPages = unsafeWindow.gogData.gameProductData.reviews.totalPages;
    //unsafeWindow.gogData.reviews.pages = [];
    addGlobalStyle('#review_go { margin-left: 5px; font-size: 12px; background: #262626; color: #ececec; padding: 3px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -khtml-border-radius: 5px; cursor: pointer; }');
    $(".reviews__subheader").append('<div class="af-review-header" style="float: right">Reviews Per Page <select id="reviewsPerPage" style="margin-right: 10px"><option value="5" selected="">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="50">50</option><option value="0">All</option></select>Sort Order <select id="sortOrder" style=""><option value="Date" selected="">Date</option><option value="Helpfulness">Helpfulness</option><option value="Stars">Stars</option><option value="Length">Length</option></select><a title="Search" onmouseover="" id="review_go">Go</a><div><select id="sortOrder2" style="float: right; margin-top: 5px; margin-right: 28px;"><option value="Ascending" selected="">Ascending</option><option value="Descending">Descending</option></select><!--<span style="float: right">Version: ' + version + '</span>--></div></div><br>Total Reviews: ' + reviewsAngularScope.totalResults);
    var allReviewsArray = [];
    $("#review_go").on("click", gatherReviews);
    $('#reviewsPerPage').change(function()
                                {
        if ($(this).find('option:selected').val() == 0)
            settings.set('reviews-per-page', 'All');
        else
            settings.set('reviews-per-page', $(this).find('option:selected').val());
    });
    $('#sortOrder').change(function()
                           {
        settings.set('reviews-sort-order', $(this).find('option:selected').val());
    });
    $('#sortOrder2').change(function()
                            {
        settings.set('reviews-sort-order-2', $(this).find('option:selected').val());
    });

    function sortReviewsArray()
    {
        var sortOrder = $("select#sortOrder option:selected").val();
        switch (sortOrder)
        {
            case "Date":
                debugLogger.debugLog('Sort By Date');
                allReviewsArray.sort(sortByDate);
                break;
            case "Helpfulness":
                debugLogger.debugLog('Sort By Helpfulness');
                allReviewsArray.sort(sortByHelpfulness);
                break;
            case "Stars":
                debugLogger.debugLog('Sort By Stars');
                allReviewsArray.sort(sortByStars);
                break;
            case "Length":
                debugLogger.debugLog('Sort By Length');
                allReviewsArray.sort(sortByLength);
                break;
            default:
                debugLogger.debugLog('Default: Sort By Date');
                allReviewsArray.sort(sortByDate);
                break;
        }
        if ($("select#sortOrder2 option:selected").val() == "Ascending")
        {
            allReviewsArray.reverse();
        }
    }

    function updatePage()
    {
        debugLogger.debugLog('Start Page Update');
        var reviewsPerPage = $("select#reviewsPerPage option:selected").val();
        if (reviewsPerPage != 0)
        {
            reviewsAngularScope.reviews.length = 0;
            Array.prototype.push.apply(reviewsAngularScope.reviews, allReviewsArray.slice((reviewsAngularScope.currentPage - 1) * reviewsPerPage, (reviewsAngularScope.currentPage * reviewsPerPage)));
            reviewsAngularScope.totalPages = Math.ceil(parseInt(reviewsAngularScope.totalResults) / reviewsPerPage);
            unsafeWindow.gogData.reviews.totalPages = reviewsAngularScope.totalPages;
            unsafeWindow.gogData.gameProductData.reviews = reviewsAngularScope.totalPages;
        }
        else
        {
            reviewsAngularScope.reviews.length = 0;
            Array.prototype.push.apply(reviewsAngularScope.reviews, allReviewsArray);
            reviewsAngularScope.totalPages = 1;
            unsafeWindow.gogData.reviews.totalPages = reviewsAngularScope.totalPages;
            unsafeWindow.gogData.gameProductData.reviews = reviewsAngularScope.totalPages;
        }
        contentEval( function() {
            var reviewsAngularScope = angular.element(document.getElementById('reviews')).scope();
            reviewsAngularScope.$evalAsync(function(reviewsAngularScope)
                                           {
                var debugEvent = new CustomEvent("debugLog",{ detail: "$evalAsync Called"});
                document.dispatchEvent(debugEvent);
            });
        });
    }

    function changeReviewsPerPage()
    {
        debugLogger.debugLog('Change Number of Reviews Per Page');
        reviewsAngularScope.currentPage = 1;
        updatePage();
    }

    function updateReviews()
    {
        debugLogger.debugLog('Update Reviews & Sort Order');
        sortReviewsArray();
        reviewsAngularScope.currentPage = 1;
        updatePage();
    }

    $(document).on('updatePageEvent', function (e) {
        updatePage();
    });

    function gatherReviews()
    {
        contentEval( function() {
            var reviewsAngularScope = angular.element(document.getElementById('reviews')).scope();

            reviewsAngularScope.$watch(
                "currentPage",
                function(newValue, oldValue)
                {
                    var debugEvent = new CustomEvent("debugLog",{ detail: "Current Page Changed"});
                    document.dispatchEvent(debugEvent);
                    document.dispatchEvent(new Event("updatePageEvent"));
                }
            );

            reviewsAngularScope.$watch(
                "reviews[0]",
                function(newValue, oldValue)
                {
                    if (newValue != oldValue)
                    {
                        var debugEvent = new CustomEvent("debugLog",{ detail: "Reviews Changed"});
                        document.dispatchEvent(debugEvent);
                        document.dispatchEvent(new Event("updatePageEvent"));
                    }
                }
            );
            reviewsAngularScope.$watch(
                "totalPages",
                function(newValue, oldValue)
                {
                    var e = document.getElementById("reviewsPerPage");
                    var reviewsPerPage = e.options[e.selectedIndex].value;
                    if (reviewsAngularScope.reviews.length != reviewsPerPage)
                    {
                        var debugEvent = new CustomEvent("debugLog",{ detail: "Total Pages updated"});
                        document.dispatchEvent(debugEvent);
                        document.dispatchEvent(new Event("updatePageEvent"));
                    }
                }
            );
        });
        debugLogger.debugLog("Gather reviews called");
        $(document).off('ajaxStop');
        $(document).ajaxStop(function()
                             {
            updateReviews();
            debugLogger.debugLog("Reviews gathered");
        });
        for (var i = 1; i <= reviewsTotalPages; i++)
        {
            var reviewPageURL = reviewsURL + '?page=' + i;
            $.getJSON(reviewPageURL, function(data)
                      {
                for (var i = 0; i < data.reviews.length; i++)
                {
                    unsafeWindow.rawReview = cloneInto(data.reviews[i], unsafeWindow);
                    //var review = reviewFactory.create(data.reviews[i]);
                    contentEval( function() {
                        var reviewFactory = angular.element(document.getElementById('reviews')).injector().get('reviewFactory');
                        window.processedReview = reviewFactory.create(window.rawReview);
                    });
                    var review = unsafeWindow.processedReview;
                    review.show_teaser = (!settings.get('reviews-remove-teaser'));
                    allReviewsArray.push(review);
                }
            });
        }
        $("#review_go").unbind("click");
        $("#review_go").on("click", updateReviews);
        $('select#reviewsPerPage').on('change', changeReviewsPerPage);
        $('select#sortOrder').on('change', updateReviews);
        $('select#sortOrder2').on('change', updateReviews);
    }

    if (settings.get('reviews-auto-filter'))
    {
        gatherReviews();
    }
}

function gamePageMaGoGLink()
{
	function on_update(value)
    {
		if (value)
        {
			$('div.product-details').append(row);
		}
        else
        {
			row.remove();
		}
	}

    var row = $('<div class="product-details-row">');

    $('<div class="product-details__category">').text("MaGog:").appendTo(row);

    var id = unsafeWindow.gogData.gameProductData.id;

    $('<div class="product-details__data">')
        .appendTo(row)
        .append(
        $('<a target="_blank" class="un">')
        .attr('href', "http://www.an-ovel.com/cgi-bin/magog.cgi?ver=729&scp=gdspurio&dsp=ipgfsorlcmbaxyzXhDFGHTP&ord=&flt=iis~"+id+"~&opt=")
        .text(unsafeWindow.gogData.gameProductData.title)
    );

    var style = $('<style>').appendTo(document.head);
    settings.onchange('gamepage-magog-link', on_update);
}

function gamePageChangelogLinks()
{
    function on_update(value)
    {
		if (value)
        {
			$('div.product-details').append(row);
		}
        else
        {
			row.remove();
		}
	}

    function openWindow() {
        contentEval(function () {
            var newWindow = window.open("", null, "height=600,width=600,status=yes,toolbar=no,menubar=no,location=no,centerscreen=yes,scrollbars=yes");
            newWindow.document.write(window.gameChangelog);
        })
    }

    exportFunction(openWindow, unsafeWindow, {defineAs: "openWindow"});

    var id = unsafeWindow.gogData.gameProductData.id;

    var row = $('<div class="product-details-row">');

    $.ajax({
        url: 'https://gog.bigpizzapies.com/gog_changelog.php?url=https://api.gog.com/products/' + id + '?expand=changelog,downloads',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            gameChangelog = data.changelog;
            unsafeWindow.gameChangelog    = cloneInto (gameChangelog, unsafeWindow);

            var version = $(gameChangelog).first().text();

            $('<div class="product-details__category">').text("Changelog:").appendTo(row);

            $('<div class="product-details__data">')
                .appendTo(row)
                .append(
                $('<a class="un">')
                .attr('onclick', "openWindow();")
                .text(version)
            );
        }
    });

    settings.onchange('gamepage-changelog-link', on_update);
}

function markOwnedGames(currentPage)
{
	function on_update(value)
    {
		if (value == "None")
        {
            $('#afMarkGamesStyle').remove();
		}
        else if (value == "Full")
        {
			$('#afMarkGamesStyle').remove();
            $('<style type="text/css" id="afMarkGamesStyle">' +
              '.is-owned.gogmix .product-row__link, .product-row.is-owned, .product-row.is-owned .product-row__link {  background-color: ' + settings.get('other-owned-color') + ';  }' +
              '.is-wishlisted.gogmix .product-row__link, .product-row.is-wishlisted, .product-row.is-wishlisted .product-row__link {  background-color: ' + settings.get('other-wishlist-color') + ';  }' +
              '</style>').appendTo('body');
		}
        else if (value == "Subtle")
        {
			$('#afMarkGamesStyle').remove();
            $('<style type="text/css" id="afMarkGamesStyle">' +
              '.is-owned.gogmix .price-btn, .product-row.is-owned .price-btn {    border-radius: 3px;    background: none repeat scroll 0% 0% ' + settings.get('other-owned-color') + ';  }' +
              '.is-wishlisted.gogmix .price-btn, .product-row.is-wishlisted .price-btn {    border-radius: 3px;    background: none repeat scroll 0% 0% ' + settings.get('other-wishlist-color') + ';  }' +
              '</style>').appendTo('body');
		}
	}

    $(document).on('catalogueChangedEvent', function (e) {
        var wishlist = unsafeWindow.angular.element(document.body).injector().get('wishlist').storage.user.wishlist.products;
        $('.product-row').each(function() {
            var gameScope = unsafeWindow.angular.element(this).scope();
            if (wishlist[gameScope.product.id])
            {
                $(this).addClass('is-wishlisted');
            }
        });
    });

    if (currentPage == "catalogue")
    {
        contentEval(function() {
            var catalogueScope = angular.element(document.querySelectorAll('.list.container')).scope();
            catalogueScope.$watch(
                "products",
                function(newValue, oldValue)
                {
                    document.dispatchEvent(new Event("catalogueChangedEvent"));
                }
            );
        });
    }

    settings.onchange('other-mark-games', on_update);
}

function setHideToolTip()
{
	function on_update(value)
    {
		if (value)
        {
			$('.filters__search-popover').hide();
		}
        else
        {
			$('.filters__search-popover').css('display', '');
		}
	}
    settings.onchange('other-hide-search-tooltip', on_update);
}

//End of Game Page Functions

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

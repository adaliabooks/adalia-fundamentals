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
        $('#forum_general_pl').toggle(value.Polish);
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

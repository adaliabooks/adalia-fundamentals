// ==UserScript==
// @name         Adalia Fundamentals
// @namespace    https://gist.github.com/adaliabooks/
// @version      2.0.0
// @description  A package of fixes, new features and changes to improve GoG.com. I fix GoG, so you don't have to!
// @author       adaliabooks
// @updateURL    https://github.com/adaliabooks/adalia-fundamentals/raw/development/adalia-fundamentals.meta.js
// @downloadURL  https://github.com/adaliabooks/adalia-fundamentals/raw/development/adalia-fundamentals.user.js
// @include      http://www.gog.com/*
// @include      https://www.gog.com/*
// @include      http://chat.gog.com/*
// @include      https://chat.gog.com/*
// @exclude      http://www.gog.com/upload/forum/*
// @exclude      https://www.gog.com/upload/forum/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require      https://raw.githubusercontent.com/bartaz/sandbox.js/master/jquery.highlight.js
// @require      https://meetselva.github.io/attrchange/javascripts/attrchange.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

// Utility Functions and Objects
unsafeWindow.name = 'NG_ENABLE_DEBUG_INFO!' + unsafeWindow.name;

document.addEventListener ("DOMContentLoaded", DOM_ContentReady);

function DOM_ContentReady () {
    contentEval(function() {
        if(window.gog)
        {
            gog.config( ['$compileProvider', function( $compileProvider ) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|gogdownloader):/);
                $compileProvider.debugInfoEnabled(true);
            }
                        ]);
        }
    });
}

var af-forumFunctions = true;
var af-accountFunctions = true;
var af-gamePageFunctions = true;
var af-chatFunctions = true;

var palemoon = false;

if ((typeof cloneInto != 'undefined') && (typeof cloneInto == 'function')){

} else {
    function cloneInto(obj){
        var oldState = history.state;
        history.replaceState(obj, null);
        var clonedObj = history.state;
        history.replaceState(oldState, null);
        return clonedObj;
    }
    palemoon = true;
}

if ((typeof exportFunction != 'undefined') && (typeof exportFunction == 'function')){

} else {
    function exportFunction (foo, scope, defAs)
    {
        scope[defAs.defineAs] = foo;
    }
    palemoon = true;
}

var version = "2.0.0";

var debugLogger = {
    log: "",
    debuggingActive: false,
    debugLog: function(message)
    {
        if (debugLogger.debuggingActive)
        {
            console.log(message);
        }
        debugLogger.log += ("\r\n" + message);
    },
    exportLog: function()
    {
        GM_setClipboard (debugLogger.log);
    }
};

exportFunction(debugLogger.exportLog, unsafeWindow, {defineAs: "afExportLog"});

function executeFunctionByName(functionName, context /*, args */) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
}

function contentEval(source) {
    // Check for function input.
    if ('function' == typeof source) {
        // Execute this function with no arguments, by adding parentheses.
        // One set around the function, required for valid syntax, and a
        // second empty set calls the surrounded function.
        source = '(' + source + ')();'
    }

    // Create a script node holding this  source code.
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = source;

    // Insert the script node into the page, so it will run, and immediately
    // remove it to clean up.
    document.body.appendChild(script);
    document.body.removeChild(script);
}

$(document).on('debugLog', function(e) {
    debugLogger.debugLog(e.originalEvent.detail);
});
$(document).on('runFunctionInScript', function (e) {
    executeFunctionByName(e.originalEvent.detail.functionName, e.originalEvent.detail.context, e.originalEvent.detail.args);
});

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var config = {
    'Changelog': [
    ],
    'Forum': [
        { type: 'bool', def: true, key: 'forum-favourites-toggle', label: 'Turn on or off the ability to toggle hiding your favourited threads by clicking on the "Favourite Topics" header' },
        { type: 'bool', def: false, key: 'forum-favourites-hide', label: 'Hide your favourited threads (only works if the toggle option is on as well)' },
        { type: 'bool', def: false, key: 'forum-game-forums-sort', label: 'Show the Game Specific Forum Sort button' },
		{ type: 'multibool', options: { 'English': true, 'Archives': true, 'Brazilian': true, 'German': true, 'French': true, 'Russian': true, 'Chinese': true}, key:'forum-language-forums', label:'Show or hide different language forums on the Community page'},
        { type: 'choice', options: ['show', 'collapse', 'remove'], def: 'show', key: 'forum-community-wishlist', label: 'Option to show, collapse or remove the Community Wishlist section from the Community page' },
        { type: 'choice', options: ['show', 'collapse', 'remove'], def: 'show', key: 'forum-favourite-topics', label: 'Option to show, collapse or remove the Favourite Topics section from the Community page' },
        { type: 'choice', options: ['show', 'collapse', 'remove'], def: 'show', key: 'forum-participated-topics', label: 'Option to show, collapse or remove the Topics I\'ve Participated In section from the Community page' },
        { type: 'choice', options: ['show', 'collapse', 'remove'], def: 'show', key: 'forum-hot-topics', label: 'Option to show, collapse or remove the Hot Topics section from the Community page' },
        { type: 'header', label: 'Forum Search'},
        { type: 'bool', def: true, key: 'search-enable-bar', label: 'Show the search bar, if set to false the bar or button to show it won\'t load' },
        { type: 'bool', def: true, key: 'search-show-bar', label: 'Show the search bar by default' },
        { type: 'bool', def: true, key: 'search-highlight-results', label: 'Highlight search terms in search results by default' },
        { type: 'bool', def: false, key: 'search-exact', label: 'Match only exact results' },
        { type: 'bool', def: true, key: 'search-posts', label: 'Enable search in posts \(or thread titles for forum search\) by default' },
        { type: 'bool', def: true, key: 'search-usernames', label: 'Enable search by username by default' },
        { type: 'bool', def: false, key: 'search-bold', label: 'Enable search within bold text \(threads only\) by default' },
        { type: 'bool', def: true, key: 'search-advanced-options', label: 'Show the advanced search options by default' },
        { type: 'number', min: 25, max: 500, step: 25, def: 50, key: 'search-warn-limit', label: 'Warn when searching more than x pages' },
    ],
    'Game Pages': [
        { type: 'bool', def: true, key: 'reviews-auto-filter', label: 'Automatically sort and display reviews on page load \(may cause slow down on game pages with a lot of reviews\)' },
        { type: 'bool', def: false, key: 'reviews-remove-teaser', label: 'Automatically shows the full review instead of "Show more" link' },
        { type: 'choice', options: ['5', '10', '15', '20', '50', 'All'], def: '5', key: 'reviews-per-page', label: 'Set default number of reviews to show per page' },
        { type: 'choice', options: ['Date', 'Helpfulness', 'Stars', 'Length'], def: 'Date', key: 'reviews-sort-order', label: 'Set default sort order for reviews' },
        { type: 'choice', options: ['Ascending', 'Descending'], def: 'Descending', key: 'reviews-sort-order-2', label: 'Set ascending / descending order for reviews' },
        { type: 'bool', def: true, key: 'gamepage-magog-link', label: 'Show a link to the MaGog page for a game on it\'s page' },
        { type: 'bool', def: true, key: 'gamepage-changelog-link', label: 'Show a link to the Changelog for a game on it\'s page (changelog opens as pop up and may need to set popup blockers to ignore)' },
    ],
    'Library': [
        { type: 'bool', def: true, key: 'library-downloader-links', label: 'Show downloader links instead of ordinary links on game cards' },
        { type: 'bool', def: true, key: 'library-classic-links', label: 'Default to classic download links without Galaxy included on game cards (superceded by the downloader links setting)' },
        { type: 'bool', def: true, key: 'library-show-update-info', label: 'Show details about when a game was last updated on game cards' },
        { type: 'choice', options: ['GoG Default', 'Legacy', 'Legacy Remix', 'Remix'], def: 'GoG Default', key: 'library-style', label: 'Change the style of the shelf and game boxes in your library' },
        { type: 'choice', options: ['Wood', 'Black'], def: 'Wood', key: 'library-shelf-colour', label: 'Change the colour of the shelf background in Legacy styles' },
        { type: 'bool', def: false, key: 'library-top-pagin', label: 'Adds a Pagination element to the top of your game shelf' },
        { type: 'choice', options: ['100', '200', '300', '400', '500', '1000', 'All'], def: '100', key: 'library-games-per-page', label: 'Set default number of games to show per page' },
        { type: 'choice', options: ['Gog', 'Manual', 'Last Updated'], def: 'Gog', key: 'library-sort', label: 'Sorts the games by a manually created order or by last updated' },
        { type: 'bool', def: true, key: 'library-manual-sort-new-game', label: 'Add new games to start of library when manual sorting' },
        { type: 'bool', def: true, key: 'library-product-count', label: 'Shows the total number of products and the total filtered count' },
    ],
    'Wishlist': [
        { type: 'bool', def: true, key: 'wishlist-private-tags', label: 'Show tags on your wishlist to categorize it' },
        { type: 'bool', def: true, key: 'wishlist-public-tags', label: 'Show tags on other people\'s wishlists (only other script users who have chosen to sync and share their wishlists)' },
        { type: 'bool', def: false, key: 'wishlist-sync', label: 'Sync your wishlist tags to my server to share with other users and with MaGog (also required for cross computer / cross browser syncing)' },
        { type: 'choice', options: ['Default', 'Tags', 'Price'], def: 'Default', key: 'wishlist-public-sort', label: 'Sort public wishlists by priority tags' },
        { type: 'choice', options: ['Default', 'Tags', 'Price'], def: 'Default', key: 'wishlist-private-sort', label: 'Sort private wishlists by priority tags or price (or GoG\'s Default)' },
        { type: 'bool', def: true, key: 'wishlist-product-count', label: 'Shows the total number of products and the total filtered count (Private Wishlist only)' },
    ],
    'Chat': [
        { type: 'bool', def: true, key: 'chat-options-bar', label: 'Show the chat options and info bar' },
        { type: 'choice', options: ['last-active', 'online-first'], def: 'last-active', key: 'chat-rooms-sort', label: 'Set the sorting order of the chat conversations/rooms' },
        { type: 'bool', def: false, key: 'chat-disable-enter-to-send', label: 'Disable sending messages on enter (pressing Ctrl + Enter will send instead)' },
        { type: 'bool', def: false, key: 'chat-join-date-friends', label: 'Show join date on friends search box' },
        { type: 'text', def: '[]', key: 'chat-filter-names', label: 'List of contacts to hide from your contact list (Names must be in quotation marks and comma seperated, with the whole list in square brackets or it will fail, eg. ["adaliabooks"])' },
    ],
    'Other': [
        { type: 'choice', options: ['light'], def: 'light', key: 'AF-style', label: 'Adalia Fundamentals style' },
        { type: 'choice', options: ['None', 'Full', 'Subtle'], def: 'None', key: 'other-mark-games', label: 'Highlight owned or wishlisted games in the catalogue and in other users public wishlists' },
        { type: 'bool', def: false, key: 'other-hide-search-tooltip', label: 'Hide the search tooltip on the games page' },
        { type: 'bool', def: false, key: 'other-debug', label: 'Show the debug info in the console' },
        { type: 'choice', options: ['Default', 'Left', 'Right'], def: 'Default', key: 'currency-symbol', label: 'Change the position of the currency symbol, default sets it based on language and currency settings' },
        { type: 'color', def: '#FFFFFF', key: 'other-owned-color', label: 'The color to highlight owned games in the catalogue' },
        { type: 'color', def: '#777777', key: 'other-wishlist-color', label: 'The color to highlight wishlisted games in the catalogue' },
    ],
    'Manual Sort': [
    ],
    'Donate': [
    ]
}

var changelog = [
    {
        version: '1.8.4',
        date: '01-09-2017',
        changes: [
            "Fixed bug that caused conflict with other add ons and prevented attachments from showing in the forums.",
        ]
    },
    {
        version: '1.8.3',
        date: '10-08-2017',
        changes: [
            "Fixed bug in library game cards.",
            "Added option to turn debugging info on and off from the options menu.",
        ]
    },
    {
        version: '1.8.2',
        date: '25-07-2017',
        changes: [
            "Added option to hide Chinese Language Forum.",
            "Added option to change format of currency symbols (in the other tab).",
        ]
    },
    {
        version: '1.8.1',
        date: '23-07-2017',
        changes: [
            "Fixed currency symbol bug on wishlists and updated wishlist code to match Gog's updated code.",
        ]
    },
    {
        version: '1.8.0',
        date: '14-07-2017',
        changes: [
            "Fixed bug where review sorting options no longer showed or worked.",
            "Fixed bug where AF changelog would not show on game pages.",
            "Fixed bug where hiding users in the chat would not work correctly on Firefox.",
            "Fixed bug where the styling of the top of the Legacy Library was not displaying correctly",
            "Made the script compatible with the new download options",
            "Added option to default to Classic (non Galaxy) installer downloads",
        ]
    },
    {
        version: '1.7.6',
        date: '06-05-2017',
        changes: [
            "Copied the Adalia Fundamentals menu item to the About menu. The Account menu will be depreciated in time in accordance with the Barefoot Essentials change.",
        ]
    },
    {
        version: '1.7.5',
        date: '28-04-2017',
        changes: [
            "Removed uppercase formatting from library and wishlist",
        ]
    },
    {
        version: '1.7.4',
        date: '27-04-2017',
        changes: [
            "Visual tweaks for menu bar link (thanks to Barefoot_Monkey)",
        ]
    },
    {
        version: '1.7.3',
        date: '26-04-2017',
        changes: [
            "Bug fixes for new Gog menu bar",
        ]
    },
    {
        version: '1.7.2',
        date: '03-01-2017',
        changes: [
            "Bug fixes for download all goodies link and last updated label",
        ]
    },
    {
        version: '1.7.1',
        date: '23-12-2016',
        changes: [
            "Added the option to show the date and version of last update to the game card",
            "Small change to sorting by Last Updated, to shorten delay before library loads",
        ]
    },
    {
        version: '1.7.0',
        date: '22-12-2016',
        changes: [
            "Hide the language forums in the subforum list",
            "Added the option to show the join date of users in the friends search",
            "Added the option to sort your library by Last Updated time",
        ]
    },
    {
        version: '1.6.5',
        date: '18-11-2016',
        changes: [
            "Added option to hide the search tooltip on the games page",
        ]
    },
    {
        version: '1.6.4',
        date: '04-11-2016',
        changes: [
            "Bug fixes to chat because of changes in Gog code",
        ]
    },
    {
        version: '1.6.3',
        date: '05-09-2016',
        changes: [
            "Added option to filter sort game specific forums by favourited forums",
            "Fixed Firefox specific bug for forum sorting",
        ]
    },
    {
        version: '1.6.2',
        date: '02-09-2016',
        changes: [
            "Added option to hide or auto collapse the Community Wishlist, Favourited Topics and Participated Topics on the Community Page",
            "Added option to hide the different language general discussion forums on the Community Page",
            "Added option to sort game specific forums by last updated time",
        ]
    },
    {
        version: '1.6.1',
        date: '28-08-2016',
        changes: [
            "Added option to hide or auto collapse the Hot Topics on the Community Page",
        ]
    },
    {
        version: '1.6.0',
        date: '20-07-2016',
        changes: [
            "Added option to highlight games in the catalogue and on other people's wishlists that you own or have wishlisted",
            "Added a Chat Transcript button to the chat bar which creates a pop up with your full chat history with the current contact in it for easier searching and copying",
            "Added the option to hide and filter your chat contacts (as well as auto removing blocked users from the list)",
            "Added the option to collapse your favourite topics in the forum"
        ]
    },
    {
        version: '1.5.9',
        date: '23-06-2016',
        changes: [
            "Changed labeling on Chat sort options due to Gog\'s new default sort order",
            "Added option to show a link to a game's changelog on the game pages (changelog opens as pop up and may need to set popup blockers to ignore)"
        ]
    },
    {
        version: '1.5.8',
        date: '19-06-2016',
        changes: [
            "Sorted manual sort export output by manual sort order rather than ID",
        ]
    },
    {
        version: '1.5.7',
        date: '18-05-2016',
        changes: [
            "Palemoon compatibility fixes",
        ]
    },
    {
        version: '1.5.6',
        date: '10-05-2016',
        changes: [
            "Added the option to show MaGog links on game pages",
            "Bug fixes for download links on games with multiple DLC",
        ]
    },
    {
        version: '1.5.4',
        date: '22-04-2016',
        changes: [
            "Added the option to show current total of games displayed in library and private wishlisted (after filtering etc.)",
        ]
    },
    {
        version: '1.5.3',
        date: '20-04-2016',
        changes: [
            "Added the option to sort private wishlists by their priority tags or price (only works on each individual page of the wishlist)",
            "Added the option to sort public wishlists by price (only works on each individual page of the wishlist)",
            "Bug fixes",
        ]
    },
    {
        version: '1.5.2',
        date: '31-03-2016',
        changes: [
            "Changed public wishlist tags to show a blank instead of Not Set for Not Set options",
            "Added the option to sort public wishlists by their priority tags (only works on each individual page of the wishlist)",
            "Fixed a bug with the downloader links",
        ]
    },
    {
        version: '1.5.1',
        date: '23-03-2016',
        changes: [
            "Bug fixes for wishlist tags",
        ]
    },
    {
        version: '1.5.0',
        date: '23-03-2016',
        changes: [
            "Added the ability to tag your wishlist with priorities which can be synced and shared with other script users",
            "PLEASE NOTE: Syncing is disabled by default so if you wish to share your tags you must enable it in the settings",
        ]
    },
    {
        version: '1.4.6',
        date: '08-03-2016',
        changes: [
            "Another bug fix for favourite topic page number bug fix",
        ]
    },
    {
        version: '1.4.5',
        date: '06-03-2016',
        changes: [
            "Added option to add new games to the start or end of the manual sort order",
        ]
    },
    {
        version: '1.4.4',
        date: '04-03-2016',
        changes: [
            "Bug fixes for favourite topic page number bug fix (hah!)",
        ]
    },
    {
        version: '1.4.3',
        date: '02-03-2016',
        changes: [
            "Fixes for previous additions",
            "Added fix for favourite topic page numbers",
        ]
    },
    {
        version: '1.4.2',
        date: '01-03-2016',
        changes: [
            "CSS style changes, all usernames now appear as they are rather than in uppercase",
            "Reviews can now be sorted by ascending or descending value, also some style changes",
            "Added Exact Match option to forum search",
        ]
    },
    {
        version: '1.4.1',
        date: '19-01-2016',
        changes: [
            "Bug fixes for chat",
        ]
    },
    {
        version: '1.4.0',
        date: '19-01-2016',
        changes: [
            "Added Chat options",
            "Added option to sort chat rooms differently and also filter the list of rooms",
            "Added info box above chat to see who current conversation is with, also name and date joined to help prevent scammers",
        ]
    },
    {
        version: '1.3.9',
        date: '14-01-2016',
        changes: [
            "Fixed various issues with manual sort",
        ]
    },
    {
        version: '1.3.8',
        date: '03-01-2016',
        changes: [
            "Tweaked manual sort pop up box",
        ]
    },
    {
        version: '1.3.7',
        date: '01-01-2016',
        changes: [
            "Added pop up move option for manual sorting",
        ]
    },
    {
        version: '1.3.6',
        date: '01-01-2016',
        changes: [
            "Added donate page to menu for people wishing to donate to support script development",
            "Added reset button to manual sort page to allow resetting of manual sort to currently selected GoG default sort",
            "Bug fix for initial sorting of manual sort order",
        ]
    },
    {
        version: '1.3.5',
        date: '29-12-2015',
        changes: [
            "Added title hover text for Legacy Shelf and text overlay on bundled games to distinguish versions with identical covers",
        ]
    },
    {
        version: '1.3.4',
        date: '26-12-2015',
        changes: [
            "Fix for manual sort when new games have been added to library",
        ]
    },
    {
        version: '1.3.2',
        date: '25-12-2015',
        changes: [
            "Added import and export for Manual Sort Order",
        ]
    },
    {
        version: '1.3.1',
        date: '25-12-2015',
        changes: [
            "Manual Sorting fixes",
        ]
    },
    {
        version: '1.3.0',
        date: '24-12-2015',
        changes: [
            "Added basic Manual Sorting implementation",
        ]
    },
    {
        version: '1.2.6',
        date: '21-12-2015',
        changes: [
            "Added New / Coming Soon tags to remix and legacy shelf views",
            "Fixed sorting issues when displaying All games",
            "Fixed reporting of missing legacy game covers",
        ]
    },
    {
        version: '1.2.5',
        date: '21-12-2015',
        changes: [
            "Quick fix for library issues",
        ]
    },
    {
        version: '1.2.4',
        date: '20-12-2015',
        changes: [
            "Reimplemented automatic LegacyUrl management",
            "General code refactoring for smoother loading and usage",
        ]
    },
    {
        version: '1.2.3',
        date: '18-12-2015',
        changes: [
            "Rolled back changes to last working configuration",
        ]
    },
    {
        version: '1.2.1',
        date: '17-12-2015',
        changes: [
            "Updated LegacyUrl system to automatically add new urls for games missing images",
        ]
    },
    {
        version: '1.2.0',
        date: '06-11-2015',
        changes: [
            "Added option for games per page in library",
            "Changes to styling for legacy shelves contributed by plagren",
        ]
    },
    {
        version: '1.1.10',
        date: '01-11-2015',
        changes: [
            "Added download all goodies link to game details in library when using GoG Downloader",
            "Added new styling to legacy shelves contributed by plagren",
        ]
    },
    {
        version: '1.1.9',
        date: '28-10-2015',
        changes: [
            "Bug fixes for top pagination",
        ]
    },
    {
        version: '1.1.8',
        date: '27-10-2015',
        changes: [
            "Added shelf header and footer to legacy shelf styles",
            "Added option for pagination at the top of the account page",
        ]
    },
    {
        version: '1.1.7',
        date: '15-10-2015',
        changes: [
            "Fixed bug with black shelf option",
        ]
    },
    {
        version: '1.1.6',
        date: '15-10-2015',
        changes: [
            "Added black shelf option for Legacy styles",
        ]
    },
    {
        version: '1.1.5',
        date: '14-10-2015',
        changes: [
            "Changed work around for previous debugging related errors",
        ]
    },
    {
        version: '1.1.4',
        date: '14-10-2015',
        changes: [
            "Fixed bugs introduced by GoG disabling AngularJS debuging",
        ]
    },
    {
        version: '1.1.3',
        date: '13-10-2015',
        changes: [
            "Tweaks and bug fixes for shelf styles",
        ]
    },
    {
        version: '1.1.2',
        date: '11-10-2015',
        changes: [
            "Tweaks and bug fixes for shelf styles",
        ]
    },
    {
        version: '1.1.1',
        date: '11-10-2015',
        changes: [
            "Tweaks and bug fixes for Legacy shelf style",
            "Added the option to completely disable the forum search bar (and the hide/show button)",
        ]
    },
    {
        version: '1.1.0',
        date: '11-10-2015',
        changes: [
            "Added the Legacy shelf style",
            "Added the Remix shelf style",
        ]
    },
    {
        version: '1.0.11',
        date: '08-10-2015',
        changes: [
            "Added a button to hide / show the search bar on the forum",
        ]
    },
    {
        version: '1.0.9',
        date: '07-10-2015',
        changes: [
            "Added configurable warning for the forum search that allows you to abort searches over a chosen number of pages",
            "Changed the forum search results text to include the pages searched as well as number of results and time taken",
            "Added a button to hide / show the advanced search options",
            "Added the option to completely disable the search bar on the forum",
        ]
    },
    {
        version: '1.0.8',
        date: '04-10-2015',
        changes: [
            "Bug fixes for library styles",
        ]
    },
    {
        version: '1.0.7',
        date: '30-09-2015',
        changes: [
            "Added Legacy Remix Library style",
        ]
    },
    {
        version: '1.0.6',
        date: '29-09-2015',
        changes: [
            "Reviews filter bug fix",
        ]
    },
    {
        version: '1.0.5',
        date: '29-09-2015',
        changes: [
            "Added button to library game cards to swap between manual and downloader links",
            "Added link to thread at bottom of pop up menu pages",
            "Review filtering options can now be remembered",
            "If reviews are not set to auto load and sort then default GoG display is retained",
        ]
    },
    {
        version: '1.0.4',
        date: '23-09-2015',
        changes: [
            "Actually fixed bug where DLC would not switch to downloader links",
            "Fixed bug where downloader links would not change to correct OS / Language options"
        ]
    },
    {
        version: '1.0.2',
        date: '22-09-2015',
        changes: [
            "Fixed bug where DLC would not switch to downloader links"
        ]
    },
    {
        version: '1.0.1',
        date: '22-09-2015',
        changes: [
            "Fixed the bugs which caused the script not to work on Firefox"
        ]
    },
    {
        version: '1.0.0',
        date: '17-09-2015',
        changes: [
            "Combined features of old scripts into one new package"
        ]
    }
]

function to_css(rules) {
    var text = ''
    for (var i = 0; i+1 < rules.length; i += 2) {
        var selectors = rules[i], declarations = rules[i+1]
        text += selectors + '{'
        for (var j in declarations) {
            text += declarations[j] + ';'
        }
        text += '}'
    }
    return text
}

function cmpVersion(a, b) {
    var i, cmp, len, re = /(\.0)+[^\.]*$/;
    a = (a + '').replace(re, '').split('.');
    b = (b + '').replace(re, '').split('.');
    len = Math.min(a.length, b.length);
    for( i = 0; i < len; i++ ) {
        cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
        if( cmp !== 0 ) {
            return cmp;
        }
    }
    return a.length - b.length;
}

function exportManualSorting()
{
    debugLogger.debugLog("Export");
    var manualSortOrder = JSON.parse(GM_getValue('manual_sort_order'));
    var keys = Object.keys(manualSortOrder);

    function sortKeys(a, b)
    {
        if (manualSortOrder[a].sortBy === null && manualSortOrder[b].sortBy === null)
        {
            return naturalCompare(manualSortOrder[a].name, manualSortOrder[b].name);
        }
        else if (manualSortOrder[a].sortBy === null)
        {
            return 1;
        }
        else if (manualSortOrder[b].sortBy === null)
        {
            return -1;
        }
        return (manualSortOrder[a].sortBy < manualSortOrder[b].sortBy) ? -1 : (manualSortOrder[a].sortBy > manualSortOrder[b].sortBy) ? 1 : naturalCompare(manualSortOrder[a].name, manualSortOrder[b].name);
    }

    keys.sort(sortKeys);
    var exportString = '{';

    for (var i = 0; i < keys.length; i++)
    {
        var tempString = '"' + keys[i] + '":' + JSON.stringify(manualSortOrder[keys[i]]);
        exportString += tempString;
        if (i != keys.length - 1)
        {
            exportString += ",";
        }
    }
    exportString +='}'
    //GM_setClipboard (manualSortOrder);
    GM_setClipboard (exportString);
}

function importManualSorting()
{
    debugLogger.debugLog("Import");
    var manualSortOrder = prompt("Paste in your saved sort order to import");
    if (manualSortOrder != null && manualSortOrder != "")
    {
        GM_setValue('manual_sort_order', manualSortOrder);
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
}

function resetManualSorting()
{
    debugLogger.debugLog("Reset");
    if (window.confirm("Are you sure you want to reset your sort order?\nThis action is irreversible"))
    {
        GM_deleteValue('manual_sort_order');
        if (GetLastPartOfDirectory(window.location.pathname) == "account")
        {
            contentEval(function(){
                var accountPagin = angular.element(document.body).injector().get('accountPagination');
                accountPagin.resetPage();
                var account = angular.element(document.body).injector().get('account');
                account.afRefreshManualSort = true;
                account._filtersAggregator._updateListeners.callListeners();
            });
        }
    }
}

var popup = {
    show: function(section) {
        var popup = $('aside.AF-popup')
        if (popup.length == 0) {
            popup = $('<aside class="AF-popup"><div>')

            var nav = $('<nav>').appendTo(popup)
            var navlist = $('<ul>').appendTo(nav)

            // close button
            $('<li>')
                .text('Close')
                .click(function() { $('.AF-popup').remove() } )
                .prependTo(navlist)

            // dynamic sections
            for (var section_name in config) {
                $('<li>').appendTo(navlist).text(section_name).click(this.show_section.bind(this, section_name))
            }

            popup.appendTo(document.body)
        }

        debugLogger.debugLog("Pop up shown");
        this.show_section(section)
    },
    checkbox_change_event: function(key, subkey, e) {
        var setting = settings.get(key)
        setting[subkey] = e.target.checked
        settings.onchange(key)
    },
    change_event: function(key, e) {
        if (e.target.type == 'checkbox') settings.set(key, e.target.checked)
        else settings.set(key, e.target.value)
            },
    show_section: function(section) {
        var popup = $('aside.AF-popup')
        var root = popup.find('>div')
        root.empty()

        popup.find('>nav>ul>li').removeClass('active').each(function() {
            if (this.textContent == section) $(this).addClass('active')
                })

        $('<h1>').text('Adalia Fundamentals - '+section).appendTo(root)

        switch (section) {
            case 'Changelog': {
                var old_versions = $('<div class="AF-older-changes">').hide()

                //FIX HERE
                changelog.forEach(function(entry) {
                    var p = $('<h2>')
                    .text("Version " + entry.version)
                    .append($('<small>').text(" - released on " + entry.date))

                    var list = $('<ul>').addClass('AF-changelog')

                    entry.changes.forEach(function(change) {
                        $('<li>').html(change).appendTo(list)
                    })

                    var entry
                    if (entry.version == version || cmpVersion(last_AF_version, entry.version) < 0) {
                        root.append(p, list)
                    } else {
                        old_versions.append(p, list)
                    }
                });
                if (old_versions.children().length > 0) {
                    var older = $('<p>').append($('<a>').html('older changes&hellip;').click(function() { old_versions.toggle(); $(".thread-details").toggle(); }))
                    root.append(older, old_versions)
                }
                break;
            }
            case 'Manual Sort': {
                var div = $('<div>');
                var p = $('<p style="font-size: 15px;">To export your sort order click the export button, your sorting will be automatically added to your clipboard to paste and save. <br /> To import a sort order click the import button and paste the sort order into the dialog box. <br /> Resetting your sort order will delete your manual sorting and save the currently selected GoG default sort as your new manual sort order (eg. if you have sort by Purchase Date selected it will set your manual sorting to Purchase Date which you could then modify from there)</p>');
                var exportButton = $('<input type="button" class="af-manual-sort-button" value="Export Sort Order" />');
                var importButton = $('<input type="button" class="af-manual-sort-button" value="Import Sort Order" />');
                var resetButton = $('<input type="button" class="af-manual-sort-button" value="Reset Sort Order" />');
                $(exportButton).on("click", exportManualSorting);
                $(importButton).on("click", importManualSorting);
                $(resetButton).on("click", resetManualSorting);
                $(div).append(exportButton).append(importButton).append("<br/><br/><br/><br/>");
                $(p).appendTo(root);
                $(div).appendTo(root);
                $(resetButton).appendTo(root);
                break;
            }
            case 'Donate': {
                var div = $('<div>');
                var p = $('<p style="font-size: 15px;">Although Adalia Fundamentals is open-source and completely free to use, any donations to support my development of it are welcome! <br /> To make a donation please click the button below.</p>');
                var donateButton = $("<a href='https://pledgie.com/campaigns/30875'><img alt='Click here to lend your support to: Adalia Fundamentals - GoG.com Userscript and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/30875.png?skin_name=chrome' border='0' ></a>");
                $(div).append(donateButton);
                $(p).appendTo(root);
                $(div).appendTo(root);
                break;
            }
            default:
                var fields = config[section]
                for (var i in fields) {
                    var field = fields[i]
                    var p = $('<p>')
                    $('<label>').text(field.label).appendTo(p)

                    switch (field.type) {
                        case 'header': {
                            $(p).find('label').wrap('<b></b>').before( '<hr>' );;
                            break
                        }
                        case 'range': {

                            var e = $('<input type="range">')
                            .attr('min', field.min)
                            .attr('max', field.max)
                            .attr('step', field.step)
                            .val(settings.get(field.key))
                            .appendTo(p)

                            e.on('input', this.change_event.bind(this, field.key))

                            break
                        }
                        case 'multibool': {
                            var group = $('<div class="AF-multibool">')

                            var value = settings.get(field.key)
                            for (var option in field.options) {
                                $('<label>')
                                    .text(option)
                                    .prepend(
                                    $('<input type="checkbox">')
                                    .prop('checked', value[option])
                                    .on('change', this.checkbox_change_event.bind(this, field.key, option))
                                )
                                    .appendTo(group)
                            }
                            group.appendTo(p)
                            break
                        }
                        case 'bool': {
                            $('<input type="checkbox">')
                                .prop('checked', settings.get(field.key))
                                .on('change', this.change_event.bind(this, field.key))
                                .appendTo(p)
                            break
                        }
                        case 'choice': {

                            var select = $('<select>')
                            var value = settings.get(field.key)

                            for (var i in field.options) {
                                $('<option>')
                                    .text(field.options[i])
                                    .appendTo(select)
                            }

                            select.val(value)
                            select.appendTo(p)

                            select.on('change', this.change_event.bind(this, field.key))

                            break
                        }
                        case 'number': {
                            var e = $('<input type="number">')
                            .attr('min', field.min)
                            .attr('max', field.max)
                            .attr('step', field.step)
                            .val(settings.get(field.key))
                            .appendTo(p)

                            e.on('input', this.change_event.bind(this, field.key))

                            break
                        }
                        case 'color': {
                            var e = $('<input type="color">')
                            .val(settings.get(field.key))
                            .appendTo(p)

                            e.on('input', this.change_event.bind(this, field.key))

                            break
                        }
                        case 'text': {
                            var e = $('<input type="text">')
                            .val(settings.get(field.key))
                            .appendTo(p)

                            e.on('change', this.change_event.bind(this, field.key))

                            break
                        }
                    }

                    if (field.comment !== undefined) {
                        $('<small>').text(field.comment).appendTo(p)
                    }

                    p.appendTo(root)
                }
        }

        debugLogger.debugLog(section + " shown");
        var threadDetails = $('<p class="thread-details" style="position: absolute; bottom: 0;">If you find any bugs, have any suggestions for features or just want to tell me how great I am you can post it in the <a href="http://www.gog.com/forum/general/adalia_fundamentals_fixing_gog_so_you_dont_have_to">Adalia Fundamentals Thread</a></p>');
        threadDetails.appendTo(root);
        if (section == "Forum")
        {
            $(".thread-details").css({'position' : ''});
        }
        root.focus()
    }
}

var manualSortPopup = {
    show: function(id, title) {
        debugLogger.debugLog('Manual Sort Pop Up Show');
        var popup = $('aside.AF-manualSortPopup')
        var manualSortOrder = retrieveManualSortOrder();
        var totalGames = unsafeWindow.gogData.totalProducts;

        function findIdByIndex(index)
        {
            for (var key in manualSortOrder) {
                if (manualSortOrder.hasOwnProperty(key)) {
                    var obj = manualSortOrder[key];
                    if (obj.sortBy == index)
                    {
                        return key;
                    }
                }
            }
        }

        if (popup.length == 0) {
            popup = $('<aside class="AF-manualSortPopup AF-popup" style="top: 20%; height: 50%;"><div>')

            var root = popup.find('>div')
            root.empty()

            $('<h1>').text('Adalia Fundamentals - Manual Sort Move').appendTo(root)
            var currentPosition = $('<p style="font-size: 15px; font-weight: bold;">Selected Title: '  + title + '<br/> Current Position: ' + manualSortOrder[id].sortBy + '</p>');
            var div = $('<div>');
            var p = $('<p style="font-size: 15px;">Enter an index for the selected game to be moved to in the sort order, indices start at 0. <br/> Press enter or click outside the textbox to update the preview of your chosen position.</p>');
            var cancelButton = $('<input type="button" class="af-manual-sort-button" value="Cancel" />');
            var okButton = $('<input type="button" class="af-manual-sort-button" value="Ok" />');
            var textBox = $('<input type="text" id="af-manual-sort-text-input" value="' + manualSortOrder[id].sortBy + '"/>');
            var label = $('<label for="af-manual-sort-text-input" style="width:auto;">Enter index to move to:</label>');
            var previousIndex = $('<p>');
            var currentIndex = $('<p style="font-weight: bold;">');
            var nextIndex = $('<p>');
            $(cancelButton).on("click", function() { $('.AF-manualSortPopup').remove() } );
            $(okButton).on("click", function() {
                var result = $(textBox).val();
                if (result < 0)
                {
                    manualSortOrder[id].sortBy = -1;

                    normaliseManualSortOrder(manualSortOrder);
                    manualSortProducts();
                    var scroll = $(window).scrollTop();
                    document.dispatchEvent(new Event("updateManualSortEvent"));
                    $(window).scrollTop(scroll);
                }
                else if (result >= totalGames)
                {
                    manualSortOrder[id].sortBy = totalGames+1;

                    normaliseManualSortOrder(manualSortOrder);
                    manualSortProducts();
                    var scroll = $(window).scrollTop();
                    document.dispatchEvent(new Event("updateManualSortEvent"));
                    $(window).scrollTop(scroll);
                }
                else
                {
                    changeProductSortOrder(id, findIdByIndex(result));
                }
                $('.AF-manualSortPopup').remove();
            });
            $(currentPosition).appendTo(root);
            $(p).appendTo(root);
            $(label).appendTo(div);
            $(textBox).appendTo(div);
            $(div).append(previousIndex).append(currentIndex).append(nextIndex);
            $(div).appendTo(root);
            $(root).append(okButton).append(cancelButton);

            popup.appendTo(document.body)

            $('#af-manual-sort-text-input').change(function() {
                var value = $(this).val();
                var current = false;
                var previous = false;
                var next = false;
                for (var key in manualSortOrder) {
                    if (manualSortOrder.hasOwnProperty(key)) {
                        var obj = manualSortOrder[key];
                        if (obj.sortBy == value)
                        {
                            $(currentIndex).text(obj.sortBy + " - " + obj.name);
                            current = true;
                        }
                        else if (obj.sortBy == (value - 1))
                        {
                            $(previousIndex).text(obj.sortBy + " - " + obj.name);
                            previous = true;
                        }
                        else if (obj.sortBy == (parseInt(value) + 1))
                        {
                            $(nextIndex).text(obj.sortBy + " - " + obj.name);
                            next = true;
                        }
                    }
                }
                if (!current)
                {
                    $(currentIndex).text("-");
                }
                if (!previous)
                {
                    $(previousIndex).text("-");
                }
                if (!next)
                {
                    $(nextIndex).text("-");
                }
            });
            $('#af-manual-sort-text-input').change();
            root.focus()
        }

        debugLogger.debugLog("Manual Sort pop up shown");
    }
}

var settings = {
    get: function(key) {
        var setting = this.settings[key]
        if (setting) return setting.value
        else return undefined
            },
    set: function(key, value) {
        var setting = this.settings[key]

        if (setting) {
            if (setting.value != value) {
                setting.value = value
                this.save()

                for (var i in setting.onchange) {
                    setting.onchange[i](value)
                }
            }
        }
        debugLogger.debugLog(key + " setting set to " + value);
    },
    save: function() {
        var saved_settings = {}
        for (var key in this.settings) {
            saved_settings[key] = this.settings[key].value
        }
        GM_setValue('settings', JSON.stringify(saved_settings))
        debugLogger.debugLog("Settings saved");
    },
    onchange: function(key, callback) {
        var setting = this.settings[key]
        if (setting) {
            if (callback) {
                setting.onchange.push(callback)
                callback(setting.value)
            } else {
                this.save()

                for (var i in setting.onchange) {
                    var callback = setting.onchange[i]
                    callback(setting.value)
                }
            }
        }
        debugLogger.debugLog(key + " setting changed");
    },

    initialise: function(initial_values, done) {

        var saved_settings = {}
        try {
            var s = GM_getValue('settings')
            if (s !== undefined) saved_settings = JSON.parse(s)
                } catch (exception) {
                    console.log(exception)
                    GM_deleteValue('settings')
                }
        if (!saved_settings) saved_settings = {}

        if (saved_settings['bugfix-collapsible-footer']) {
            saved_settings['bugfix-footer-spacer'] = saved_settings['bugfix-collapsible-footer']
            delete saved_settings['bugfix-collapsible-footer']
        }

        for (var section_name in initial_values) {
            for (var i in initial_values[section_name]) {
                var item = initial_values[section_name][i]

                var setting = {
                    onchange: [],
                    value: (saved_settings[item.key] !== undefined) ? saved_settings[item.key] : item.def
                }

                // for "choice" items, verify that the selected value is a valid option
                if (item.type == 'choice') {
                    var valid = false
                    for (var j in item.options) {
                        var option = item.options[j]
                        if (option == setting.value) valid = true
                            }
                    if (!valid) setting.value = item.def
                        }

                if (item.type == 'multibool' && setting.value === undefined) setting.value = item.options

                this.settings[item.key] = setting
            }
        }

        setDebug()

        debugLogger.debugLog("Settings Initilised");
        if (done) done()
            },

    settings: {}
}

function setDebug()
{
    function on_update(value)
    {
        debugLogger.debuggingActive = value;
	}
    settings.onchange('other-debug', on_update);
}

function feature_add_fundamentals_link() {
    var separator = $('.js-menu-account .menu-submenu-separator.menu-submenu-extension-settings')
	if (separator.length == 0) {
		separator = $('<div class="menu-submenu-separator menu-submenu-extension-settings"></div>')
		separator.insertBefore($('.js-menu-account .menu-submenu-separator').first())
	}

	$('<a class="menu-submenu-link">').text('Adalia Fundamentals')
	.appendTo(
		$('<div class="menu-submenu-item menu-submenu-item--hover">')
		.insertAfter(separator)
	)
	.click(function() { alert("Be aware that the menu item to access the Adalia Fundamentals settings popup can now be found under the About menu.\n\nThe menu item under the Account menu will be removed in the near future - this notice is here so that when the \"Adalia Fundamentals\" item in the Account menu does get removed everybody knows where it went.\n\nSorry for any inconvenience."); popup.show('Changelog') })

	separator = $('.js-menu-about .menu-submenu-separator.menu-submenu-extension-settings')
	if (separator.length == 0) {
		separator = $('<div class="menu-submenu-separator menu-submenu-extension-settings"></div>')
		separator.insertAfter($('.js-menu-about .menu-submenu-separator').last())
	}

	$('<a class="menu-submenu-link">').text('Adalia Fundamentals')
	.appendTo(
		$('<div class="menu-submenu-item menu-submenu-item--hover">')
		.insertBefore(separator)
	)
	.click(popup.show.bind(popup, 'Changelog'))
}

function setCurrencySymbol()
{
    function on_update(value)
    {
        if (value == "Default")
            return
        else if (value == "Left")
        {
            $("html").removeClass("curr-symbol-before curr-symbol-after").addClass("curr-symbol-before");
        }
        else if (value == "Right")
        {
            $("html").removeClass("curr-symbol-before curr-symbol-after").addClass("curr-symbol-after");
        }
    }

    settings.onchange('currency-symbol', on_update);
}

function feature_AF_style() {
    function on_update(value) {
        switch(value) {
            default: style.text(to_css([
                '.AF-error', [
                    'color: #B80000',
                    'font-weight: bold',
                ],
                '.AF-in-progress', [
                    'color: #808000',
                    'font-weight: bold',
                ],
                '.AF-success', [
                    'color: #006000',
                    'font-weight: bold',
                ],
                '.AF-sync-progress>p', [
                    'margin: 1em 0',
                ],
                '.AF-sync-progress p>span:nth-child(1)', [
                    'display: inline-block',
                    'text-align: right',
                    'margin-right: 0.5em',
                    'min-width: 25%',
                ],
                '.AF-popup h2', [
                    'font-size: 14px',
                    'font-weight: bold',
                    'margin: 1.5em 0 0.5em',
                ],
                '.AF-popup .AF-changelog + p', [
                    'margin: 1em',
                    'font-style: italic',
                    '-moz-user-select: none',
                    'user-select: none',
                ],
                '.AF-older-changes', [
                    'padding-top: 1px',
                ],
                '.AF-changelog li:before', [
                    'content: "•"',
                    'margin-left: -1em',
                    'position: absolute',
                ],
                '.AF-changelog li small', [
                    'font-weight: bold',
                    'font-family: monospace',
                    'color: #000',
                    'display: inline-block'
                ],
                '.AF-changelog li', [
                    'margin: 0.3em 0',
                    'display: block',
                    'padding-left: 1em',
                    'line-height: 1.4',
                    'position: relative',
                ],
                '.AF-changelog', [
                    'list-style: disc inside none',
                    'font-size: 12px',
                    'display: block',
                    'margin-right: 2em',
                ],
                '.AF-popup a', [
                    'cursor: pointer',
                    'color: blue',
                ],
                '.AF-popup a:hover', [
                    'text-decoration: underline'
                ],
                '.AF-popup input[type=checkbox]', [
                    'width: auto',
                    'margin: 2px 0 0 6px',
                ],
                '.AF-popup .AF-multibool input[type=checkbox]', [
                    'vertical-align: middle',
                    'margin: 0 0.5em 0 0',
                    'line-height: 1'
                ],
                '.AF-popup .AF-multibool label', [
                    'float: none',
                    'width: auto',
                    'text-align: left',
                    'line-height: 1',
                    'margin-bottom: 0.2em'
                ],
                '.AF-popup .AF-multibool', [
                    'overflow: hidden',
                    'padding: 0 0 0 0.5em',
                    'border-left: 1px solid #676767',
                    'margin-top: 5px',
                ],
                '.AF-popup input[type=range]::-moz-focus-outer', [
                    'border: none',
                    'border-right: 2px solid #808080',
                    'border-left: 2px solid #808080',
                ],
                '.AF-popup input[type=range]', [
                    'padding: 0 4px',
                    'margin-top: 2px',
                    'border: none',
                ],
                '.AF-popup select', [
                    'border: 1px solid #808080',
                    'font-family: "Lucida Grande",Arial,Verdana,sans-serif',
                ],
                '.AF-popup select, .AF-popup input, .AF-popup .AF-multibool', [
                    'font-size: 11px',
                    'width: 20em',
                    'max-width: 70%',
                    'box-sizing: border-box',
                ],
                '.AF-popup p small', [
                    'display: block',
                    'font-style: italic',
                    'clear: both',
                ],
                '.AF-popup p', [
                    'margin: 0.5em 0',
                    'overflow: hidden',
                    'padding-bottom: 2px',
                ],
                '.AF-popup label', [
                    'float: left',
                    'display: block',
                    'width: 50%',
                    'clear: both',
                    'text-align: right',
                    'margin-right: 1em',
                    'line-height: 1.8em',
                    'cursor: default',
                    '-moz-user-select: none'
                ],
                '.AF-popup h1', [
                    'font-size: 14pt',
                    'font-weight: normal',
                    'padding: 0.5em 0 .3em 2em',
                    'margin: 0 0 0.7em',
                    'line-height: normal',
                    'border-bottom: 1px solid #676767',
                ],
                '.AF-popup', [
                    'background: #E1E1E1',
                    'width: 850px',
                    'position: fixed',
                    'top: 10%',
                    'height: 85%',
                    'right: calc(50% - 425px)',
                    'z-index: 600',
                    'box-shadow: 1px 1px 10px 0 black',
                    'box-sizing: border-box',
                    'display: flex',
                    'font-size: 11px',
                    'font-family: "Lucida Grande",Arial,Verdana,sans-serif',
                    'color: #212121',
                    '-moz-border-radius: 10px',
                    '-webkit-border-radius: 10px',
                    'border-radius: 10px',
                    '-khtml-border-radius: 10px',
                    'border-bottom: #aaa 3px solid',
                    'border-top: #aaa 3px solid',
                ],
                '.AF-popup>div', [
                    'flex: 1 1 auto',
                    'padding: 1em',
                    'overflow: auto',
                    'position: relative',
                ],
                '.AF-popup>nav>ul>li:hover', [
                    'color: inherit',
                ],
                '.AF-popup>nav>ul>li+li', [
                    'border-top: 1px solid #676767',
                ],
                '.AF-popup>nav>ul>li.active', [
                    'background: #E1E1E1',
                    'color: #4A4A4A'
                ],
                '.AF-popup>nav>ul>li:not(.active):hover', [
                    'color: #fff',
                    'text-shadow: 1px 1px 0px black',
                    'background: #606060',
                ],
                '.AF-popup>nav>ul>li:first-of-type:hover', [
                    'color: #fff',
                    'text-shadow: 1px 1px 0px black',
                    'background: #606060',
                    '-moz-border-radius: 0 10px 0 0',
                    '-webkit-border-radius: 0 10px 0 0',
                    'border-radius: 0 10px 0 0',
                    '-khtml-border-radius: 0 10px 0 0',
                ],
                '.AF-popup>nav>ul>li', [
                    'padding: 1em 2em',
                    'cursor: pointer',
                    'line-height: 1',
                    'color: #ffffff',
                    'margin-left: auto',
                ],
                '.AF-popup>nav>ul', [
                    'margin: 0',
                    'padding: 0',
                    'display: block',
                    'list-style: none',
                ],
                '.AF-popup>nav', [
                    'background: #4A4A4A',
                    'color: #E1E1E1',
                    'font-size: 11px',
                    'font-family: "Lucida Grande",Arial,Verdana,sans-serif',
                    'min-width: 134px',
                    '-moz-border-radius: 0 10px 10px 0',
                    '-webkit-border-radius: 0 10px 10px 0',
                    'border-radius: 0 10px 10px 0',
                    '-khtml-border-radius: 0 10px 10px 0',
                ],
                '.af-manual-sort-button', [
                    'background: #aaa',
                    'color: #111',
                    'padding: 4px',
                    'margin: 10px 60px 0',
                    '-moz-border-radius: 10px',
                    '-webkit-border-radius: 10px',
                    'border-radius: 5px',
                    '-khtml-border-radius: 10px',
                ],
                '.user__header-details .user__name', [
                    'text-transform: none',
                ],
                '.user-name', [
                    'text-transform: none',
                ],
                '.af-review-header', [
                    'font-size: .875em',
                    'font-weight: 600',
                    'color: #262626',
                    'text-transform: none',
                ],
            ]))
            break;
        }
    }
    var style = $('<style>').appendTo(document.head)
    settings.onchange('AF-style', on_update)
}
var ajaxQueue = {
    maxRequests: 100,
    currentRequests: 0,
    requests: [],
    add: function(URL, callback)
    {
        if(this.currentRequests < this.maxRequests)
        {
            $.get(URL, callback);
        }
        else
        {
            this.requests.push(
                {
                    pageURL: URL,
                    callbackFunction: callback
                });
        }
    }
};
var months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
};
jQuery.expr[':'].Contains = function(a, i, m)
{
    /*return jQuery(a).text().toUpperCase()
		.indexOf(m[3].toUpperCase()) >= 0;*/
    if (m[3].indexOf('\\b') === 0)
    {
        var reg = new RegExp(m[3]);
    }
    else
    {
        var reg = new RegExp(m[3], 'i');
    }
    return (jQuery(a).text()).match(reg);
};
$.fn.changeElementType = function(newType)
{
    var attrs = {};
    $.each(this[0].attributes, function(idx, attr)
           {
        attrs[attr.nodeName] = attr.nodeValue;
    });
    var newelement = $("<" + newType + "/>", attrs).append($(this).contents());
    this.replaceWith(newelement);
    return newelement;
};

function addGlobalStyle(css)
{
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if(!head)
    {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function FolderDepthFunction(the_url)
{
    var the_arr = the_url.split('/');
    return the_arr.length;
}

function RemoveLastDirectoryPartOf(the_url)
{
    var the_arr = the_url.split('/');
    the_arr.pop();
    return(the_arr.join('/'));
}

function RemoveLastDirIfLonger(the_url, length)
{
    if(FolderDepthFunction(the_url) > length)
    {
        return RemoveLastDirectoryPartOf(the_url);
    }
    else
    {
        return the_url;
    }
}

function GetFirstPartOfDirectory(the_url)
{
    var the_arr = the_url.split('/');
    return the_arr[1];
}

function GetLastPartOfDirectory(the_url)
{
    var the_arr = the_url.split('/');
    return the_arr[the_arr.length - 1];
}

function FindLastPageNumber()
{
    return parseInt(jQuery('.n_b_b_nr_last').first().text());
}

function MergeArraysRemoveDuplicates(array1, array2)
{
    var result = array1;
    array2.forEach(function(value)
                   {
        if(result.indexOf(value) == -1) result.push(value);
    });
    return result;
}

function StripNonNumbers(aString)
{
    return aString.replace(/\D/g, '');
}

function StripNonNumbersParse(aString)
{
    return parseInt(aString.replace(/\D/g, ''));
}

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

function parseDate(dateString)
{
    if(dateString.indexOf("now") >= 0)
    {
        return Date.now();
    }
    else if(dateString.indexOf("min") >= 0)
    {
        var mins = StripNonNumbersParse(dateString) * 60000;
        return new Date(Date.now() - mins);
    }
    else if(dateString.indexOf("hrs") >= 0)
    {
        var hrs = StripNonNumbersParse(dateString) * 3600000;
        return new Date(Date.now() - hrs);
    }
    else if(dateString.indexOf("Yesterday") >= 0)
    {
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        return yesterday;
    }
    else if(dateString.indexOf("days") >= 0)
    {
        var days = StripNonNumbersParse(dateString)
        var today = new Date();
        var date = new Date(today);
        date.setDate(today.getDate() - days);
        return date;
    }
    else
    {
        var aString = dateString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        var strArray = aString.split(" ");
        var month = months[strArray[0]];
        var day = strArray[1];
        var year = strArray[2];
        return new Date(year, month, day);
    }
}
// End of Utility Functions

if (window.top === window.self) {
	
	if (af-forumFunctions == true && af-accountFunctions == true && af-gamePageFunctions == true && af-chatFunctions == true)
	{
		$.getScript("https://raw.githubusercontent.com/adaliabooks/adalia-fundamentals/development/af-all-functions.js");
	}
	else
	{
		if (af-forumFunctions == true)
		{
			$.getScript("https://raw.githubusercontent.com/adaliabooks/adalia-fundamentals/development/af-forum.js");
		}
		if (af-accountFunctions == true)
		{
			$.getScript("https://raw.githubusercontent.com/adaliabooks/adalia-fundamentals/development/af-account.js");
		}
		if (af-gamePageFunctions == true)
		{
			$.getScript("https://raw.githubusercontent.com/adaliabooks/adalia-fundamentals/development/af-game-page.js");
		}
		if (af-chatFunctions == true)
		{
			$.getScript("https://raw.githubusercontent.com/adaliabooks/adalia-fundamentals/development/af-chat.js");
		}
	}
	
    $( document ).ready(function() {
        try {
            settings.initialise(config, function() {

                feature_AF_style();

                // navbar
                feature_add_fundamentals_link();
                //syncWishlistPriorityData();
                setWishlistSync();
                setCurrencySymbol();

                debugLogger.debugLog("Features Loaded");

                var path = window.location.pathname;
                debugLogger.debugLog(path);

                // 404
                if (document.title == "404 - Page not found - GOG.com") {
                }

                // Forum
                if (GetFirstPartOfDirectory(path) == "forum")
                {
                    debugLogger.debugLog("Forum");
                    if (GetLastPartOfDirectory(path) == "forum")
                    {
                        setTimeout(function() {
                            setLanguageForums();
                            sortGameForums();
                            setCommunityWishlist();
                            setFavouriteTopic();
                            setParticipatedTopic();
                            setHotTopic();
                            setAllHide();
                        }, 100);
                    }
                    enableSearchBar();
                    if (GetLastPartOfDirectory(path) != "myrecentposts")
                    {
                        setFavouritesHide();
                        setFavouritesToggle();
                    }
                }

                // Catalogue
                if (GetFirstPartOfDirectory(path) == "games")
                {
                    setTimeout(function() {
                        markOwnedGames("catalogue");
                        setHideToolTip();
                    }, 1);
                }

                // Game Page
                if (GetFirstPartOfDirectory(path) == "game")
                {
                    debugLogger.debugLog("Game Page");
                    setTimeout(loadReviewFilter, 1);
                    setTimeout(setReviewsPerPageDropdown, 1);
                    setTimeout(setSortOrderDropdown, 1);
                    setTimeout(setSortOrder2Dropdown, 1);
                    gamePageMaGoGLink();
                    gamePageChangelogLinks();
                }

                // Account
                if (GetFirstPartOfDirectory(path) == "account")
                {
                    debugLogger.debugLog("Account");
                    $.when($.getJSON( "https://gog.bigpizzapies.com/af_legacy_urls.php?", function(data) {
                        unsafeWindow.legacyUrls    = cloneInto (data, unsafeWindow);
                    }), $.getJSON( "https://gog.bigpizzapies.com/lastUpdatedIdList.json?", function(data) {
                        unsafeWindow.updatedList    = cloneInto (data, unsafeWindow);
                    }))
                        .always(function(data)
                                {
                        setTimeout(changeDownloadLinks, 100);
                        setTimeout(setDownloadOptions, 100);
                        setTimeout(setShowUpdateInfo, 100);
                        setTimeout(gamesPerPageOption, 100);
                        setTimeout(setGamesPerPage, 100);
                        setTimeout(setManualSort, 100);
                        setTimeout(loadLibraryStyleChanger, 100);
                        setTimeout(setShelfColour, 100);
                        setTimeout(addTopPagination, 100);
                        setTimeout(setLibraryProductTotals, 100);
                        setTimeout(fixLibraryProductTotals, 100);
                    });
                    if (GetLastPartOfDirectory(path) == "wishlist")
                    {
                        setTimeout(addWishlistTags, 1);
                        setTimeout(setWishlistProductTotals, 1);
                        setTimeout(fixWishlistProductTotals, 1);
                    }
                    if (GetLastPartOfDirectory(path) == "friends")
                    {
                        setTimeout(setFriendsSearchJoinDate, 1);
                    }
                }
                if (GetFirstPartOfDirectory(path) == "u" && GetLastPartOfDirectory(path) == "wishlist")
                {
                    setTimeout(addPublicWishlistTags, 1);
                    setTimeout(function() {
                        markOwnedGames("wishlist");
                    }, 1);
                    //setTimeout(setPublicWishlistTags, 1);
                    //setTimeout(setPublicWishlistSort, 1);
                }
                if (GetLastPartOfDirectory(path) == "chat")
                {
                    setChatOptionsBar();
                    //setChatRoomSort();
                    setChatEnterToSend();
                    //setChatRoomNamesFilter();
                }
            })

        } catch (exception) { console.error(exception)}
    });

    // check version, and show changelog if new
    var last_AF_version = GM_getValue('last_AF_version')
    if (last_AF_version === undefined) last_AF_version = "1.0"
    else if (cmpVersion(last_AF_version, version) < 0) {
        debugLogger.debugLog("Update detected, changelog shown");
        popup.show('Changelog')
    }
    GM_setValue('last_AF_version', version)
}
else
{
    settings.initialise(config, function() {
        $( document ).ready(function() {
            var debugEvent = new CustomEvent("debugLog",{ detail: "In iframe"});
            document.dispatchEvent(debugEvent);
            var debugEvent = new CustomEvent("debugLog",{ detail: window.location.pathname});
            document.dispatchEvent(debugEvent);
            addGlobalStyle('.user-name { text-transform: none; }');
            setTimeout(function() {
                //roomsFilterAndSort();
            }, 10);
            chatEnterButton();
        });
    });
}

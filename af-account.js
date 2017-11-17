// Account Page Functions

// Loads the Downloader links page for the current game and scrapes the link to download all the goodies at once, then displays this on the game card
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

// Creates a watcher that calls the loadUpdateInfo function any time the "gog-account-product" attribute on .game-details changes
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

// Loads the Classic Installer links by calling Gog's built in function to do so.
function loadClassicLinks()
{
    contentEval(function() {
        var accountProductsScope = angular.element(document.querySelectorAll('.game-details__title')).scope();
        accountProductsScope.details.openClassicDownloads();
        accountProductsScope.$apply();
    });
    debugLogger.debugLog("Classic Links Loaded");
}

// Replaces the code for the download items with a new code that checks whether the script's Downloader Links option is on and displays the appropriate links
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

// Creates the button to turn Downloader Links on or off
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

// Creates the label that shows the date the game was last updated and it's current version
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

// Loads the info about games last update and current version number (relies on Galaxy APIs so not always accurate)
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

// Styles the top pagination based on choice of shelf
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

// Adds a pagination element to the top of the page
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

// Changes the colour of the legacy shelf
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

// Set up for the library style options in the menu
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

// Loads the correct style based on users' choice of library
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

// Replaces the base GOG library code with custom HTML / Angular that allows more games per page, manual sorting and different library styles.
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

// Sets up the menu option for games per page
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

// Custom code called when the library is loaded to allow more games and different sorting options
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

// Sets up the manual sort option in the menu
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

// Normalises the sortBy values of games in the manual sort order to remove decimals or duplicate values
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

// Fetches the manual sort order from the script database or generates a new one from the current sorting if none exists
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

// Adds new games not already listed in the manual sort order to the begininng or end of the list based on user preference
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

// Shows the move pop up to allow moving games large distances in the sort order
function changeSortPopUp(idToMove, title)
{
    debugLogger.debugLog('Change Sort Pop Up');
    manualSortPopup.show(idToMove, title);
}

// Moves an id to a new position in the manual sort order
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

//Exports the manual sort order to window scope (for Palemoon)
function exportManualSort(manualSortOrder)
{
    unsafeWindow.manualSortOrderJSON = cloneInto (JSON.stringify(manualSortOrder), unsafeWindow);
    contentEval(function(){
        window.manualSortOrder = JSON.parse(window.manualSortOrderJSON);
    });
}

// Sorts the products by the manual sort order
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

// Sorts the products by last updated date
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

// Called when manual sort is enabled, allows draging
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

// Set up for library product totals option
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

// Replaces default product totals html with custom code that shows current number of displayed items rather than total library count
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

// Set up for wishlist product totals option
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

// Replaces default product totals html with custom code that shows current number of displayed items rather than total wishlist count
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

// Sets up the option to show tags on private wishlist
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

// Sets up the option to show tags on public wishlist
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

// Sets up the option to sort private wishlist
function setPrivateWishlistSort()
{
    function on_update(value)
    {
        var changeSortEvent = new CustomEvent("changePrivateWishlistSort",{ detail: value});
        document.dispatchEvent(changeSortEvent);
    }

    settings.onchange('wishlist-private-sort', on_update);
}

// Sets up the option to sort public wishlist
function setPublicWishlistSort()
{
    function on_update(value)
    {
        var changeSortEvent = new CustomEvent("changePublicWishlistSort",{ detail: value});
        document.dispatchEvent(changeSortEvent);
    }

    settings.onchange('wishlist-public-sort', on_update);
}

// Sets up the wishlist Sync
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

// Adds tags and sorting options to private wishlist
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

// Syncs wishlist data to server
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

// Adds tags and sorting options to public wishlists
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

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

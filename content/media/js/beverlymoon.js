$(document).ready(function(){

	$('.slideshow').cycle({
		fx: 'fade'
	});

    $(".fade-trigger").hover(function () {
        $(this).find("div.fade-hover").fadeTo("fast", .8); // This should set the opacity to 100% on hover
    },function(){
        $(this).find("div.fade-hover").fadeTo("fast", 0); // This should set the opacity to 100% on hover
    });
    
    $(function(){

        var url = $('#logo-link')[0].href + window.location.pathname.slice(1), 
            urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
            // now grab every link from the navigation
            $('.nav-item').each(function(){
                // and test its normalized href against the url pathname regexp
                if (url.search(this.href.replace(/\/$/,'')) != -1) {//( url === this.href ){//
                    $(this).addClass('selected');
                }

            });

    });

});

$(window).load(function() {
    $(".fade-hover").fadeTo("fast", 0);
});

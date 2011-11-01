$('html').addClass('js');
$(document).ready(function(){

	$('.slideshow').cycle({
		fx: 'fade'
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
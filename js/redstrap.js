$(document).ready(function() {

$.tagExternal = (function () {
	$("a[href^='http://']").addClass('external-link');
});


function hideInFullscreen() {
	$('aside').hide();
	$('nav').hide();
	$('section').css('left','10px').css('top','10px');
}

function showInFullscreen() {
        $('aside').show();
        $('nav').show();
        $('section').css('left','250px').css('top','48px');

}

$.showAsRemote = (function () { 
	$('iframe#remote-channel')[0].contentWindow.postMessage('showasremote','*');
});


$.showAsNormal = (function () {
        $('iframe#remote-channel')[0].contentWindow.postMessage('showasnormal','*');
});

$.chanviewFullChrome = (function () {
	if (chanviewFullSize) {
		$.showAsRemote();
		$('#chanviewResizer').toggleClass('icon-resize-full','false').toggleClass('icon-resize-small','true').toggleClass('chanview-resizer-overlay','false');
                $('#chanview-overlay-div').toggleClass('chanview-overlay','false').toggleClass('chanview-overlay-hidden','true');
		chanviewFull();
	} else {
		$.showAsNormal();
                $('#chanviewResizer').toggleClass('icon-resize-full','true').toggleClass('icon-resize-small','false').toggleClass('chanview-resizer-overlay','true');
		$('#chanview-overlay-div').toggleClass('chanview-overlay','true').toggleClass('chanview-overlay-hidden','false');
		
		chanviewFull();
	}
});



$.iframeLoaded = (function () {
	$('div#iframeLoading').css('display','none');
	$('div#iframeHolder').css('display','block');
});

respondToShowRemoteMessage = function(e) {
    if(e.data == 'showasremote') {
	hideInFullscreen();
    }
    if(e.data == 'showasnormal') {
        showInFullscreen();
    }
}



// we have to listen for 'message'
window.addEventListener('message', respondToShowRemoteMessage, false);


});


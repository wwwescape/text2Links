/*

text2Links

*/

(function ($){
	$.fn.text2Links = function(options){
		var settings = $.extend({
			URLTargetBlank: false,
			URLClass: '100%',
			URLExternalIcon: false,
			URLExternalIconType: 'inline',
			URLExternalIconPath: 'external-link.png',
			URLExternalIconPadding: '20',
			URLExternalIconClass: 'external-link' // Should have
		}, options );
		
		var inputText = $(this).html();
		inputText = inputText.replace(/\u200B/g, '');

		// http://, https://, or ftp:// URLs
		var URLReplace = /(src="|href="|">|\s>)?(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
		var URLText = inputText.replace(URLReplace, function($0, $1){ return $1 ? $0 : '<a href="' + $0 + '"' + (settings.URLTarget ? 'target="_blank"' : '') + '>' + $0 + '</a>'; });

		// www URLs
		var URLReplace = /(src="|href="|">|\s>|https?:\/\/|ftp:\/\/)?www\.[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
		var URLText = URLText.replace(URLReplace, function($0, $1){ return $1 ? $0 : '<a href="http://' + $0 + '"' + (settings.URLTarget ? 'target="_blank"' : '') + '>' + $0 + '</a>' ;});

		// Email addresses
		var URLReplace = /([\.\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
		var URLText = URLText.replace(URLReplace, '<a href="mailto:$1">$1</a>');
		
		var URLTest = new RegExp(location.host);
		
		$(this).html(URLText);
		
		if(settings.URLExternalIcon){
			// Will apply to all links on page
			$('a').each(function(){
				if(URLTest.test($(this).attr('href'))){
					// Do nothing
				}else{
					var classOrStyle = '';
					if(settings.URLExternalIconType == 'inline'){
						$(this).css({'background' : 'url(' + settings.URLExternalIconPath + ') no-repeat center right', 'padding-right' : settings.URLExternalIconPadding + 'px'});
					}else{
						$(this).addClass(settings.URLExternalIconPath);
					}
				}
			});
		}
	};
}(jQuery));
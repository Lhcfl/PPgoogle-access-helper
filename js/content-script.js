
var ifrUrl = chrome.extension.getURL('nav.html');
var iframe = $('<iframe src="'+ifrUrl+'" class="eb_tips" style="border: 0px; overflow: visible; padding: 0px; right: auto; z-index: '+(2147483647)+'; top: 0px; left: 0px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 3px 10px; position: fixed; height:200px; width: 100%; display: inline; background: transparent;"></iframe>');

// 从存储中读取数据
	chrome.storage.local.get('closedTips', function(result) {
		 if (result['closedTips']) {

		 } else {
			 $('body').append(iframe);
			 //$('body').attr('style', HTML_OLD_STYLE + '; -webkit-transition: all 0.2s ease-in-out !important; -moz-transition: all 0.2s ease-in-out !important; -o-transition: all 0.2s ease-in-out !important; transition: all 0.2s ease-in-out !important; margin-top: ' + ( '400') + 'px !important;');
			 $('html').css('margin-top','200px');
		 }
	});

	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.what == "closeTips") {
			iframe.remove();
			$('html').css('margin-top','0px');
			chrome.storage.local.set({'closedTips': true}, function() {
				console.log('保存成功');
			});
		}
	});

	
	


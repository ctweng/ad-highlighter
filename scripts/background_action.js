console.log('chrome background action');

chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
	console.log("adhighligher click btn");

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {status: "1"}, function(response) {
	     console.log(response);
	  });
	});
});


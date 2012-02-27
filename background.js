chrome.browserAction.onClicked.addListener(sendToUrl);

chrome.contextMenus.create({
	"title": "Send link to email",
	"onclick": OnContextMenuClick,
	"contexts": ["all"]
});

function OnContextMenuClick(info, tab)
{
	sendToUrl(tab);
}

function sendToUrl(tab)
{
	chrome.tabs.create({
		"url": "mailto:xxxx@xxxx.com?subject="+tab.title+"&body="+tab.url
	});
}

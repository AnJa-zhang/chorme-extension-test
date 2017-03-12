// background.js  
function match(url){  
  var host = "null";  
  if(typeof url == "undefined" || null == url)  
  url = window.location.href;  
  var regex = /.*\:\/\/([^\/]*).*/;  
  var match = url.match(regex);  
  if(typeof match != "undefined" && null != match)  
  host = match[1];  
  return host;  
}  
  
function entry(tabId, changeInfo, tab) {  
  // 在URL是localhost时显示extension图标  
  if(match(tab.url).toLowerCase()=="1111.tmall.com"){  
    chrome.pageAction.show(tabId);  
  }  
};  
  
chrome.tabs.onUpdated.addListener(entry);  

var pageData = {};  
chrome.runtime.onMessage.addListener(function(message, sender, response){  
  if (message.type !== 'localtest-message') return;  
  pageData.links = message.links;  
  //console.log(pageData.links);
}); 


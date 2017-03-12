document.addEventListener('DOMContentLoaded', function () {  
  var data = chrome.extension.getBackgroundPage().pageData;  
  var dom = document.getElementById('result');   
  if(data.links){
    dom.innerHTML += '<br/>' + data.links;
  }
});




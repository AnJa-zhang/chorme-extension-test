window.onload = function() {
	var target = document.getElementsByClassName('opera-st');  
	var n = 0;
	var is_ok = false;
	console.log(target);
  	var get_my_tic = function(){
	    var x = 0;
	    var message = '';
    	var count_timer = setInterval( function() {
	      	x = x + 1;
	      	if(target.length === 0){
	      		var t = new Date();
	      		clearInterval(count_timer);
	      		n = n + 1;
	      		if(x > 1){
	      			message = 'finished' + n +' times running.' + t + '<br/>';
	      		} else{
	      			message = 'failed' + n +' times running.' + t + '<br/>';
	      		}
	      		chrome.runtime.sendMessage({  
				  type: 'localtest-message',  
				  links: message
				});
	      	} else{
	      		console.log(x);
	      		document.getElementsByClassName('opera-st')[0].click();
	      	}
	    }, 5000);
 	}
 	get_my_tic();
  	setInterval(get_my_tic, 18000000); 
}

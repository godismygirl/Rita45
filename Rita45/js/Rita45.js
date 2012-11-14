var sourse = {
	view : document.getElementById('VIEW'),
	frame : document.getElementById('FRAME'),
	layer_bg :document.getElementById('LAYER_BG'),
	layer_act : document.getElementById('LAYER_ACT'),
	layer_menu : document.getElementById('LAYER_MENU')
}

var state = {

}

function crFrame(){
	var view = sourse.view;
	var map = sourse.frame;
	var dtX,dtY;
	function dragOn(event){
		dtX = event.clientX - map.offsetLeft;
		dtY = event.clientY - map.offsetTop;
		view.style.cursor = "move";
		view.addEventListener('mousemove',drag)
	}
	function dragOff(){
		view.style.cursor = "auto";
		view.removeEventListener('mousemove',drag)
	}
	function drag(event){
		//console.log(event.clientX+'/'+map.offsetLeft+'-----'+event.clientY+'/'+map.offsetTop);
		var x = event.clientX - dtX;
		var y = event.clientY - dtY;
		if( map.offsetWidth + x > view.offsetWidth && x < 0 ){
			map.style.left = x + 'px';
		}
		if(map.offsetHeight + y > view.offsetHeight && y < 0){
			map.style.top = y + 'px';
		}
	}
	document.addEventListener('mousedown',dragOn);
	document.addEventListener('mouseup',dragOff);
	document.onselectstart = function(){return false};
}

crFrame();

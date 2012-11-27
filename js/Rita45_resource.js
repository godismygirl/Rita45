var sourse = {
	view : document.getElementById('VIEW'),
	frame : document.getElementById('FRAME'),
	layer_bg :document.getElementById('LAYER_BG'),
	layer_act : document.getElementById('LAYER_ACT'),
	layer_menu : document.getElementById('LAYER_MENU')
}

var state = {

}

var weapon = {
	WE001 : {
		name : 'Iron Sword',
		legend : 'Common sword made by iron',
		tip : '+15 ATK',
		attack : 15,
	}
};

var armor = {
	AR001 : {
		name : 'Iron Armor',
		legend : 'Common armor made by iron',
		tip : '+8 DEF',
		defense : 8,
	}
}

var shield = {
	SH001 : {
		name : 'Iron shield',
		legend : 'Common shield made by iron',
		tip : '+5 DEF',
		defense : 5,
	}
}

var accessory = {
	AC001 : {
		name : 'Swift Necklace',
		legend : 'A gift necklace from wind fairy',
		tip : '+2 SPD -2 DEF',
		effect : {
			speed : +2,
			defense : -2
		}
	},
	AC002 : {
		name : 'Swift Earring',
		legend : 'A gift earring from wind fairy',
		tip : '+3 SPD -3 DEF',
		effect : {
			speed : +3,
			defense : -3
		}
	}
}

var item = {
	IT001 : {
		name : "Angel's Tear",
		legend : 'The essence of angel tear',
		tip : '+50 HP in use',
		effect : function(){

		}
	},
	IT002 : {
		name : "Phoenix Tail",
		legend : 'The essence of angel tear',
		tip : 'Revive target in use',
		effect : function(){

		}
	}
}

var skills = {
	SK001 : {
		name : 'Fast Aid',
		legend : 'Hemostatic skill probably learned in army',
		tip : '+10 HP and recover from all bad effects',
		effect : function(){

		}
	},
	SK002 : {
		name : 'Charge',
		legend : 'deal great damage however cannot act this round',
		tip : 'charge for 1 round to deal 200% damage in 2nd round',
		effect : function(){

		}
	}
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
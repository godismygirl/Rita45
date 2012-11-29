var sourse = {
	view : document.getElementById('VIEW'),
	frame : document.getElementById('FRAME'),
	layer_bg :document.getElementById('LAYER_BG'),
	layer_act : document.getElementById('LAYER_ACT'),
	layer_menu : document.getElementById('LAYER_MENU')
}

var DATA = {};

var party = {
	S01 : {
		race : 'aivera',
		job : 'unique',
		name : 'Shara',
		level : 4,
		EXP:80,
		ATK : 21,
		DEF : 6,
		MATK : 18,
		MDEF :7,
		equip_01 : 'WE001',
		equip_02 : 'AR001',
		equip_03 : 'SH001',
		equip_04 : 'AC002',
		equip_05 : 'AC001',
		item : ['IT001','IT002'],
		skill : ['SK001','SK002']
	},

	N02 : {
		race : 'aivera',
		job : 'sniper',
		name : 'JK Rose',
		level : 5,
		EXP:22,
		ATK : 20,
		DEF : 8,
		MATK : 12,
		MDEF :6,
		equip_01 : 'WE001',
		equip_02 : 'AR001',
		equip_03 : 'SH001',
		equip_04 : 'AC002',
		equip_05 : 'AC001',
		item : ['IT001','IT002'],
		skill : ['SK001','SK002']
	}	
}

var store = {
	weapon : {
		WE001 : 2,
		WE002 : 1
	},
	armor : {
		AR001 : 1,
		AR002 : 1
	},
	shield : {
		SH001 : 1,
		SH002 : 1
	},
	accessory : {
		AC001 : 1,
		AC002 : 2
	}
}

DATA.weapon = {
	WE001 : {
		name : 'Iron Sword',
		legend : 'Common sword made by iron',
		tip : '+15 ATK',
		effect : function(){
			
		}
	},
	WE002 : {
		name : 'Steel Sword',
		legend : 'Sharp sword made by steel',
		tip : '+18 ATK',
		effect : function(){
			
		}
	},
}

DATA.armor = {
	AR001 : {
		name : 'Iron Armor',
		legend : 'Common armor made by iron',
		tip : '+8 DEF',
		effect : function(){
			
		}
	},
	AR002 : {
		name : 'Steel Armor',
		legend : 'Good armor made by iron',
		tip : '+10 DEF',
		effect : function(){
			
		}
	}
}

DATA.shield = {
	SH001 : {
		name : 'Iron shield',
		legend : 'Common shield made by iron',
		tip : '+5 DEF',
		effect : function(){
			
		}
	},
	SH002 : {
		name : 'Hero shield',
		legend : 'Shield belongs to an ancient hero',
		tip : '+10 DEF',
		effect : function(){
			
		}
	}
}

DATA.accessory = {
	AC001 : {
		name : 'Swift Necklace',
		legend : 'A gift necklace from wind fairy',
		tip : '+2 SPD -2 DEF',
		effect : function(){

		}
	},
	AC002 : {
		name : 'Swift Earring',
		legend : 'A gift earring from wind fairy',
		tip : '+3 SPD -3 DEF',
		effect : function(){
			
		}
	}
}

DATA.item = {
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

DATA.skills = {
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

DATA.action = {
	
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
var DATA = {};

var party = {
	N01 : {
		action_ID : 'C001',
		race : 'Human',
		job : 'Fighter',
		name : 'Marche',
		level : 3,
		EXP:45,
		ATK : 12,
		DEF : 6,
		MATK : 5,
		MDEF :2,
		JAMP : 3,
		MOVE : 5,
		equip_01 : 'WE001',
		equip_02 : 'AR001',
		equip_03 : 'SH001',
		equip_04 : 'HE001',
		equip_05 : 'AC001',
		item : ['IT001','IT002'],
		skill : ['SK001','SK002']
	},

	N02 : {
		action_ID : 'C002',
		race : 'Human',
		job : 'Black Mage',
		name : 'JK.Love',
		level : 4,
		EXP:80,
		ATK : 8,
		DEF : 4,
		MATK : 18,
		MDEF :8,
		JAMP : 2,
		MOVE : 4,
		equip_01 : 'WE001',
		equip_02 : 'AR001',
		equip_03 : 'SH001',
		equip_04 : 'AC002',
		equip_05 : 'AC001',
		item : ['IT001','IT002'],
		skill : ['SK001','SK002']
	},

	N03 : {
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

DATA.html = {
	view : document.getElementById('VIEW'),
	frame : document.getElementById('FRAME'),
	layer_bg :document.getElementById('LAYER_BG'),
	layer_act : document.getElementById('LAYER_ACT'),
	layer_menu : document.getElementById('LAYER_MENU')
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

DATA.helm = {
	HE001 : {
		name : 'Iron Helm',
		legend : 'Common helm made by iron',
		tip : '+3 DEF',
		effect : function(){
			
		}
	},
	HE002 : {
		name : 'Brone Helm',
		legend : 'Careful made helm provide better protect',
		tip : '+6 DEF',
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
	//citizen
	C001 : {
		src : 'url(images/Marche.png)',
		charOffset : {
			left : 18,
			top : -55
		},
		getInstance : function(face){
			var div = document.createElement('div');
			div.style.id = 'C001';
			div.style.width = 32 + 'px';
			div.style.height = 62 + 'px';
			div.style.backgroundImage = DATA.action.C001.src;
			
			switch (face){
				case 'up' : 
					div.style.backgroundPosition = '-142px -360px'
					break
				case 'down' : 
					div.style.backgroundPosition = '-142px -66px'
					break 
				case 'left' : 
					div.style.backgroundPosition = '-142px -152px'
					break
				case 'right' : 
					div.style.backgroundPosition = '-142px -256px'
					break
				default : 
			}

			return div; 
		},
		getAvatar : function(){
			var div = document.createElement('div');
			div.style.width = 94 + 'px';
			div.style.height = 128 + 'px';
			div.style.backgroundImage = DATA.action.C001.src;
			div.style.backgroundPosition = '-4px -428px';
			return div;
		},
		setStatus : function(status){
			switch (status){
				case 'hit' :
					break
				case 'hurt' : 
					break
				case 'die' :
					break
			}
		}, 
		walk : function(face){

		},
		jump : function(face){

		}


	},
	C002 : {
		src : 'url(images/BlackMage.png)',
		charOffset : {
			left : 0,
			top : -48
		},
		getInstance : function(face){
			var div = document.createElement('div');
			div.style.id = 'C002';
			div.style.width = 32 + 'px';
			div.style.height = 60 + 'px';
			div.style.backgroundImage = DATA.action.C002.src;
			
			switch (face){
				case 'up' : 
					div.style.backgroundPosition = '-44px -366px'
					break
				case 'down' : 
					div.style.backgroundPosition = '-44px -68px'
					break 
				case 'left' : 
					div.style.backgroundPosition = '-44px -154px'
					break
				case 'right' : 
					div.style.backgroundPosition = '-44px -258px'
					break
				default : 
			}

			return div; 
		},
		getAvatar : function(sFace){
			var div = document.createElement('div');
			div.style.width = 126 + 'px';
			div.style.height = 176 + 'px';
			div.style.backgroundImage = DATA.action.C002.src;
			div.style.backgroundPosition = '-6px -430px';
			return div;
		}

	},
	//moster
	M001 : {
		src : 'url(images/Malboro.png)',
		getAvatar : function(){
			var div = document.createElement('div');
			div.style.width = 118 + 'px';
			div.style.height = 162 + 'px';
			div.style.backgroundImage = DATA.action.M01.src;
			div.style.backgroundPosition = '0px -132px';
			return div;
		}

	}
}

function crFrame(){
	var view = DATA.html.view;
	var map = DATA.html.frame;
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
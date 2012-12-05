function loadChar(sMapID){
	var char = chars[sMapID];
	var grid = document.getElementById('ACTION_GRID');	
	var ally = {
		setPosition : function(){
			var actionId,position,instance;
			for(var i=0, l=char.ally.length; i<l; i++ ){
				actionId = party[char.ally[i].partyId].action_ID;
				position = char.ally[i].position;
				instance = DATA.action[actionId].getInstance(char.ally[i].face);
				DATA.html.layer_act.appendChild(instance);

				position = maps[sMapID].getPosition(position);
				instance.style.left = position.left + 'px';
				instance.style.top = position.top + 'px';
			}

		},
		setAttr : function(){

		},
		setAction : function(){

		},
		init : function(){
			ally.setPosition();
			ally.setAttr();
			ally.setAction();
		}
	};

	var enemy = {
		
	};

	function init(){
		ally.init();
	}

	init();
}

var chars = {
	SienaGorge : {
		ally : [
			{
				partyId : 'N01',
				face : 'up',
				position : [0,2]
			},
			{
				partyId : 'N01',
				face : 'up',
				position : [0,3]
			},
			{
				partyId : 'N01',
				face : 'up',
				position : [0,4]
			},
			{
				partyId : 'N01',
				face : 'up',
				position : [1,3]
			},
			{
				partyId : 'N01',
				face : 'up',
				position : [1,4]
			},

			{
				partyId : 'N02',
			 	face : 'up',
				position : [2,3]
			},
			{
				partyId : 'N02',
			 	face : 'up',
				position : [3,3]
			},
			{
				partyId : 'N02',
			 	face : 'up',
				position : [3,4]
			},

			{
				partyId : 'N02',
			 	face : 'up',
				position : [3,5]
			},
			{
				partyId : 'N02',
			 	face : 'up',
				position : [3,6]
			}
			
		],

		npc : [],

		enemy : [
			{
				race : 'malboro',
				job : 'monster',
				name : 'Tata',
				position : [2,4],
				level : 5,
				skill : ['SK001','SK002']
			},

			{
				race : 'malboro',
				job : 'monster',
				name : 'Tata',
				position : [1,4],
				level : 5,
				skill : ['SK001','SK002']
			},

			{
				race : 'malboro',
				job : 'monster',
				name : 'Tata',
				position : [0,6],
				level : 8,
				skill : ['SK001','SK002']
			}
		]
	}
}
var sniper = {
	src : 'url(images/sniper.png)',
}


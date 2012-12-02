function loadChar(sMapID){
	var char = chars[sMapID];	
	var ally = {
		setPosition : function(){
			var actionId,position,instance;
			for(var i=0, l=char.ally.length; i<l; i++ ){
				actionId = party[char.ally[i].partyId].action_ID;
				position = char.ally[i].position;
				instance = DATA.action[actionId].getInstance(char.ally[i].face);

				instance.style.left = 50 + 'px';
				instance.style.top = 50 + 'px';
				DATA.html.layer_act.appendChild(instance);

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
				position : [13,4]
			},

			{
				partyId : 'N02',
			 	face : 'up',
				position : [12,5]
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


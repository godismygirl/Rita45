function loadChar(sMapID){
	var char = chars[sMapID];	
	var ally = {
		setPosition : function(){

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
				id : 'S01',
				position : [13,4]
			},

			{
				id : 'N02',
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


function crMap(oMap){
	var map = oMap;
	var defaults = {
		width : sourse.view.clientWidth,
		height : sourse.view.clientHeight,
		SRC : 'url(images/error.png)'
	}

	sourse.frame.style.width = map.WIDTH + 'px' || defaults.width + 'px';
	sourse.frame.style.height = map.HEIGHT + 'px' || defaults.height + 'px';

	function crLayerAct(){

		var actGrid = document.createElement('table');
		var td = document.createElement('td');
		var tr = document.createElement('tr');
		for(var i = 0,len = map.TD_SIZE; i < len; i++){
			tr.appendChild(td.cloneNode(true));
		}
		for(var i = 0,len = map.TR_SIZE; i < len; i++){
			actGrid.appendChild(tr.cloneNode(true));
		}
		sourse.layer_act.appendChild(actGrid)

		sourse.layer_act.style.left = SienaGorge.LEFT + 'px';
		sourse.layer_act.style.top = SienaGorge.TOP + 'px';
	}

	function init(){
		sourse.layer_bg.style.width = map.WIDTH + 'px' || defaults.width + 'px';
		sourse.layer_bg.style.height = map.HEIGHT + 'px' || defaults.height + 'px';
		sourse.layer_bg.style.backgroundImage = map.SRC || defaults.SRC;
		crLayerAct();
	}

	init();
}
var SienaGorge = {
	WIDTH : 1000,
	HEIGHT : 800,
	SRC : 'url(images/SienaGorge.png)',
	TD_SIZE : 11,
	TR_SIZE : 15,
	LEFT:312,
	TOP:352,
	BLOCK : [0,1,9,10, 11,12, 22, 36,40, 41,50, 51,52,60, 61,62, 75, 91, 101,107,108,109,110, 111,112,113,117,118,119,120, 121,122,123,128,129,130, 131,132,133,137,138,139,140, 141,142,143,144,145,148,149,150],
	ELEVATION_01 : [],
	ELEVATION_02 : [],
	ELEVATION_03 : [],
	ELEVATION_04 : [],
	ELEVATION_05 : [],
	ELEVATION_06 : [],
	ELEVATION_07 : [],
	ELEVATION_08 : [],
	ELEVATION_09 : [],
	ELEVATION_10 : [],
	ELEVATION_11 : [],
	ELEVATION_12 : [],
	ELEVATION_13 : []
}; 

crMap(SienaGorge);
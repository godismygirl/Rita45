function crMap(oMap){
	var map = oMap;
	var grid;
	var defaults = {
		width : sourse.view.clientWidth,
		height : sourse.view.clientHeight,
		SRC : 'url(images/error.png)'
	}

	sourse.frame.style.width = map.WIDTH + 'px' || defaults.width + 'px';
	sourse.frame.style.height = map.HEIGHT + 'px' || defaults.height + 'px';

	function crLayerAct(){
		grid = document.createElement('table');
		var td = document.createElement('td');
		var tr = document.createElement('tr');
		for(var i = 0,len = map.TD_SIZE; i < len; i++){
			tr.appendChild(td.cloneNode(true));
		}
		for(var i = 0,len = map.TR_SIZE; i < len; i++){
			grid.appendChild(tr.cloneNode(true));
		}
		sourse.layer_act.appendChild(grid)
		sourse.layer_act.style.left = SienaGorge.LEFT + 'px';
		sourse.layer_act.style.top = SienaGorge.TOP + 'px';
	}

	function setBlock(){
		var arr = map.BLOCK;
		for(var i = 0, len = arr.length; i<len; i++){
			var blockCell =  grid.rows[arr[i][0]].cells[arr[i][1]];
			addClass(blockCell,'BLOCK');
		}
	}

	function setElevation(){
		for( var level in map.ELEVATION ){
			var arr = map.ELEVATION[level];
			for(var i = 0, len = arr.length; i<len; i++){
				//console.log(i+'/'+arr[i][0]+'/'+arr[i][1])
				var lvlCell =  grid.rows[arr[i][0]].cells[arr[i][1]];
				addClass(lvlCell,level);
			}
		}
	}

	function init(){
		sourse.layer_bg.style.width = map.WIDTH + 'px' || defaults.width + 'px';
		sourse.layer_bg.style.height = map.HEIGHT + 'px' || defaults.height + 'px';
		sourse.layer_bg.style.backgroundImage = map.SRC || defaults.SRC;
		crLayerAct();
		setBlock();
		setElevation();
	}

	init();
}
var SienaGorge = {
	WIDTH : 1000,
	HEIGHT : 800,
	SRC : 'url(images/SienaGorge.png)',
	TD_SIZE : 11,
	TR_SIZE : 15,
	LEFT:318,
	TOP:364,
	BLOCK : [ [0,0],[0,1],[0,9],[0,10],[1,0],[1,1],[2,1],[3,6],[3,10],[4,0],[4,10],[5,0],[5,1],[5,10],[6,0],[6,1],[7,4],[9,0],[10,0],[10,1],[10,7],[10,8],[10,9],[10,10],[11,0],[11,1],[11,2],[11,7],[11,8],[11,9],[11,10],[12,0], [12,1],[12,2],[12,8],[12,9],[12,10],[13,0],[13,1],[13,2],[13,7],[13,8],[13,9],[13,10],[14,0],[14,1],[14,2],[14,3],[14,4],[14,8],[14,9],[14,10] ],
	ELEVATION : {
		ELEVATION_1 : [ [10,1],[10,2],[10,6] ],
		ELEVATION_2 : [ [9,2],[9,3],[9,5],[9,6],[9,7] ]
	}
}; 

crMap(SienaGorge);
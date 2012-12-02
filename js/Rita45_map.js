function loadMap(sMapID){
	var map = maps[sMapID];
	var grid;
	var defaults = {
		width : DATA.html.view.clientWidth,
		height : DATA.html.view.clientHeight,
		SRC : 'url(images/error.png)'
	}

	DATA.html.frame.style.width = map.WIDTH + 'px' || defaults.width + 'px';
	DATA.html.frame.style.height = map.HEIGHT + 'px' || defaults.height + 'px';

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
		DATA.html.layer_act.appendChild(grid)
		DATA.html.layer_act.style.left = map.LEFT + 'px';
		DATA.html.layer_act.style.top = map.TOP + 'px';
	}

	function setBlock(){
		var arr = map.BLOCK;
		for(var i = 0, l = arr.length; i<l; i++){
			var blockCell =  grid.rows[arr[i][0]].cells[arr[i][1]];
			addClass(blockCell,'BLOCK');
		}
	}

	function setElevation(){
		for( var level in map.ELEVATION ){
			var arr = map.ELEVATION[level];
			for(var i = 0, l = arr.length; i<l; i++){
				//console.log(i+'/'+arr[i][0]+'/'+arr[i][1])
				var lvlCell =  grid.rows[arr[i][0]].cells[arr[i][1]];
				addClass(lvlCell,level);
			}
		}
	}

	function init(){
		DATA.html.layer_bg.style.width = map.WIDTH + 'px' || defaults.width + 'px';
		DATA.html.layer_bg.style.height = map.HEIGHT + 'px' || defaults.height + 'px';
		DATA.html.layer_bg.style.backgroundImage = map.SRC || defaults.SRC;
		crLayerAct();
		setBlock();
		setElevation();
	}

	init();
}
var maps = {
	SienaGorge : {
		WIDTH : 1000,
		HEIGHT : 800,
		SRC : 'url(images/SienaGorge.png)',
		TD_SIZE : 11,
		TR_SIZE : 15,
		LEFT:318,
		TOP:364,
		BLOCK : [ [0,0],[0,1],[0,9],[0,10],[1,0],[1,1],[2,1],[3,6],[3,10],[4,0],[4,10],[5,0],[5,1],[5,10],[6,0],[6,1],[7,4],[9,0],[10,0],[10,7],[10,8],[10,9],[10,10],[11,0],[11,1],[11,2],[11,7],[11,8],[11,9],[11,10],[12,0], [12,1],[12,2],[12,8],[12,9],[12,10],[13,0],[13,1],[13,2],[13,7],[13,8],[13,9],[13,10],[14,0],[14,1],[14,2],[14,3],[14,4],[14,8],[14,9],[14,10] ],
		ELEVATION : {
			ELEVATION_1 : [ [10,1],[10,2],[10,6] ],
			ELEVATION_2 : [ [9,2],[9,3],[9,5],[9,6],[9,7],[10,7],[11,7] ],
			ELEVATION_3 : [ [7,0],[8,0],[8,1],[8,2],[8,3],[8,5],[8,6],[8,7],[9,1] ],
			ELEVATION_4 : [ [6,2],[7,1],[7,2],[7,3],[7,5],[7,6],[9,4] ],
			ELEVATION_5 : [ [5,4],[5,5],[5,6],[6,3],[6,4],[6,5],[6,6],[6,7],[7,4],[7,7],[7,8],[8,4],[8,8],[9,8],[9,9] ],
			ELEVATION_6 : [ [4,1],[5,3],[5,2],[5,7],[6,8],[8,9],[8,10],[9,10] ],
			ELEVATION_7 : [ [2,0],[2,1],[3,0],[3,1],[3,4],[3,5],[3,6],[4,2],[4,4],[4,5],[4,6],[4,7],[5,8],[5,9],[6,9],[7,9] ],
			ELEVATION_8 : [ [4,3],[4,8],[4,9],[7,10] ],
			ELEVATION_9 : [ [3,2],[3,7],[3,8],[3,9],[3,10],[4,10],[5,10],[6,10] ],
			ELEVATION_10 : [ [2,6],[2,7],[2,8],[3,3] ],
			ELEVATION_11 : [ [0,6],[0,7],[1,6],[1,7],[1,8],[1,9],[1,10],[2,2],[2,3],[2,4],[2,5],[2,9],[2,10] ],
			ELEVATION_12 : [ [0,8],[0,9],[0,10],[1,2],[1,3] ],
			ELEVATION_13 : [ [0,2],[0,3],[0,4],[0,5],[1,4],[1,5] ]
		}
	}
}
 

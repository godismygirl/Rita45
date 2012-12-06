function hasClass(el, name) {
   return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}

function addClass(el, name){
   if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
}

function removeClass(el, name){
   if (hasClass(el, name)) {
      el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
   }
}

function setData(obj,key,value){
	if(!obj.data){
		//alert('in')
		obj.data = {};
	}
	obj.data[key] = value;
}

function getData(obj,key){
	var result = false;
	if(obj.data){
		for(var prop in obj.data){
			if(prop === key){
				return obj.data[key];
			}
		}
	}
	return result;
}



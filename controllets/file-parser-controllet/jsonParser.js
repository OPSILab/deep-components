function jsonParser () {}

jsonParser.prototype.parse = function(json) {

	var obj="";
	if(json instanceof Object)
		obj=json;
	else{
		try{
			obj=JSON.parse(json);
		}catch(err){
			console.log(err);
			return '';
		}
	}
	return obj;
};
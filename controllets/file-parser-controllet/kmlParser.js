function kmlParser () {}

kmlParser.prototype.parse = function(kml) {
	var result="";
	try {
		result = toGeoJSON.kml(kml);
	}catch(err){
		console.log(err);
		result="";
	}
	return result;
};
function generic_Provider () {}
var isGEOJSON = false;
generic_Provider.prototype.selectData = function(data) {
    if(data instanceof Array)
        return data;
    if(_isGEOJSON(data))
	{
		isGEOJSON=true;
		//return [{"GEOJSON" : data}];
		return data.features;
	}
    if(data instanceof Object)
       return [{"JSON" : data}];
	
};

generic_Provider.prototype.addLimit = function(url) {
    return url;
};

generic_Provider.prototype.isGEOJSON = function() {
    return isGEOJSON;
};

function _isGEOJSON (data) {
    var dt = new DataTypeConverter();
    return (dt.inferDataSubTypeOfValue(data) && dt.inferDataSubTypeOfValue(data).name == DataTypeConverter.SUBTYPES.GEOJSON.name);
};
class JSONaccepter{
    constructor(index, parkid){
        this._index = index;
        this._parkid = parkid;
    }
    executeProgram(){
        var json = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': my_url,
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })(); 
    }
    
}

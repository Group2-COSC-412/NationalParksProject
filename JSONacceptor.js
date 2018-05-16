class JSONaccepter{
    constructor(index, parkid){
        this._index = index;
        this._parkid = parkid;
    }
    //Index will be hard-coded based on page user is on.
    //Size is user-defined by input from front-end
    //Parkid is pulled from HTML of park page.
    //GET request to get the JSON file.
    //POST request is to post to the database via same url. 
    captureReviewData(){
        var json = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "https://national-parks.fcgit.net/api/es?index=review&size=10&parkid=1",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })(); 
    }
}

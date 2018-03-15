var http = require('http');
exports.find = function(req, url, success){
    //var url = '/project_mgmt/content/get_content_list?projectId=1'
    var options = {
        host: 'www.interestm.com',
        port: 8090,
        path: url,
        method: 'GET'  
    };
    req = http.request(options, function(res) {
        res.setEncoding('utf8');
        var str=''; 

        res.on('data', function (data) {
            str += data;
        });
        res.on('end', function(){
            //console.log('~~~~~~~~~~>> >>')
            //console.log(str)
            success(JSON.parse(str));
        })
          
 
    });
    req.on('error', function(e){
       console.log("auth_user error: " + e.message);
    });  
    req.end();
}

let mysql=require('./model/mysql');
// let vueResource=require("vue-resource");

exports.getGoodsList=function (req,res) {

    mysql.getGoodsList(function (list) {
        let json = {list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
        // console.log(json);
    });
};

exports.getShoppingCartList=function (req,res) {

    mysql.getShoppingCartList(function (list) {
        let json = {list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
        // console.log(json);
    });
};

exports.getDetails=function(req,res){
    mysql.getDetails(function(list){
        let json ={list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
    })
}
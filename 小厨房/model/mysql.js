//加载数据库模块
let mysql =require('mysql');
// let md5 = require("md5"); //加载md5的加密模块
//创建与数据库的连接
let connection =  mysql.createConnection({
    //数据库的设置
    host:"localhost", // 服务器地址
    user:"root",    // 用户名
    password:"root",  // 密码
    port:"3306",    // 数据库端口
    database:"kitchens"     // 需要连接的数据名
});
// 进行连接
connection.connect(function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(' 数据库连接成功!');
});
// 注册页面  添加数据
exports.getregister = function(data,fun){
    let sql = 'insert into kit_user (user_phone , user_name , user_password , user_email) values (?,?,md5("?"),?)';
    let thisgetregister = [data.userpho,data.username,parseInt(data.userpow),data.useremail];
    console.log(data.userpow);
    connection.query(sql,thisgetregister,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        fun(result);
    })
};

// 查询用户表的手机号码和密码
exports.getUser = function(pho, pow, fun){
    console.log(pho,pow);
  let sql = 'select * from kit_user where user_phone="'+pho+'" and user_password="'+pow+'"';
  console.log(sql);
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
};
exports.getGoodsList = function(fun){
    let sql = 'select * from commodity';
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        fun(result);  // 使用回调函数把结果通过参数的方法传出去
        // console.log(result);
    });
};

exports.getShoppingCartList=function (fun) {
    let sql = 'select * from goods_cart';
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        fun(result);  // 使用回调函数把结果通过参数的方法传出去
        // console.log('goods_cart:',result);
    });
};

exports.addShoppingCart=function (data,fun) {
    // let sql = 'insert into `article` ( title, content, c_time) values ("'+data.title+'", "'+data.content+'", "'+data.c_time+'")';
    let sql = 'insert into `goods_cart` ( com_name, com_price, com_img , com_number) values (?, ?, ?, ?)';
    // 设置SQL命令中的数据
    // for(let i=0;i<data.length;i++){
    //     console.log('database:',data);
    // }
    console.log(data);
    let params = [data.com_name, data.com_price, data.com_img, data.com_number];
    // console.log('params:',params);
    connection.query(sql, params, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        //console.log('INSERT ID:',result.insertId);
        fun(result);
    });
};

//拿到分类详情页面的数据循环
exports.getDetails = function(fun){
    let sql = 'SELECT food_works.food_img, food_works.food_name, food_works.food_score, food_works.food_peopel, kit_user.user_name, kit_user.user_img FROM `food_works`, `kit_user` WHERE food_works.works_tel = kit_user.user_phone';
    connection.query(sql,function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        fun(result);
    });
}

//查询
exports.searchArticle = function(data, fun) {
    // console.log(data);
    // SELECT * FROM `food_works`, `kit_user` WHERE food_works.works_tel = kit_user.user_phone and food_works.food_name like "%鸡蛋%"
    // let sql = 'select * from `article` where  concat(Telephone , UserName , Wechat ,Email)  like "%'+data.search+'%" and status=1';
    let sql = 'SELECT * FROM `food_works`, `kit_user` WHERE food_works.works_tel = kit_user.user_phone and food_works.food_name like "%' + data.search + '%"';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        fun(result);
    });
}





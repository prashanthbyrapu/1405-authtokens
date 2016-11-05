'use strict';
var jwt = require('jsonwebtoken');
var conf = require('./conf/conf.js');

   





module.exports = { 
    
    generateToken:function(data){
    var token = jwt.sign(data, conf.supersecret, {
          
        });
    return token;
},
    
   validateToken:function(token, callback){
    jwt.verify(token, conf.supersecret, callback);
    
}}


'use strict';
var jwt = require('jsonwebtoken');


   





module.exports = { 
    
    generateToken:function(data){
    var token = jwt.sign(data, 'supersecrettext', {
          
        });
    return token;
},
    
   validateToken:function(token, callback){
    jwt.verify(token, 'supersecrettext', callback);
    
}}


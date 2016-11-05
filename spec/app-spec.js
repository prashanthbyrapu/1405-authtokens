var jwt = require(".././lib/app.js");

describe("Json web token", function () {
  it("Should decode and encode..", function (done) {
    var token = jwt.generateToken({"userId":"prashanth"});
    var result = jwt.validateToken(token,function(err, data){
        expect(data.userId).toBe("prashanth");
        console.log(data);
        done();
    });
    
  });
});
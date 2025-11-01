import LoginAction = require("../login/loginAction");


describe ('test login action',()=>{
    cont login = new LoginAction;

    it('validate login with credentials',()=>{
        LoginAction.navigattologin();
        LoginAction.loginAs('13321121212','ssddssdadsdsa');
    })
})
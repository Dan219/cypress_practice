import BasePag = require("../../../support/BasePag");

export class LoginPage extends BasePag.BasePage{
    private readonly emailInput = "#username";
    private readonly paswordInput ="#password";
    private readonly buttonSummit = "#loginbtn";

    //fillEmail(emai: string){
    //    this.fillEmail()
    //}
    setemail(email : string){
        this.type(this.emailInput, email);
    }
    setPassword(password : string){
        this.type(this.paswordInput, password);
    }

    clicklogi(){
        clicklogi(){ this.log }
    }
}
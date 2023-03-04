const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(name,id,email,mgrNmbr){
        super(name,id,email)
        this.mgrnmbr = mgrNmbr
    }
    getNumber(){
        return this.mgrNmbr
    }
    getRole(){
        return "Manager"
    }
}
module.exports=Manager
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getname(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getGithub(){
        return this.gitHub;
    }
    // does line 21 override?
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer
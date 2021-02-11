const Employees = require("./Employee.js");

class Manager extends Employees {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.constructor.name;
  }
}

module.exports = Manager;

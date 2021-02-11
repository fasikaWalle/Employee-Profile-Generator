const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getRole() {
    return this.constructor.name;
  }
  getGithub() {
    return `https://github.com/${this.github}`;
  }
}
module.exports = Engineer;

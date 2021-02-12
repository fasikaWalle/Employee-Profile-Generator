const inquirer = require("inquirer");
const validator = require("email-validator");
const colors = require("colors");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const pageTemplate = require("../src/PageTemplate");

class UserData {
  constructor() {
    this.manager;
    this.intern;
    this.engineer;
    this.employee = [];
  }
  getUserData() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
          validate: function (input) {
            var valid = !isNaN(parseFloat(input));
            return valid || "please insert a valid id";
          },
        },
        {
          type: "input",
          name: "name",
          message: "What is the team manager's name?",
          validate: function (input) {
            if (input) {
              return true;
            } else {
              console.log("\nYou need to provide a valid name".red);
              return false;
            }
          },
        },

        {
          type: "input",
          name: "email",
          message: "What is the team manager's email address?",
          validate: function (email) {
            if (validator.validate(email)) {
              return validator.validate(email);
            } else {
              console.log("\nplease provide a valid email address".red);
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
          validate: function (input) {
            var valid = !isNaN(parseFloat(input));
            return valid || "please insert a valid office number".red;
          },
        },
      ])
      .then(({ id, name, email, officeNumber }) => {
        this.manager = new Manager(id, name, email, officeNumber);
        this.employee.push(this.manager);
        this.teamMember();
      })
      .catch((error) => {
        throw error;
      });
  }
  teamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "type",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "i don't want to add any more team members",
          ],
        },
      ])
      .then(({ type }) => {
        this.checkType(type);
      })
      .catch((error) => {
        throw error;
      });
  }
  checkType(type) {
    if (type === "Engineer") {
      this.getEngineerData(type);
    } else if (type === "Intern") {
      this.getInternData(type);
    } else {
      pageTemplate(this.employee);
    }
  }
  getEngineerData() {
    console.log("==========================================");
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the team engineer's id?",
          validate: function (input) {
            var valid = !isNaN(parseFloat(input));
            return valid || "please insert a valid id".red;
          },
        },
        {
          type: "input",
          name: "name",
          message: "What is the team engineer's name?",
          validate: function (input) {
            if (input) {
              return true;
            } else {
              console.log("\nYou need to provide a valid name".red);
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team engineer's email address?",
          validate: function (email) {
            if (validator.validate(email)) {
              return validator.validate(email);
            } else {
              console.log("\nplease provide a valid email address".red);
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the team engineer's github user name?",
          validate: function (input) {
            if (input) {
              return true;
            } else {
              console.log("\nYou need to provide a github user name".red);
              return false;
            }
          },
        },
      ])
      .then(({ id, name, email, github }) => {
        this.engineer = new Engineer(id, name, email, github);
        this.employee.push(this.engineer);
        this.teamMember();
      })
      .catch((error) => {
        throw error;
      });
  }
  getInternData() {
    console.log("==========================================");
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the team intern's id?",
          validate: function (input) {
            var valid = !isNaN(parseFloat(input));
            return valid || "please insert a valid id".red;
          },
        },
        {
          type: "input",
          name: "name",
          message: "What is the team intern's name?",
          validate: function (input) {
            if (input) {
              return true;
            } else {
              console.log("\nYou need to provide a valid name".red);
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?",
          validate: function (email) {
            if (validator.validate(email)) {
              return validator.validate(email);
            } else {
              console.log("\nplease provide a valid email address".red);
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      .then(({ id, name, email, school }) => {
        this.intern = new Intern(id, name, email, school);
        this.employee.push(this.intern);
        this.teamMember();
      })
      .catch((error) => {
        throw error;
      });
  }
}

module.exports = UserData;

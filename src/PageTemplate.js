const fs = require("fs");
var pageTemplate= (employee) => {
  var htmlData = "";
  employee.forEach((element) => {
    if (element.getRole() === "Manager") {
      htmlData += managerData(element);
    } else if (element.getRole() === "Intern") {
      htmlData += internData(element);
    } else if (element.getRole() === "Engineer") {
      htmlData += engineerData(element);
    }
  });
  if (htmlData) {
    const data = templateData(htmlData);
    genrateTeamProfile(data);
  }
};

function managerData(element) {
  return `
  <div class="col">
  <div class="card h-100">
    <div class="card-body">
      <div class="employee-header text-white">
      <h4 class="card-title">${element.getName()}</h4>
    <h5 class="card-text"><i class="fas fa-mug-hot"></i> ${element.getRole()}</h5>
  </div>
    <div class="bg-light bg-gradient">
      <ul id= "employee-info">
        <li>ID:<span>${element.getId()}</span></li>
        <li>Email:<span><a href="mailto:${element.getEmail()}"> ${element.getEmail()}</a></span></li>
        <li>Office number:<span>${element.officeNumber}</span></li>
      </ul>
    </div>
    </div>
  </div>
</div>`;
}

function engineerData(element) {
  return `
  <div class="col">
<div class="card h-100">
  <div class="card-body">
    <div class="employee-header text-white">
    <h4 class="card-title"> ${element.getName()}</h4>
  <h5 class="card-text"><i class="fas fa-glasses"></i> ${element.getRole()}</h5>
</div>
  <div class="bg-light bg-gradient">
    <ul id="employee-info">
      <li>ID:<span>${element.getId()}</span></li>
      <li>Email:<span><a href="mailto: ${element.getEmail()}"> ${element.getEmail()}</a></span></li>
       <li>GitHub:<span><a href="https://github.com/${element.github}/" target="_blank">${element.github}</a></span></li>
    </ul>
  </div>
  </div>
</div>
</div>
  `;
}

function internData(element) {
  return `
  <div class="col">
<div class="card h-100">
  <div class="card-body">
    <div class="employee-header text-white">
    <h4 class="card-title"> ${element.getName()}</h4>
  <h5 class="card-text"> <i class="fas fa-user-graduate"></i> ${element.getRole()}</h5>
</div>
  <div class="bg-light bg-gradient">
    <ul id= "employee-info">
      <li>ID:<span>${element.getId()}</span></li>
      <li>Email:<span><a href="mailto:${element.getEmail()}"> ${element.getEmail()}</a></span></li>
       <li>School: <span>${element.school}</span></li>
    </ul>
  </div>
  </div>
</div>
</div>
  `;
}

function templateData(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
  <header class="mb-4 text-white">
  <h1 class="p-4 text-center">My Team</h1>
</header>
  <main>
  <section class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 justify-content-center">
  ${data}
  </div>
  </section>
  </main>
  </body>
  </html>`;
}

function genrateTeamProfile(employeData) {
  fs.writeFile("./dist/index.html", employeData, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Team profile generated succesfully");
    }
  });
}
module.exports = pageTemplate;

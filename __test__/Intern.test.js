const { expect } = require('@jest/globals')
const Intern=require('../lib/Intern')
test('Checks intern object',()=>{
    const intern=new Intern(3,'fasika','fasika@gmail.com','Austin university of Managment')
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.school).toBeDefined()
})
test("Gets intern school", () => {
    const intern=new Intern(3,'fasika','fasika@gmail.com','Austin university of Managment')
    expect(intern.getSchool()).toBe(intern.school)
  });

test("Gets intern role", () => {
    const intern=new Intern(3,'fasika','fasika@gmail.com','Austin university of Managment')
    expect(intern.getRole()).toBe(intern.constructor.name);
  });
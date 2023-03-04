const Intern=require('../lib/Intern.js')

test('gets school',()=>{
    const intern = new Intern('Javi','12345','alvarezjavi960@gmail.com','University of Miami')
    expect(intern.school).toBe('University of Miami')
})
test('gets intern role',()=>{
    const intern = new Intern('Javi','12345','alvarezjavi960@gmail.com','University of Miami')
    expect(intern.getRole()).toEqual('Intern')
})
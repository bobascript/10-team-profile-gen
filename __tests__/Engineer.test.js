const Engineer = require('../lib/Engineer.js')

test('gets github',()=>{
    const engineer = new Engineer('Javi','12345','alvarezjavi960@gmail.com','bobascript')
    expect(engineer.github).toBe('bobascript')
})
test('gets engineer role',()=>{
    const engineer = new Engineer('Javi','12345','alvarezjavi960@gmail.com','bobascript')
    expect(engineer.getRole()).toEqual('Engineer')
})
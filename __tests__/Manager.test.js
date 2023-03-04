const Manager=require('../lib/Manager.js')

test('gets manager number',()=>{
    const manager = new Manager('Javi','12345','alvarezjavi960@gmail.com','1234567890')
    expect(manager.mgrNmbr).toBe('1234567890')
})
test('gets manager role',()=>{
    const manager = new Manager('Javi','12345','alvarezjavi960@gmail.com','1234567890')
    expect(manager.getRole()).toEqual('Manager')
})
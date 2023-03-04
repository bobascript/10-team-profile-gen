const Employee = require("../lib/Employee.js")

test('creates employee',()=>{
    const employee = new Employee('Javi','12345','alvarezjavi960@gmail.com')
    expect(employee.name).toBe('Javi')
    expect(employee.id).toBe('12345')
    expect(employee.email).toBe('alvarezjavi960@gmail.com')
})
test('gets employee name',()=>{
    const employee = new Employee('Javi','12345','alvarezjavi960@gmail.com')
    expect(employee.getName()).toEqual('Javi')
})
test('gets employee id',()=>{
    const employee = new Employee('Javi','12345','alvarezjavi960@gmail.com')
    expect(employee.getId()).toEqual('12345')
})
test('gets employee email',()=>{
    const employee = new Employee('Javi','12345','alvarezjavi960@gmail.com')
    expect(employee.getEmail()).toEqual('alvarezjavi960@gmail.com')
})
test('gets employee role',()=>{
    const employee = new Employee('Javi','12345','alvarezjavi960@gmail.com')
    expect(employee.getRole()).toEqual('Employee')
})
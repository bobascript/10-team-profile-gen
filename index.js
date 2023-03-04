// Importing the required modules
const inquirer=require("inquirer")
const fs=require("fs")
const Employee=require("./lib/Employee.js")
const Manager=require("./lib/Manager.js")
const Engineer=require("./lib/Engineer.js")
const Intern=require("./lib/Intern.js")

// Creating an empty array for each employee role

const mgrArray = []
const engArray = []
const intArray = []

const managerQs=[
    {
        type: "text",
        name: "mgrName",
        message: "What is the name of the manager you would like to input?"
    },
    {
        type: "number",
        name: "mgrId",
        message: "What is the manager's ID number?"
    },
    {
        type: "text",
        name: "mgrEmail",
        message: "What is the manager's email address?"
    },
    {
        type: "text",
        name: "officeNumber",
        message: "What is the number of the manager's office?"
    }
]

const engineerQs=[
    {
        type: "text",
        name: "engName",
        message: "What is the name of the engineer you would like to input?"
    },
    {
        type: "number",
        name: "engId",
        message: "What is the engineer's ID number?"
    },
    {
        type: "text",
        name: "engEmail",
        message: "What is the engineer's email address?"
    },
    {
        type: "text",
        name: "engGithub",
        message: "What is the engineer's Github username?"
    }
]

const internQs=[
    {
        type: "text",
        name: "intName",
        message: "What is the name of the intern you would like to input?"
    },
    {
        type: "number",
        name: "intId",
        message: "What is the intern's ID number?"
    },
    {
        type: "text",
        name: "intEmail",
        message: "What is the intern's email address?"
    },
    {
        type: "text",
        name: "intSchool",
        message: "What school does the intern attend?"
    }
]

const menuQs = [
    {
        type:"checkbox",
        name:"menu",
        message: "Are you finished? Or would you like to add another employee?",
        choices:["Engineer","Intern","All Finished :)"]

    }
]
const promptMgr=()=>{
    return inquirer.prompt(managerQs).then((answers)=>{
        mgrArray.push(new Manager(answers.mgrName,answers.mgrId,answers.mgrEmail,answers.officeNumber))
        return promptMenu()
    }).catch(err => {
        console.log(err);
    });
}

const promptEng=()=>{
    return inquirer.prompt(engineerQs).then((answers)=>{
        engArray.push(new Engineer(answers.engName,answers.engId,answers.engEmail,answers.engGithub))
        return promptMenu()
    }).catch(err => {
        console.log(err);
    });
}

const promptInt=()=>{
    return inquirer.prompt(internQs).then((answers)=>{
        intArray.push(new Intern(answers.intName,answers.intId,answers.intEmail,answers.intSchool))
        return promptMenu()
    }).catch(err => {
        console.log(err);
    });
}

const promptMenu=()=>{
    return inquirer.prompt(menuQs).then((answers)=>{
        if(answers.menu=="Engineer"){
            return promptEng()
        }else if(answers.menu=="Intern"){
            return promptInt()
        }else if(answers.menu=="All Finished :)"){
            console.log(mgrArray)
            console.log(engArray)
            console.log(intArray)
            return
        }
    }).then(genHTML).then(pageData => {
        return writetoFile(pageData)
    }).catch(err => {
        console.log(err);
    });
}

const genHTML=()=>{
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400;700;800&display=swap" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>
    <header>My Team</header>
    <section>
        <div class="card">
            <h1 class="name">${mgrArray[0].name} </h1>
            <h2 class="position">Manager</h2>
            <div class="empDetails">
                <p>ID: ${mgrArray[0].id}</p>
                <p>Email: ${mgrArray[0].email}</p>
                <p>Number: ${mgrArray[0].officeNumber}</p>
            </div>
        </div>

        ${engCard()}
        ${intCard()}

    </section>
</body>
</html>
`
}

const engCard=engineer=>{
    let engineers=""
    engArray.forEach((Engineer)=>{
        let engineer=
        `
        <div class="card">
            <h1 class="name">${Engineer.name} </h1>
            <h2 class="position">Engineer</h2>
            <div class="empDetails">
                <p>ID: ${Engineer.id}</p>
                <p>Email: ${Engineer.email}</p>
                <p>Github: ${Engineer.github}</p>
            </div>
        </div>
        `
        engineers+=engineer
    })
    return engineers
}

const intCard=intern=>{
    let interns=""
    intArray.forEach((Intern)=>{
        let intern=
        `
        <div class="card">
            <h1 class="name">${Intern.name} </h1>
            <h2 class="position">Intern</h2>
            <div class="empDetails">
                <p>ID: ${Intern.id}</p>
                <p>Email: ${Intern.email}</p>
                <p>School: ${Intern.school}</p>
            </div>
        </div>
        `
        interns+=intern
    })
    return interns
}

function writetoFile(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile("./dist/teamProfile.html",data,err=>{
            if(err){
                reject(err)
                return
            }
            resolve({
                ok: true,
                message:"File created! Check the dist folder for the teamProfile.html file!"
            })
            if(resolve.ok){
                console.log(resolve.message)
            }
        })
    })
}

const init=()=>{
    promptMgr()
}

init()
// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name
        this.age = props.age
        this.location = props.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.newSpecialty = instructorProps.specialty
        this.newFavLanguage = instructorProps.favLanguage
        this.newCatchPhrase = instructorProps.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person{
    constructor (studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground
        this.className = studentProps.className
        this.favSubjects = studentProps.favSubjects 
    }
    listSubjects(){
        return `${this.name}'s favorite subjects are ${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${this.subject}`;
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge for ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(PMprops){
        super(PMprops);
        this.newGradClassName = PMprops.gradClassName
        this.newFavInstructor= PMprops.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Pauly = new Instructor({
    name: "Paul D",
    age: 44,
    location: "Jersey",
    specialty: "Front-end",
    favLanguage: "JavaScript",
    catchPhrase: `G.T.L.`
});

const Jethro = new Instructor({
    name: "Jethro",
    age: 35,
    location: "Kentucky",
    specialty: "Coors",
    favLanguage: "C++",
    catchPhrase: `Free Bird`
});

const Justin = new Student({
    name: "Justin",
    age: 18,
    location: "Canada",
    previousBackground: "Music",
    className: "CS101",
    favSubjects: ['CSS', 'Game Design', '3d animation'],
});

const Billy = new Student({
    name: "Billy",
    age: 20,
    location: "Texas",
    previousBackground: "BBQ Pitmaster",
    className: "CS101",
    favSubjects: ['Java', 'Theory', 'Spanish'],
});

const Krissy = new ProjectManager({
    name: "Krissy",
    age: 29,
    location: "Los Angeles",
    gradClassName: "CS69" ,
    favInstructor: "Mark Z" ,
});

const Jessica = new ProjectManager({
    name: "Jessica",
    age: 30,
    location: "California",
    gradClassName: "CS50" ,
    favInstructor: "Elon" ,
});

console.log(Pauly.demo("CSS")); //today we are learning about "subject"
console.log(Jethro.grade(Justin, "Redux"));
console.log(Justin.listSubjects());
console.log(Krissy.standUp("web23"))
console.log(Jessica.debugsCode(Justin, "CSS"))
console.log(Krissy.speak())
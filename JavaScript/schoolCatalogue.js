/*
School Catalogue
Let's put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools. 
Because these classes share properties and methods, each will inherit from a parent School class. 
Our parent and three child classes have the following properties, getters, setters, and methods:

SCHOOL
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
PRIMARY
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
MIDDLE
Does not include any additional properties or methods
HIGH
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you're looking for a challenge, create the constructor() and getters for the four classes above. 
Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
*/

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if(typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level}.`);
  }
  
  static pickSubstitueTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._name = name;
    this._level = 'primary';
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents) {
    super(name, numberOfStudents)
    this._name = name;
    this._level = 'middle';
    this._numberOfStudents = numberOfStudents;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents)
    this._name = name;
    this._level = 'high';
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
}




let lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

let sub = School.pickSubstitueTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log("The sub teacher is " + sub); 




let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

/*
Transpilation

At this point, you are familiar with ES6+ browser compatibility issues and how to address them with transpilation.

In this project, you will practice setting up a JavaScript directory with Babel to transpile ES6+ code to ES5.

Before you begin, take note of the chart to the right. The first column displays the percentage of web browsers that 
support the ES6+ syntax in the second column. At the end of this project, we will populate the third and fourth columns 
with the equivalent ES5 syntax and the percentage of web browsers that recognize it.

Because this is a short project and knowing the steps to set up Babel is important, we recommend you complete it a 
couple of times. Also, if you're stuck and think you may have typed the wrong command, select the reset project button 
and start from the beginning.

*/

// Original code

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
let nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

module.exports = HospitalEmployee;


// Transpiled ES5 code will go here...







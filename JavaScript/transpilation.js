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




// Transpiled ES5 code



'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HospitalEmployee = function () {
  function HospitalEmployee(name) {
    _classCallCheck(this, HospitalEmployee);

    this._name = name;
    this._remainingVacationDays = 20;
  }

  _createClass(HospitalEmployee, [{
    key: 'takeVacationDays',
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'remainingVacationDays',
    get: function get() {
      return this._remainingVacationDays;
    }
  }], [{
    key: 'generatePassword',
    value: function generatePassword() {
      return Math.floor(Math.random() * 10000);
    }
  }]);

  return HospitalEmployee;
}();

var Nurse = function (_HospitalEmployee) {
  _inherits(Nurse, _HospitalEmployee);

  function Nurse(name, certifications) {
    _classCallCheck(this, Nurse);

    var _this = _possibleConstructorReturn(this, (Nurse.__proto__ || Object.getPrototypeOf(Nurse)).call(this, name));

    _this._certifications = certifications;
    return _this;
  }

  _createClass(Nurse, [{
    key: 'addCertification',
    value: function addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }, {
    key: 'certifications',
    get: function get() {
      return this._certifications;
    }
  }]);

  return Nurse;
}(HospitalEmployee);

var nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
var nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

module.exports = HospitalEmployee;





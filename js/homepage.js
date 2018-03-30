'use strict'

var loginInfo = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

var registerBtn = document.getElementById('register');
var cancelBtn = document.getElementById('cancel');
var submitBtn = document.getElementById('submit');

function helloUser() {
  var LS = localStorage.getItem('userLogin');
  if (LS && LS.length) {
    loginInfo = JSON.parse(LS);
  }
  if(loginInfo.firstName !== '') {
    registerBtn.className = 'hidden';
    var hello = document.createElement('p');
    hello.className = 'registeredUser';
    hello.textContent = 'Hello ' + loginInfo.firstName;
    console.log(hello);
    var header = document.getElementById('header-nav');
    header.appendChild(hello);
  }
}

helloUser();

var form = document.getElementById('registerForm');
//opens register form
function unhide(event) {
  if (form.className === 'hidden') {
    form.className = 'unhidden';
  }
}

function hide(event) {
  form.className = 'hidden';
}

//save to local storage function
function saveToLS() {
    var savedUserLogin = JSON.stringify(loginInfo);
    localStorage.setItem('userLogin', savedUserLogin);
}

//on a submit event, passes values to our object and stores them in local storage
function handleRegisterSubmit(event) {
  event.preventDefault();
  loginInfo.firstName = event.target.firstName.value;
  loginInfo.lastName = event.target.lastName.value;
  loginInfo.email = event.target.email.value;
  loginInfo.password = event.target.password.value;

  saveToLS();
  event.target.firstName.value = '';
  event.target.lastName.value = '';
  event.target.email.value = '';
  event.target.password.value = '';
}

var submitForm = document.getElementById('registerForm');


registerBtn.addEventListener('click', unhide);
submitForm.addEventListener('submit', handleRegisterSubmit);
cancelBtn.addEventListener('click', hide);
submitBtn.addEventListener('click', hide);
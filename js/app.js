'use strict';

var UserData = {
  persInfo: {
    userName: '',
    careerTitle: '',
    city: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  },
  persStatement: '',
  techSkills: {
    languages: '',
    tools: [],
    opSys: []
  },
  yourProjects: { //might need an object constructor fcn here
    projTitle: [],
    date: [],
    url: [],
    description: [],
    languages: [],
    persContributions: []
  },
  yourEd: { //might need an object constructor fcn here
    school: '',
    location: '',
    degree: '',
    gradDate: '',
  },
  yourExp: {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    action: []
  }
};

var formEl = document.getElementById('persInfoForm');
formEl.addEventListener('submit', handleSubmit);

var formEl2 = document.getElementById('statementForm');
formEl2.addEventListener('submit', handleSubmit2);

var formEl3 = document.getElementById('techSkillsForm');
formEl3.addEventListener('submit', handleSubmit3);

var formEl4 = document.getElementById('projectForm');
formEl4.addEventListener('submit', handleSubmit4);

var formEl5 = document.getElementById('edForm');
formEl5.addEventListener('submit', handleSubmit5);

var formEl6 = document.getElementById('expForm');
formEl6.addEventListener('submit', handleSubmit6);

//Load from Local Storage (if there is any) //maybe not necessary here?
var yourData = localStorage.getItem('userData');
var usableItems = JSON.parse(yourData);
console.log('here is local storage');

if (usableItems && Object.keys(usableItems).length) { //  
  UserData = usableItems;
  console.log('Loaded from Local Storage');
  //return;
}
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
function saveToLS() {
  var saveData = JSON.stringify(UserData);
  localStorage.setItem('userData', saveData);
}
// //////////////////////////////////////////////////////////////////////
saveToLS();

//////////////////////////////////////////////////////////////////////






var tabs = document.getElementsByClassName('tab');

var allFieldsets = [];
for (var i = 0; i < tabs.length; i++) {
  var currentTab = tabs[i];
  currentTab.addEventListener('click', tabHandler);
  var currentFieldset = document.getElementById(i);
  allFieldsets.push(currentFieldset);
  currentFieldset.style.display = 'none';
}
allFieldsets[0].style.display = 'block';

function tabHandler(event) {
  event.preventDefault();
  for (var i = 0; i < tabs.length; i++) {
    var currentFieldset = document.getElementById(i);
    allFieldsets.push(currentFieldset);
    currentFieldset.style.display = 'none';
  }

  if (event.target.id === 'infoTab') {
    allFieldsets[0].style.display = 'block';
  } else if (event.target.id === 'statementTab') {
    allFieldsets[1].style.display = 'block';
  } else if (event.target.id === 'techTab') {
    allFieldsets[2].style.display = 'block';
  } else if (event.target.id === 'projTab') {
    allFieldsets[3].style.display = 'block';
  } else if (event.target.id === 'edTab') {
    allFieldsets[4].style.display = 'block';
  } else if (event.target.id === 'expTab') {
    allFieldsets[5].style.display = 'block';
  }

}

//////////////////////////////////////////////////////////////////////

function handleSubmit(event) {
  event.preventDefault();

  // var persInfoEls = document.getElementsById('persInfoClass');

  // for (var i = 0; i < Object.keys(UserData.persInfo); i++) {
  //   if (Object.keys(UserData.persInfo[i]) > 1) {
  //     //reassign
  //   }
  // }


  //currentName.value = UserData.persInfo.userName;

  var nameInput = event.target.nameText.value;
  var careerInput = event.target.careerText.value; //careerText is id for <input>
  var residenceInput = event.target.residenceText.value;
  var emailInput = event.target.emailText.value;
  var phoneInput = event.target.phoneText.value;
  var linkedInInput = event.target.linkedInText.value;
  var gitHubInput = event.target.gitHubText.value;

  UserData.persInfo.userName = nameInput;
  UserData.persInfo.careerTitle = careerInput;
  UserData.persInfo.city = residenceInput;
  UserData.persInfo.email = emailInput;
  UserData.persInfo.phone = phoneInput;
  UserData.persInfo.linkedin = linkedInInput;
  UserData.persInfo.github = gitHubInput;



  //addClickToEdit(0);

  saveToLS();
  //genAllContent(); //replace with savetols & trigger refresh (update source of iframe)
  document.getElementById('preview').contentWindow.location.reload();


}

function handleSubmit3(event) {
  event.preventDefault();
  var statementInput = event.target.statementText.value;
  UserData.persStatement = statementInput;

  //addClickToEdit(1);

  saveToLS();
  //genAllContent();
  document.getElementById('preview').contentWindow.location.reload();
}

function handleSubmit3(event) {

  event.preventDefault();

  var languagesInput = event.target.languagesText.value;
  var toolsInput = event.target.toolsText.value;
  var opSysInput = event.target.opSysText.value;

  UserData.techSkills.languages = languagesInput;
  UserData.techSkills.tools = toolsInput;
  UserData.techSkills.opSys = opSysInput;

  //addClickToEdit(2);

  saveToLS();
  //genAllContent();
  document.getElementById('preview').contentWindow.location.reload();

function handleSubmit4(event) {
  event.preventDefault();

  // var resume = document.getElementById('resume');
  // removeAllText(resume);

  //var targetedInput = event.target;
  //var projectNameInput = event.target.projectNameText[targetedInput].value;
  var projectNameInput = event.target.projectNameText.value;
  var projectDateInput = event.target.projectDateText.value;
  var projectLinkInput = event.target.projectLinkText.value;
  var projectDescriptionInput = event.target.projectDescriptionText.value;
  var languagesUsedInput = event.target.languagesUsedText.value;
  var persContributionsInput = event.target.PersContributionsText.value;


  UserData.yourProjects.projTitle.push(projectNameInput);
  UserData.yourProjects.date.push(projectDateInput);
  UserData.yourProjects.url.push(projectLinkInput);
  UserData.yourProjects.description.push(projectDescriptionInput);
  UserData.yourProjects.languages.push(languagesUsedInput);
  UserData.yourProjects.persContributions.push(persContributionsInput);

  var projectSelect = document.getElementsByClassName('projectClass');

  for (var i = 0; i < Object.keys(UserData.yourProjects).length; i++) {
    // console.log(projectSelect);
    // console.log(projectSelect[0]);
    // console.log(projectSelect[0].value);
    // console.log(projectSelect[i]);
    projectSelect[i].value = '';
  }

  saveToLS();
}

function handleSubmit4(event) {
  event.preventDefault();

  // var resume = document.getElementById('resume');
  // removeAllText(resume);

  //var targetedInput = event.target;
  //var projectNameInput = event.target.projectNameText[targetedInput].value;
  var projectNameInput = event.target.projectNameText.value;
  var projectDateInput = event.target.projectDateText.value;
  var projectLinkInput = event.target.projectLinkText.value;
  var projectDescriptionInput = event.target.projectDescriptionText.value;
  var languagesUsedInput = event.target.languagesUsedText.value;
  var persContributionsInput = event.target.PersContributionsText.value;


  UserData.yourProjects.projTitle.push(projectNameInput);
  UserData.yourProjects.date.push(projectDateInput);
  UserData.yourProjects.url.push(projectLinkInput);
  UserData.yourProjects.description.push(projectDescriptionInput);
  UserData.yourProjects.languages.push(languagesUsedInput);
  UserData.yourProjects.persContributions.push(persContributionsInput);

  var projectSelect = document.getElementsByClassName('projectClass');

  for (var i = 0; i < Object.keys(UserData.yourProjects).length; i++) {

    projectSelect[i].value = '';
  }

  //addClickToEdit(3);

  saveToLS();
  //genAllContent();
  document.getElementById('preview').contentWindow.location.reload();

}

function handleSubmit5(event) {
  event.preventDefault();



  var schoolInput = event.target.schoolText.value;
  var locationInput = event.target.locationText.value;
  var degreeInput = event.target.degreeText.value;
  var gradDateInput = event.target.gradDateText.value;

  var formEl6 = document.getElementById('expForm');
  formEl6.addEventListener('submit', handleSubmit6);

  UserData.yourEd.school = schoolInput;
  UserData.yourEd.location = locationInput;
  UserData.yourEd.degree = degreeInput;
  UserData.yourEd.gradDate = gradDateInput;

  //addClickToEdit(4);

  saveToLS();
  //genAllContent(); //need to comment this out
  document.getElementById('preview').contentWindow.location.reload();

}

function handleSubmit6(event) {
  event.preventDefault();



  var companyInput = event.target.companyText.value;
  var positionInput = event.target.positionText.value;
  var startInput = event.target.startText.value;
  var endInput = event.target.endText.value;
  var actionInput = event.target.actionText.value;


  UserData.yourExp.company = companyInput;
  UserData.yourExp.position = positionInput;
  UserData.yourExp.startDate = startInput;
  UserData.yourExp.endDate = endInput;
  UserData.yourExp.action = actionInput;

  //addClickToEdit(5);

  saveToLS();
  //genAllContent();
  document.getElementById('preview').contentWindow.location.reload();

}

/////////////////////////



// function addClickToEdit(index) { //Will get added at the end of submit handlers (maybe as onhover callback)


//   var wrappers = document.getElementsByClassName('wrapper');
//   var bigwrappers = document.getElementsByClassName('bigwrapper');
//   var resume = document.getElementById('resume');
//   var fieldsets = document.getElementsByClassName('fieldSet');
//   console.log(fieldsets);



//   var deleteImg = document.createElement('img');
//   deleteImg.setAttribute('src', 'img/xIcon.svg');
//   //deleteImg.addEventListener('click', deleteFieldset);
//   deleteImg.setAttribute('class', 'delete');
//   deleteImg.setAttribute('height', '24px');
//   deleteImg.setAttribute('width', '24px');
//   deleteImg.style.visibility = 'hidden';
//   deleteImg.style.zIndex = '2';
//   wrappers[index].appendChild(deleteImg);


//   var editImg = document.createElement('img');
//   editImg.setAttribute('src', 'img/editPencil.svg');
//   //editImg.addEventListener('click', editFieldset);
//   editImg.setAttribute('class', 'editPencil');
//   editImg.setAttribute('height', '24px');
//   editImg.setAttribute('width', '24px');
//   editImg.style.visibility = 'hidden';
//   editImg.style.zIndex = '2';
//   wrappers[index].appendChild(editImg);

//   bigwrappers[index].addEventListener('mouseover', function () {
//     deleteImg.style.visibility = 'visible';
//     editImg.style.visibility = 'visible';
//     resume.style.opacity = '0.3';
//     fieldsets[index].style.zIndex = '3';
//     fieldsets[index].style.opacity = '1';
//     console.log(fieldsets[index].style.opacity);
//   });
//   bigwrappers[index].addEventListener('mouseout', function () {
//     deleteImg.style.visibility = 'hidden';
//     editImg.style.visibility = 'hidden';
//     resume.style.opacity = '1';
//   });
//   wrappers[index].addEventListener('mouseover', function () {
//     deleteImg.style.visibility = 'visible';
//     editImg.style.visibility = 'visible';
//   });
//   wrappers[index].addEventListener('mouseout', function () {
//     deleteImg.style.visibility = 'hidden';
//     editImg.style.visibility = 'hidden';
//   });

// }





//genAllContent();




// //add event listener to all tabs by ID
// function tabHandler(event) {
//   //displaynone by class


//   var tabs = document.getElementsByClassName("tab");



//   var clickedTabID = event.target.id;
//   if (clickedTabID === "infoTab") {
//     var clickedTab = document.getElementById('personalInfo');
//     infoField.style.display = "block";
//   } else if (clickedTabID === "techTab") {
//     var clickedTab = document.getElementById('personalInfo');
//     infoField.style.display = "block";
//   } else if (clickedTabID === "infoTab") {
//     var clickedTab = document.getElementById('personalInfo');
//     infoField.style.display = "block";
//   } else if (clickedTabID === "infoTab") {
//     var clickedTab = document.getElementById('personalInfo');
//     infoField.style.display = "block";
//   }

// }

//  techtab projtab edtab exptab

// function clickToEdit() {

// }
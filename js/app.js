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
    opSys: [],
  },
  yourProjects: [{ //might need an object constructor fcn here
    projTitle: '',
    date: '',
    url: '',
    description: '',
    languages: '',
    persContributions: ''
  }],
  yourEd: [{ //might need an object constructor fcn here
    school: '',
    location: '',
    degree: '',
    gradDate: '',
  }],
  yourExp: [{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    action: []
  }]
};



function contentGen(parentElID, childEl, userText) {
  var parentVar = document.getElementById(parentElID);
  var childVar = document.createElement(childEl);
  childVar.addEventListener('submit', handleSubmit);
  childVar.textContent = userText;
  parentVar.appendChild(childVar);
}

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
  } else if (event.target.id === 'techTab') {
    allFieldsets[1].style.display = 'block';
  } else if (event.target.id === 'projTab') {
    allFieldsets[2].style.display = 'block';
  } else if (event.target.id === 'edTab') {
    allFieldsets[3].style.display = 'block';
  } else if (event.target.id === 'expTab') {
    allFieldsets[4].style.display = 'block';
  }
}

function handleSubmit(event) {
  event.preventDefault();


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


  genAllContent();

}

function handleSubmit2(event) {
  event.preventDefault();

  var languagesInput = event.target.languagesText.value;
  var toolsInput = event.target.toolsText.value;
  var opSysInput = event.target.opSysText.value;

  UserData.techSkills.languages = languagesInput;
  UserData.techSkills.tools = toolsInput;
  UserData.techSkills.opSys = opSysInput;

  genAllContent();

}
/*
function handleSubmit3(event) {
  event.preventDefault();

  var projectNameInput = event.target.projectNameText.value;
  var projectDateInput = event.target.projectDateText.value;
  var projectLinkInput = event.target.projectLinkText.value;

  UserData.projectInfo.projectName = projectNameInput;
  UserData.projectInfo.projectDate = projectDateInput;
  UserData.projectInfo.projectLink = projectLinkInput;
*/

function handleSubmit3(event) {
  event.preventDefault();

  //var targetedInput = event.target;
  //var projectNameInput = event.target.projectNameText[targetedInput].value;
  var projectNameInput = event.target.projectNameText.value;
  var projectDateInput = event.target.projectDateText.value;
  var projectLinkInput = event.target.projectLinkText.value;
  var projectDescriptionInput = event.target.projectDescriptionText.value;
  var languagesUsedInput = event.target.languagesUsedText.value;
  var persContributionsInput = event.target.PersContributionsText.value;

  UserData.yourProjects.projTitle = projectNameInput;
  UserData.yourProjects.date = projectDateInput;
  UserData.yourProjects.url = projectLinkInput;
  UserData.yourProjects.description = projectDescriptionInput;
  UserData.yourProjects.languages = languagesUsedInput;
  UserData.yourProjects.persContributions = persContributionsInput;

  // var class = document.getElementsByClassName('projectSTuff')
  // for (var i = 0; index < array.length; i++) {
  //   var targeteddeal = event.target.class[i].value
  //   targeteddeal = '';

  genAllContent();

}

function handleSubmit4(event) {
  event.preventDefault();

  var schoolInput = event.target.schoolText.value;
  var locationInput = event.target.locationText.value;
  var degreeInput = event.target.degreeText.value;
  var gradDateInput = event.target.gradDateText.value;


  UserData.yourEd.school = schoolInput;
  UserData.yourEd.location = locationInput;
  UserData.yourEd.degree = degreeInput;
  UserData.yourEd.gradDate = gradDateInput;

  genAllContent();

}

function handleSubmit5(event) {
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


  genAllContent();

}
/////////////////////////
function removeAllText(element) {
  // loop through all the nodes of the element
  var nodes = element.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    // if it's a text node, remove it
    if (node.nodeType === Node.TEXT_NODE) {
      node.parentNode.removeChild(node);
      i--; // have to update our incrementor since we just removed a node from childNodes
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      removeAllText(node);
    }
  }
}

function genAllContent() {
  var resume = document.getElementById('resume');
  console.log(resume);
  removeAllText(resume);

  var formEl = document.getElementById('persInfoForm');
  formEl.addEventListener('submit', handleSubmit);

  var formEl2 = document.getElementById('techSkillsForm');
  formEl2.addEventListener('submit', handleSubmit2);

  var formEl3 = document.getElementById('projectForm');
  formEl3.addEventListener('submit', handleSubmit3);

  var formEl4 = document.getElementById('edForm');
  formEl4.addEventListener('submit', handleSubmit4);

  var formEl5 = document.getElementById('expForm');
  formEl5.addEventListener('submit', handleSubmit5);



  contentGen('personalInfo', 'h1', UserData.persInfo.userName);
  contentGen('personalInfo', 'h2', UserData.persInfo.careerTitle);

  //Eventually User Input, but for now hard-coded with placeholders
  //var infoArray = ['city', 'email', 'phone'];
  contentGen('personalInfo', 'p', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);

  var infoLinks = ['linkedIn', 'gitHub', ];
  contentGen('personalInfo', 'p', UserData.persInfo.linkedin + ' | ' + UserData.persInfo.github);

  contentGen('statement', 'p', 'Lorem Ipsum a bunch of stuff');

  contentGen('technicalSkills', 'h3', 'TECHNICAL SKILLS');
  contentGen('technicalSkills', 'p', 'Languages: ' + UserData.techSkills.languages);
  contentGen('technicalSkills', 'p', 'Tools: ' + UserData.techSkills.tools);
  contentGen('technicalSkills', 'p', 'Operating Systems: ' + UserData.techSkills.opSys);


  contentGen('projects', 'h3', 'PROJECTS');
  contentGen('projects', 'h4', UserData.yourProjects.projTitle + ' | ' + UserData.yourProjects.date + ' | ' + UserData.yourProjects.url);
  contentGen('projects', 'p', UserData.yourProjects.description);
  contentGen('projects', 'p', 'Languages Used: ' + UserData.yourProjects.languages);
  contentGen('projects', 'p', UserData.yourProjects.persContributions);

  contentGen('education', 'h3', 'EDUCATION');
  contentGen('education', 'h4', UserData.yourEd.school + ' | ' + UserData.yourEd.location);
  contentGen('education', 'p', UserData.yourEd.degree + ' | ' + UserData.yourEd.gradDate);
  

  contentGen('experience', 'h3', 'EXPERIENCE');
  contentGen('experience', 'h4', UserData.yourExp.company + ' - ' + UserData.yourExp.position + ' | ' + UserData.yourExp.startDate + ' - ' + UserData.yourExp.endDate);
  contentGen('experience', 'p', UserData.yourExp.action);

}

genAllContent();




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
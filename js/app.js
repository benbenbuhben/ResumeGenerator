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
  var careerInput = event.target.careerText.value;
  var residenceInput = event.target.residenceText.value;
  var emailInput = event.target.emailText.value;
  var phoneInput = event.target.phoneText.value;

  UserData.persInfo.userName = nameInput;
  UserData.persInfo.careerTitle = careerInput;
  UserData.persInfo.city = residenceInput;
  UserData.persInfo.email = emailInput;
  UserData.persInfo.phone = phoneInput;


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
function handleSubmit3(event) {
  event.preventDefault();

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
  contentGen('personalInfo', 'h3', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);

  var infoLinks = ['linkedIn', 'gitHub', ];
  contentGen('personalInfo', 'h3', infoLinks[0] + ' | ' + infoLinks[1]);

  contentGen('statement', 'h3', 'Lorem Ipsum a bunch of stuff');

  contentGen('technicalSkills', 'h4', 'Technical Skills');

  //var LanguageIntro = 'Languages: ';
  //var Languages = UserData.techSkills.languages;

  contentGen('technicalSkills', 'p', 'Languages: ' + UserData.techSkills.languages);
  contentGen('technicalSkills', 'p', 'Tools: ' + UserData.techSkills.tools);
  contentGen('technicalSkills', 'p', 'Operating Systems: ' + UserData.techSkills.opSys);

  contentGen('projects', 'h4', 'Projects');
  contentGen('projects', 'h5', UserData.yourProjects.projTitle);
  contentGen('projects', 'h5', UserData.yourProjects.date);
  contentGen('projects', 'h5', UserData.yourProjects.url);
  contentGen('projects', 'h5', UserData.yourProjects.description);
  contentGen('projects', 'h5', UserData.yourProjects.languages);
  contentGen('projects', 'h5', UserData.yourProjects.persContributions);

  contentGen('education', 'h4', 'Education');
  contentGen('education', 'p', UserData.yourEd.school);
  contentGen('education', 'p', UserData.yourEd.location);
  contentGen('education', 'p', UserData.yourEd.degree);
  contentGen('education', 'p', UserData.yourEd.gradDate);



  contentGen('experience', 'h4', 'Experience');
  contentGen('experience', 'p', UserData.yourExp.company);
  contentGen('experience', 'p', UserData.yourExp.position);
  contentGen('experience', 'p', UserData.yourExp.startDate);
  contentGen('experience', 'p', UserData.yourExp.endDate);
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
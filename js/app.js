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


function handleSubmit(event) {
  event.preventDefault();

  var nameInput = event.target.nameText.value;
  var careerInput = event.target.careerText.value; //careerText is id for <input>
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

saveToLS();

function handleSubmit2(event) {
  event.preventDefault();
  var statementInput = event.target.statementText.value;
  UserData.persStatement = statementInput;
  genAllContent();
}

function handleSubmit3(event) {
  event.preventDefault();

  var languagesInput = event.target.languagesText.value;
  var toolsInput = event.target.toolsText.value;
  var opSysInput = event.target.opSysText.value;

  UserData.techSkills.languages = languagesInput;
  UserData.techSkills.tools = toolsInput;
  UserData.techSkills.opSys = opSysInput;

  genAllContent();

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
    // console.log(projectSelect);
    // console.log(projectSelect[0]);
    // console.log(projectSelect[0].value);
    // console.log(projectSelect[i]);
    projectSelect[i].value = '';
  }

  genAllContent();

}

function handleSubmit5(event) {
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
  removeAllText(resume);

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



  contentGen('personalInfo', 'h1', UserData.persInfo.userName);
  contentGen('personalInfo', 'h2', UserData.persInfo.careerTitle);

  //Eventually User Input, but for now hard-coded with placeholders
  //var infoArray = ['city', 'email', 'phone'];
  contentGen('personalInfo', 'p', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);

  var infoLinks = ['linkedIn', 'gitHub', ];
  contentGen('personalInfo', 'h3', infoLinks[0] + ' | ' + infoLinks[1]);

  contentGen('statement', 'p', UserData.persStatement);

  contentGen('technicalSkills', 'h3', 'Technical Skills');
  contentGen('technicalSkills', 'p', 'Languages: ' + UserData.techSkills.languages);
  contentGen('technicalSkills', 'p', 'Tools: ' + UserData.techSkills.tools);
  contentGen('technicalSkills', 'p', 'Operating Systems: ' + UserData.techSkills.opSys);

  contentGen('projects', 'h3', 'Projects');

  for (var i = 0; i < UserData.yourProjects.projTitle.length; i++) {

    contentGen('projects', 'h4', UserData.yourProjects.projTitle[i] + ' | ' + UserData.yourProjects.date[i] + ' | ' + UserData.yourProjects.url[i]);
    contentGen('projects', 'p', UserData.yourProjects.description[i]);
    contentGen('projects', 'li', 'Languages Used: ' + UserData.yourProjects.languages[i]);
    contentGen('projects', 'li', UserData.yourProjects.persContributions[i]);
    contentGen('projects', 'p', '');


  }

  contentGen('education', 'h3', 'Education');
  contentGen('education', 'h4', UserData.yourEd.school + ' | ' + UserData.yourEd.location);
  contentGen('education', 'p', UserData.yourEd.degree + ' | ' + UserData.yourEd.gradDate);


  contentGen('experience', 'h3', 'Experience');
  contentGen('experience', 'h4', UserData.yourExp.company + ' , ' + UserData.yourExp.position + ' | ' + UserData.yourExp.startDate + ' - ' + UserData.yourExp.endDate);
  contentGen('experience', 'li', UserData.yourExp.action);

}

genAllContent();

function saveToLS() {
  var saveData = JSON.stringify(UserData);
  localStorage.setItem('yourData', saveData);
}



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
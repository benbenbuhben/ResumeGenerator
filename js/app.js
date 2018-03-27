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
  }
/*  projectInfo: {
    projectName: '',
    projectDate: '',
    projectLink: '',
  }
*/  
};

function contentGen(parentElID, childEl, userText) {
  var parentVar = document.getElementById(parentElID);
  var childVar = document.createElement(childEl);
  childVar.addEventListener('submit', handleSubmit);
  childVar.textContent = userText;
  parentVar.appendChild(childVar);
}

var tabs = document.getElementsByClassName('tab');
console.log(tabs.length);

for(var i=0; i < tabs.length; i++) {
  var currentTab = tabs[i];
  currentTab.addEventListener('click', tabHandler);
}

function tabHandler(event){
  for(var i=0; i < tabs.length; i++) {
    var currentTab = tabs[i];
    currentTab.style.display = 'none';
  } 
  if(event.target.id === 'infoTab') {

  }
}

function handleSubmit(event) {
  event.preventDefault();

  var nameInput = event.target.nameText.value;
  var careerInput = event.target.careerText.value;

  UserData.persInfo.userName = nameInput;
  UserData.persInfo.careerTitle = careerInput;

  genAllContent();

}

function handleSubmit2(event) {
  event.preventDefault();

  var languagesInput = event.target.languagesText.value;
  console.log(languagesInput);
  var toolsInput = event.target.toolsText.value;
  var opSysInput = event.target.opSysText.value;

  UserData.techSkills.languages = languagesInput;
  UserData.techSkills.tools = toolsInput;
  UserData.techSkills.opSys = opSysInput;
  console.log(UserData);

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

function removeAllText(element) {
  // loop through all the nodes of the element
  var nodes = element.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    // if it's a text node, remove it
    console.log(Node.TEXT_NODE)
    if (node.nodeType === Node.TEXT_NODE) {
      node.parentNode.removeChild(node);
      i--; // have to update our incrementor since we just removed a node from childNodes
    } else
    // if it's an element, repeat this process
    if (node.nodeType === Node.ELEMENT_NODE) {
      removeAllText(node);
    }
  }
}


function genAllContent() {
  var resume = document.getElementById('resume');
  removeAllText(resume);

  var formEl = document.getElementById('persInfoForm');
  formEl.addEventListener('submit', handleSubmit);

  var formEl2 = document.getElementById('techSkillsForm');
  formEl2.addEventListener('submit', handleSubmit2);

  //var formEl3 = document.getElementById('projectForm');
  //formEl3.addEventListener('submit', handleSubmit3);

  


  contentGen('personalInfo', 'h1', UserData.persInfo.userName);
  contentGen('personalInfo', 'h2', UserData.persInfo.careerTitle);

  //Eventually User Input, but for now hard-coded with placeholders
  var infoArray = ['city', 'email', 'phone'];
  contentGen('personalInfo', 'p', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);

  var infoLinks = ['linkedIn', 'gitHub', ];
  contentGen('personalInfo', 'p', infoLinks[0] + ' | ' + infoLinks[1]);

  contentGen('statement', 'p', 'Lorem Ipsum a bunch of stuff');

  contentGen('technicalSkills', 'h3', 'Technical Skills');

  //var LanguageIntro = 'Languages: ';
  var Languages = UserData.techSkills.languages;

  contentGen('technicalSkills', 'p', Languages);

  contentGen('projects', 'h3', 'Projects');

  contentGen('education', 'h3', 'Education');

  contentGen('experience', 'h3', 'Experience');

}

genAllContent();
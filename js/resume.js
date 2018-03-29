// loadfromLS

// genallcontent(

//   dfsdsf
//   sfbsfbsf
//   sdfbfsg
// )

// genallcontent()

'use strict';

//var UserData = {};

//function loadLS() {
var yourData = localStorage.getItem('userData');
console.log(yourData);
var usableItems = JSON.parse(yourData);
console.log('here is local storage');

if (usableItems && Object.keys(usableItems).length) { //  
  var UserData = usableItems;
  console.log('Loaded from Local Storage');
  //return;
}
//}

//loadLS();

function contentGen(parentElID, childEl, userText) {
  var parentVar = document.getElementById(parentElID);
  var childVar = document.createElement(childEl);
  //childVar.addEventListener('submit', handleSubmit);
  childVar.textContent = userText;
  parentVar.appendChild(childVar);
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
  removeAllText(resume);

 
  contentGen('personalInfo', 'h1', UserData.persInfo.userName);
  contentGen('personalInfo', 'h2', UserData.persInfo.careerTitle);
  contentGen('personalInfo', 'p', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);
  contentGen('personalInfo', 'h3', UserData.persInfo.linkedin + ' | ' + UserData.persInfo.github);

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
   // contentGen('projects', 'p', '');
  }

  contentGen('education', 'h3', 'Education');
  for (var k = 0; k < UserData.yourEd.school.length; k++) {
    contentGen('education', 'h4', UserData.yourEd.school[k] + ' | ' + UserData.yourEd.location[k]);
    contentGen('education', 'p', UserData.yourEd.degree[k] + ' | ' + UserData.yourEd.gradDate[k]);
  }

  contentGen('experience', 'h3', 'Experience');
  for (var j = j; j < UserData.yourExp.company.length; j++) {
    contentGen('experience', 'h4', UserData.yourExp.company[j] + ' , ' + UserData.yourExp.position[j] + ' | ' + UserData.yourExp.startDate[j] + ' - ' + UserData.yourExp.endDate[j]);
    contentGen('experience', 'li', UserData.yourExp.action[j]);
  }
}

genAllContent();
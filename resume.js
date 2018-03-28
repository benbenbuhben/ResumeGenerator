'use strict';
var UserData = {};
function loadLS (object) {
  var yourData = localStorage.getItem('userLogs');
  var yourResume = JSON.parse(yourData);
  console.log(yourResume);
  
  //&& youResume.length was breaking code, left it out and functionality is working
  if (yourResume) {
    UserData = yourResume;
    console.log('loaded from local storage');
    return;
  }
}

function contentGen(parentElID, childEl, userText) {
  var parentVar = document.getElementById(parentElID);
  var childVar = document.createElement(childEl);
  // childVar.addEventListener('submit', handleSubmit);
  childVar.textContent = userText;
  parentVar.appendChild(childVar);
}


function genAllContent() {
  var resume = document.getElementById('resume');

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

loadLS();
genAllContent();

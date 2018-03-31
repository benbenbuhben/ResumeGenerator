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
  childVar.innerHTML = userText;
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
  contentGen('personalInfo', 'h5', UserData.persInfo.city + ' | ' + UserData.persInfo.email + ' | ' + UserData.persInfo.phone);
  contentGen('personalInfo', 'h5', UserData.persInfo.linkedin + ' | ' + UserData.persInfo.github);

  contentGen('statement', 'h5', UserData.persStatement);

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
    //How can I give these an ID or a class without modifying the contentGen thing? Maybe we need to use nodes?
    //If we can't figure out nodes, then we can just not use the contentGen fcn, do it the old fashion way, and then assign id's. or classes with appended numerical indices?? document.getelementsbyclass('projectclass'+1)

  }

  contentGen('education', 'h3', 'Education');

  for (var i = 0; i < UserData.yourEd.school.length; i++) {

    contentGen('education', 'h4', UserData.yourEd.school[i] + ' | ' + UserData.yourEd.location[i]);
    contentGen('education', 'p', UserData.yourEd.degree[i] + ' | ' + UserData.yourEd.gradDate[i]);

  }

  contentGen('experience', 'h3', 'Experience');

  for (var i = 0; i < UserData.yourExp.company.length; i++) {

    contentGen('experience', 'h4', UserData.yourExp.company[i] + ' , ' + UserData.yourExp.position[i] + ' | ' + UserData.yourExp.startDate + ' - ' + UserData.yourExp.endDate[i]);
    contentGen('experience', 'li', UserData.yourExp.action[i]);

  }
}

//function addClickToEdit() { //Will get added at the end of submit handlers (maybe as onhover callback)
var panel = document.getElementById('panel');

if (UserData.edit2hover.length > 0) {

  for (var i = 0; i < UserData.edit2hover.length; i++) {

    var index = UserData.edit2hover[i];

    var wrappers = document.getElementsByClassName('wrapper');
    var bigwrappers = document.getElementsByClassName('bigwrapper');
    var resume = document.getElementById('resume');
    var fieldsets = document.getElementsByClassName('fieldSet');
    console.log(fieldsets);



    var deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', 'img/xIcon.svg');
    deleteImg.addEventListener('click', function () {
      console.log('The index to delete is ' + index);

      // //removeAllText(wrappers[index+1]);


      //replace values in object with initial and repopulate

      //This is going to be a for var in, hasownpropert, getownpropertynames loop maybe? Ask John first thing
      //Goal: For delete, replace this fieldset with initials (userData.defaults). For edit: replace values with the ones they have stored locally... may be more complicated for projects since they are arrays... so how to target/index those elements? Maybe assign ID when they are generated?

      //UserData.Object.keys(UserData)[index]

      //trigger iframe refresh?

    });
    deleteImg.setAttribute('class', 'delete');
    deleteImg.setAttribute('height', '24px');
    deleteImg.setAttribute('width', '24px');
    deleteImg.style.visibility = 'hidden';
    deleteImg.style.zIndex = '2';
    wrappers[index].appendChild(deleteImg);


    var editImg = document.createElement('img');
    editImg.setAttribute('src', 'img/editPencil.svg');
    editImg.addEventListener('click', function () {
      console.log('The index to edit is' + index);
    });
    editImg.setAttribute('class', 'editPencil');
    editImg.setAttribute('height', '24px');
    editImg.setAttribute('width', '24px');
    editImg.style.visibility = 'hidden';
    editImg.style.zIndex = '2';
    wrappers[index].appendChild(editImg);

    bigwrappers[index].addEventListener('mouseover', function () {
      deleteImg.style.position = 'relative';
      editImg.style.position = 'relative';
      deleteImg.style.zIndex = '3';
      editImg.style.zIndex = '3';
      deleteImg.style.visibility = 'visible';
      editImg.style.visibility = 'visible';
      deleteImg.style.backgroundColor= 'white';
      editImg.style.backgroundColor= 'white';
      bigwrappers[index].style.position = 'relative';
      bigwrappers[index].style.zIndex = '3';
      bigwrappers[index].style.backgroundColor= 'white';
      bigwrappers[index].style.paddingTop = '3px';
      bigwrappers[index].style.marginTop = '3px';
      panel.style.display = 'initial';
      panel.style.zIndex = '1';
      
    });
    bigwrappers[index].addEventListener('mouseout', function () {
      deleteImg.style.visibility = 'hidden';
      editImg.style.visibility = 'hidden';
      fieldsets[index].style.zIndex = 'initial';
      panel.style.display = 'none';
      

    });
    wrappers[index].addEventListener('mouseover', function () {
      deleteImg.style.visibility = 'visible';
      editImg.style.visibility = 'visible';
    });
    wrappers[index].addEventListener('mouseout', function () {
      deleteImg.style.visibility = 'hidden';
      editImg.style.visibility = 'hidden';
    });

  }
}

//}

//addClickToEdit();

// function deleteFieldset(deleteIndex) {
//   console.log('The index to delete is' + deleteIndex);
// }

// function editFieldset(editIndex) {
//   console.log('The index to edit is' + editIndex);
// }


genAllContent();
handleError = () => {
    console.log( 'Ha ocurrido un error.' );
  }

getCohorts = () => {
    const cohortsJSON = JSON.parse(cohortsRequest.responseText);
    console.log(cohortsJSON);
    /*cohortsJSON['0'].id*/

};
const requestURLCohorts = '../data/cohorts.json';
const cohortsRequest = new XMLHttpRequest();
cohortsRequest.open('GET', requestURLCohorts);
cohortsRequest.onload = getCohorts;
cohortsRequest.onerror = handleError;
cohortsRequest.send();

/*
getUsers = () => {
    const userJSON = JSON.parse(usersRequest.responseText);
    console.log(userJSON);
};
const requestURLUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const usersRequest = new XMLHttpRequest();
usersRequest.open('GET', requestURLUsers);
usersRequest.onload = getUsers;
usersRequest.onerror = handleError;
usersRequest.send();



getProgress = () => {
    const progressJSON = JSON.parse(progressRequest.responseText);
    console.log(progressJSON);
};
const requestURLProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const progressRequest = new XMLHttpRequest();
progressRequest.open('GET', requestURLProgress);
progressRequest.onload = getProgress;
progressRequest.onerror = handleError;
progressRequest.send();

*/









 
 /*
for (const iterator of object) {
    
} UTILIZAR  "forof"
 utilizar  "arrays.map"
 utilizar "arrays.filter"
 http-server . (para acceder a un servidor de node - debo entrar al shell de node)
*/

 
let buttonEnter = () => {
    document.getElementById('main').style.display = 'none'; 
    document.getElementsByClassName('data')[0].style.display = 'initial'
};

document.getElementById('enter').addEventListener('click', buttonEnter);

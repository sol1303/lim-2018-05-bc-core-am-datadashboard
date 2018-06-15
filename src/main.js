const requestURLCohorts = '../data/cohorts.json';
const requestURLProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const requestURLUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';


const usersRequest = new XMLHttpRequest();
const progressRequest = new XMLHttpRequest();


const cohortsRequest = new XMLHttpRequest();
cohortsRequest.open('GET', requestURLCohorts);
cohortsRequest.send();

cohortsRequest.onload = function() {
    const cohortsJSON = JSON.parse(this.responseText);
    const response = cohortsJSON.response;
    console.log(response);
};



usersRequest.open('GET', requestURLUsers);
progressRequest.open('GET', requestURLProgress);

usersRequest.onload = () => {
   userJSON = JSON.parse(usersRequest.responseText);
};

progressRequest.onload = () => {
    progressJSON = JSON.parse(progressRequest.responseText);
 };

 
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

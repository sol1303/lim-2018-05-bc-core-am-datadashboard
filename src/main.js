let buttonEnter = () => {
    document.getElementById('main').style.display = 'none'; 
    document.getElementsByClassName('data')[0].style.display = 'initial'
    let std = {
        name : 'Ninoshka Solange Lavarello Neyra',
        percent : 100,
        exercise : {
          total : 25,
          completed : 10,
          percent : 30,
        } ,
        reads : {
          total : 45,
          completed : 15,
          percent : 60,
        } ,
        quizzes : {
          total : 25,
          completed : 15,
          percent : 30,
          scoreSum : 60,
          scoreAvg : 30,
         }  
       }
       createCard(std);
       createCard(std);
       createCard(std);
       createCard(std);
       createCard(std);
       createCard(std);
       createCard(std);
  };
  
  
  function createCard(student) {
      let divTab = document.createElement('DIV');
      divTab.setAttribute('class', 'student');
      document.getElementById('data').appendChild(divTab);
  
      let table = document.createElement('TABLE');
      divTab.appendChild(table);
      
      let caption = document.createElement('CAPTION');
      let txtCaption = document.createTextNode(student.name);
      caption.appendChild(txtCaption);
      table.appendChild(caption);
  
  /*first row*/
    row = createCardRow('Completitud Total', student.percent);
    table.appendChild(row);
  
  /*second row*/
    row = createCardRow('Ejercicios Completados', student.exercise.completed);
    table.appendChild(row);
  
  /*third row*/
    row = createCardRow('Quizzes Completados', student.quizzes.completed);
    table.appendChild(row);
  
  /*fourth row*/
    row = createCardRow('Puntuación de Quizzes', student.quizzes.scoreSum);
    table.appendChild(row);
     
  /*fith row*/
    row = createCardRow('Lecturas Completadas', student.reads.completed);
    table.appendChild(row);
  
  /*button*/
  
      let button = document.createElement('BUTTON');
      let txtButton = document.createTextNode('Ver +');
      button.appendChild(txtButton);
      divTab.appendChild(button);
  
  }
  
  const createCardRow = (key, value) => {
    let row = document.createElement('TR');
    
  
    let cell = document.createElement('TD');
    let txt = document.createTextNode(key);
    cell.appendChild(txt);
    row.appendChild(cell);
  
    cell = document.createElement('TD');
    txt = document.createTextNode(value);
    cell.appendChild(txt);
    row.appendChild(cell);
  
    return row; 
  }

  


handleError = () => {
    console.log( 'Ha ocurrido un error.' );
}
   
  
const requestURLCohorts = '../data/cohorts.json';
const cohortsRequest = new XMLHttpRequest();
const requestURLUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const usersRequest = new XMLHttpRequest();
const requestURLProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const progressRequest = new XMLHttpRequest();


getCohorts = () => {
  const cohortsJSON = JSON.parse(cohortsRequest.responseText);
  let cohort;
  for (const cohortFound of cohortsJSON ){
    if(cohortFound===cohortsJSON[31]){ 
      cohort = cohortFound;
    }
  }
  getUsers(cohort); //se pasa el arreglo del cohort en cuestion
  document.getElementById('enter').addEventListener('click', buttonEnter);
};

getUsers = (cohorts) => {
  usersRequest.open('GET', requestURLUsers);
  usersRequest.onload =() =>{
  const usersJSON = JSON.parse(usersRequest.responseText);
  const usersCohort = usersJSON.filter(userFilter => userFilter.signupCohort === cohorts.id); //filtrado usuarios por cohort


  getProgress(cohorts,usersCohort); //pasa el cohort y los usuarios del cohort
  };
  usersRequest.onerror = handleError;
  usersRequest.send();
};

getProgress = (cohorts,users) =>{
  progressRequest.open('GET', requestURLProgress);
  progressRequest.onload = () =>{
   const progressJSON = JSON.parse(progressRequest.responseText);
      const options = { //este objeto es el que piden para la funcion que engloba las 3 funciones en el data.js
          cohort: cohorts,
          cohortData: {
          users: users, 
          progress: progressJSON
          },
          orderBy: '', //String con criterio de ordenado (ver sortUsers).
          orderDirection: '', //String con dirección de ordenado (ver sortUsers).
          search: '' //String de búsqueda (ver filterUsers)
       };
      datadashboard.processCohortData(options); //aqui se utiliza el objeto options


  };
  progressRequest.onerror = handleError;
  progressRequest.send(); 
};



cohortsRequest.open('GET', requestURLCohorts);
cohortsRequest.onload = getCohorts;
cohortsRequest.onerror = handleError;
cohortsRequest.send();


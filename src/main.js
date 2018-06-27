let createCard = (student) => {
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
  
  };
  
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
  };
  
handleError = (xhr,status,error) => {
    console.log( 'Ha ocurrido un error.' );
};

$.ajax({
  type: "GET",
  url:'../data/cohorts.json',
  success: function passingCohort (data){
    let cohorts = data;
    let cohort;
    let listOptions = (id) => {
      let cohortOption = document.createElement('OPTION');
      cohortOption.setAttribute('class', 'sedeCohorts')
      let txtCohort = document.createTextNode(id);
      cohortOption.appendChild(txtCohort);
      document.getElementById('cohorts').appendChild(cohortOption);
    
      return cohortOption;
    };
    let selectSede = () => {
      for (const cohort of cohorts ){
      if (document.getElementById('sede').value === 'LIM') {
          if(cohort.id.includes('lim-')){
            listOptions(cohort.id);
          }
      }
      if (document.getElementById('sede').value === 'AQP'){
        if(cohort.id.includes('aqp-')){
          listOptions(cohort.id);
        }
      } else if (document.getElementById('sede').value === 'CDMX'){
        if(cohort.id.includes('cdmx-')){
          listOptions(cohort.id);
        }
      }
      else if (document.getElementById('sede').value === 'GUADALAJARA') {
        if(cohort.id.includes('gdl-')){
          listOptions(cohort.id);
        }
      }
      else if (document.getElementById('sede').value === 'SANTIAGO'){
        if(cohort.id.includes('scl-')){
          listOptions(cohorts.id);
        }
      }
    }}; 

    for (const cohort of cohorts ){
          if(cohort.id.includes('lim-')){
            listOptions(cohort.id);
          }
      };

    document.getElementById('sede').addEventListener('change', selectSede);
    document.getElementById('cohorts').addEventListener('change', selectCohort = () => {
      let cohortSelected= document.querySelector('#cohorts').value;
        for (const cohor of cohorts){
          if (cohor.id == cohortSelected){
            cohort= cohor;
            getUsers(cohort);
          }
        }
      });
  },
  error: handleError
});

function getUsers(cohort)  {
      $.ajax({
        type: "GET",
        url:'../data/cohorts/lim-2018-03-pre-core-pw/users.json',
        success: function passingUsers (data){
          let users = data;
          const usersCohort = users.filter(userFilter => userFilter.signupCohort === cohort.id); //filtrado usuarios por cohort
          getProcess(cohort, usersCohort);
        }, 
        error: handleError
      });
          
};

function getProcess (cohort, usersCohort) {
    
    $.ajax({
      type: "GET",
      url:'../data/cohorts/lim-2018-03-pre-core-pw/progress.json',
      success: function(data){
        let progress = data; // check
        let keyProgress = Object.keys(progress);  //ckeck
        let usersProgress = {};
        let totalUsers=0;
          for (const user of usersCohort){
            for(const key of keyProgress){
               if(user.id===key){
                 usersProgress[key] = progress[key]; //obteniendo nuevo arreglo de progress
               }
            }
            totalUsers++;
          }

        const options = { //este objeto es el que piden para la funcion que engloba las 3 funciones en el data.js
          cohort: cohort,
          cohortData: {
          users: usersCohort, 
          progress: usersProgress
          },
          orderBy: '', //String con criterio de ordenado (ver sortUsers).
          orderDirection: '', //String con dirección de ordenado (ver sortUsers).
          search: '' //String de búsqueda (ver filterUsers)
       };

        document.getElementById('enter').addEventListener('click', buttonEnter = () => {
        cohortName.innerHTML = document.querySelector('#cohorts').value;
        totalA.innerHTML = totalUsers;
        document.getElementById('main').style.display = 'none'; 
        document.getElementsByClassName('data')[0].style.display = 'initial';
        processCohortData(options);
        }); 
        document.getElementById('myInput').addEventListener('keyup',  filterUsers);
      },
      error: handleError
    });
};

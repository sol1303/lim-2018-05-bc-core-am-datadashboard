let computeUsersStats = (users, progress, courses) => {
  /*
  for (const user of users){
    let std = {
      name : user.name,
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
      },  
    }
    console.log(std); */
};

let sortUsers = (users, orderBy, orderDirection) => {};
let filterUsers = (users, search) => {
        var input, filter, div, caption, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.querySelectorAll('.student')
        caption = document.getElementsByTagName('caption');
        for (i = 0; i < caption.length; i++) {
          c = caption[i].textContent.toUpperCase();
            if (c.indexOf(filter) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        }
};

window.datadashboard= {

processCohortData: (options)  => {
   computeUsersStats (options.cohortData.users, options.cohortData.progress, options.cohort.coursesIndex);
   sortUsers (options.cohortData.users, options.orderBy, options.orderDirection);
   filterUsers (options.cohortData.users, options.search);

   console.log(options.cohort.coursesIndex); //verificando que se guardo el array de cohort y sus cursos
   console.log(options.cohortData.users); //veerificando que se guardo el array de estudiantes
  
  }




}







  
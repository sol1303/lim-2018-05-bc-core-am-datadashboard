


computeUsersStats = (users, progress, courses) => {


};
sortUsers = (users, orderBy, orderDirection) => {


};
filterUsers = (users, search) => {
    for (const user of users){

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






  
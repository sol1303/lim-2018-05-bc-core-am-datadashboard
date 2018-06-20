


window.computeUsersStats = (users, progress, courses) => {};
window.sortUsers = (users, orderBy, orderDirection) => {};
window.filterUsers = (users, search) => {};

window.datadashboard= {

processCohortData: (options)  => {
   computeUsersStats (options.users, options.progress, /*falta courses*/ )
   console.log(options.cohort); //verificando que se guardo el array de cohort
   console.log(options.cohortData.users); //veerificando que se guardo el array de estudiantes


}

}

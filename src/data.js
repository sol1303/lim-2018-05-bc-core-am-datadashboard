let computeUsersStats = (users, progress, courses) => {};
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
   computeUsersStats (options.users, options.progress, /*falta courses*/ )
   //console.log(options.cohort); //verificando que se guardo el array de cohort
   //console.log(options.cohortData.users); //veerificando que se guardo el array de estudiantes


}

}

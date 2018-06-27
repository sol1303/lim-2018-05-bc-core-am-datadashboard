
window.computeUsersStats = (users, progress, courses) => {
  let keyProgress = Object.keys(progress);
  let onlyProgress = {};
  for(const key of keyProgress){  //obtener progreso sin objetos vacios
    if(progress[key].hasOwnProperty('intro')){
        onlyProgress[key] = progress[key];
    }
  }

let keyOnly = Object.keys(onlyProgress);


let usuarios = [];
usuarios = users.map((user)=> {

  let totalPercent = (id) =>{
    for(const key of keyOnly ){
      if(id===key){
        return onlyProgress[key].intro.percent;
      }else{
      if(typeof onlyProgress[id] == 'undefined'){
        return 0;
      }   
     }
    }
  }

  let totalERQ  = (id, type) => {
    let unit;
    let keyUnit;
    let parts;
    let counterTotal=0;
    
    for(const key of keyOnly){
      if(id===key){
        keyUnit = Object.keys(onlyProgress[key].intro.units);
        for(const k of keyUnit){
          parts = Object.keys(onlyProgress[key].intro.units[k].parts);
          for (const par of parts){
            if(type ===onlyProgress[key].intro.units[k].parts[par].type){
              counterTotal++;
            }
          }
        }
        return counterTotal; 
      }else{
        if(typeof onlyProgress[id] === 'undefined'){
          return 0;
        } 
      }  
    } 
  }

  let completedERQ  = (id, type) => {
    let unit;
    let keyUnit;
    let parts;
    let counterTotal=0;

    for(const key of keyOnly){
      if(id===key){
        keyUnit = Object.keys(onlyProgress[key].intro.units);
        for(const k of keyUnit){
          parts = Object.keys(onlyProgress[key].intro.units[k].parts);
          for (const par of parts){
            if(type ===onlyProgress[key].intro.units[k].parts[par].type){
              if(onlyProgress[key].intro.units[k].parts[par].completed === 1){
                counterTotal++;
              } 
            }
          }
        }
        return counterTotal; 
      }else{
        if(typeof onlyProgress[id] === 'undefined'){
          return 0;
        } 
      }  
    } 
  }

  let percentERQ  = (id, type) =>{
    let total = totalERQ(id, type);
    let completed = completedERQ(id, type);
    let percent= (completed/total)*100;
    if(total===0){
      return 0;
    }else{
      return percent;
    }
    
  }

  let score  = (id, type) =>{
    let unit;
    let keyUnit;
    let parts;
    let scoreTotal=0;

    for(const key of keyOnly){
      if(id===key){
        keyUnit = Object.keys(onlyProgress[key].intro.units);
        for(const k of keyUnit){
          parts = Object.keys(onlyProgress[key].intro.units[k].parts);
          for (const par of parts){
            if(type ===onlyProgress[key].intro.units[k].parts[par].type){
              if(onlyProgress[key].intro.units[k].parts[par].completed === 1){
                scoreTotal = scoreTotal + onlyProgress[key].intro.units[k].parts[par].score;
              }  
            }
          }
        }
        return scoreTotal; 
      }else{
        if(typeof onlyProgress[id] === 'undefined'){
          return 0;
        } 
      }  
    } 
  }

  let scoreProm  = (id, type) => {
    let scoretype = score(id, type);
    let total = completedERQ (id, type);
    let prom = scoretype/total ;
    if(total === 0){
      return 0;

    }else{
      return prom;
    }
    
  }

    let usersWithStats = { //nuevo objeto en el objeto users 
      name: user.name,
      stats:{
        percent: totalPercent(user.id),
        exercise: {
          total : totalERQ(user.id, 'practice'),
          completed : completedERQ(user.id, 'practice'),
          percent : percentERQ(user.id, 'practice')
        },
        reads : {
          total : totalERQ(user.id, 'read'),
          completed : completedERQ(user.id, 'read'),
          percent : percentERQ(user.id, 'read')
        } ,
        quizzes : {
          total : totalERQ(user.id, 'quiz'),
          completed : completedERQ(user.id, 'quiz'),
          percent : percentERQ(user.id, 'quiz'),
          scoreSum : score(user.id, 'quiz'),
          scoreAvg : scoreProm(user.id, 'quiz')
        }, 
      } 
    }

  return usersWithStats;
  });

  console.log(usuarios); 
  return usuarios;

 

};


window.sortUsers = (users, orderBy, orderDirection) => {};
window.filterUsers = (users, search) => {
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

window.processCohortData = (options)  => {
   let users = computeUsersStats (options.cohortData.users, options.cohortData.progress, options.cohort.coursesIndex);
   sortUsers (users, options.orderBy, options.orderDirection);
   filterUsers (users, options.search);
  }








  
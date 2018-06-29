
window.computeUsersStats = (users, progress, courses) => {
  let keyProgress = Object.keys(progress);
  let onlyProgress = {};
  for(const key of keyProgress){  //obtener progreso de alumnas sin objetos vacios
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
    let percent= Math.round((completed/total)*100);
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
    let prom = Math.round(scoretype/total) ;
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
        exercises: {
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


window.sortUsers = (users, orderBy, orderDirection) => {
 /* if (orderBy == 'Nombre' && orderDirection == 'Asc') {
    users.sort();
  }
*/
  
};
window.filterUsers = (users, search) => {
  let  userFilter = [];
    for (const user of users ){
      if(user.name.toUpperCase().includes(search)){
        userFilter.push(user);
      }
    }
  return userFilter;
};

window.processCohortData = (options)  => {
  let users;
    users = computeUsersStats (options.cohortData.users, options.cohortData.progress, options.cohort.coursesIndex);
  
   //users = sortUsers (users, options.orderBy, options.orderDirection);
   if (options.search !== '') {
    users = filterUsers (users, options.search);
    }
    
   return users;
  }








  
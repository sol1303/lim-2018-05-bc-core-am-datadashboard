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
  
  document.getElementById('enter').addEventListener('click', buttonEnter);
  
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
    row.setAttribute('id', 'myTr2');
    
  
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
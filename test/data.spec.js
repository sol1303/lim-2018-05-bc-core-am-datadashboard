describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 1, percent: 50}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 1,
          percent: 50,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {

    let user1 = {
      stats: {
        name : "Salaverry",
        percent: 86,
        exercises : {
          total: 8,
          completed: 4,
          percent: 50
        },
        reads : {
          total: 10,
          completed: 5,
          percent: 50
        },
        quizzes : {
          total: 8,
          completed: 6,
          percent: 100,
          scoreSum: 380,
          scoreAvg: 70
        }
      }
    }
    let user2 = {
      stats: {
        name : "Valle",
        percent: 70,
        exercises : {
          total: 8,
          completed: 5,
          percent: 80
        },
        reads : {
          total: 10,
          completed: 2,
          percent: 20
        },
        quizzes : {
          total: 8,
          completed: 7,
          percent: 25,
          scoreSum: 110,
          scoreAvg: 40
        }
      }
    }
    let user3 = {
      stats: {
        name : "Vivar",
        percent: 90,
        exercises : {
          total: 8,
          completed: 3,
          percent: 70
        },
        reads : {
          total: 10,
          completed: 3,
          percent: 30
        },
        quizzes : {
          total: 8,
          completed: 1,
          percent: 50,
          scoreSum: 320,
          scoreAvg: 80
        }
      }
    }

    let usersTest = [user1,user2,user3];

   
    
    it('debería retornar arreglo de usuarios ordenado por nombre ASC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Nombre", "Asc"), [user1,user2,user3]);

    });

    it('debería retornar arreglo de usuarios ordenado por nombre DESC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Nombre", "Desc"), [user3,user2,user1]);
      
    });

    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Completitud Total", "Asc"), [user3,user1,user2]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Completitud Total", "Desc"), [user2,user1,user3]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Ejercicios Completados", "Asc"), [user2,user3,user1]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Ejercicios Completados", "Desc"), [user1,user3,user2]);
      
      
      
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Quizzes Completados", "Asc"), [user1,user3,user2]);
     
      
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Quizzes Completados", "Desc"), [user2,user3,user1]);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Puntuación de Quizzes", "Asc"), [user1,user3,user2]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC' , () => {
      assert.deepEqual(sortUsers(usersTest, "Puntuación de Quizzes", "Desc"), [user2,user3,user1]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC' , () => {
     
      assert.deepEqual(sortUsers(usersTest, "Lecturas Completadas", "Asc"), [user1,user3,user2]);
      
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC' , () => {
     
      assert.deepEqual(sortUsers(usersTest, "Lecturas Completadas", "Desc"), [user2,user3,user1]);
      
    });

  });

  describe('filterUsers(users, filterBy)', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    const processed = computeUsersStats(users, progress, courses);

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)' , () =>{

      assert.deepEqual(filterUsers(processed, 'SOFIA')[0].name, 'Ana Sofia');
      assert.deepEqual(filterUsers(processed, 'sofia')[0].name, 'Ana Sofia');
      assert.deepEqual(filterUsers(processed, 'sofia').length, 2);
    
      
    });

  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    
    let options = {
      cohort: "lim-2018-03-pre-core-pw",
      cohortData : {
        users,
        progress,
        coursesIndex : ["intro"]
      },
      orderBy:"Nombre",
      orderDirection:"Asc",
      search : "made"
    }
    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',  () =>{

      assert.deepEqual(processCohortData(options),[{
        name : "Madeleine Sánchez",
        stats: {
          percent: 47,
          exercises : {
            total: 2,
            completed: 0,
            percent: 0
          },
          reads : {
            total: 11,
            completed: 6,
            percent: 55
          },
          quizzes : {
            total: 3,
            completed: 1,
            percent: 33,
            scoreSum: 90,
            scoreAvg: 90
          }
        }
      }]);
    });

  });

});



use tecnmclassroom;

INSERT INTO materia( cveMat, nombre, HorTeo, HorPrac, Creditos)
        VALUES ('M1', 'CALCULO INTEGRAL' , 4 , 0 , 4),
               ('M2', 'S. OPERATIVOS' , 4 , 0 , 4),
               ('M3', 'TALLER DE BD' , 4 , 2 , 6),
               ('M4', 'QUIMICA' , 4 , 2 , 6),
               ('M5', 'CALCULO DIFERENCIAL' , 4 , 0 , 4),
               ('M6', 'FUNDAMENTOS BD.' , 3 , 2 , 5);

INSERT INTO alumno( NOCONT, NOMBRE, GENERO, FECHANAC)
        VALUES ('A1', 'R.MARTINEZ', 'F','1999-08-02'),
               ('A2', 'J.RAMIREZ', 'M','2000-04-03'),
               ('A3', 'M.SANCHEZ', 'M','1998-05-12'),
               ('A4', 'G.PLAZA', 'F','2000-09-07'),
               ('A5', 'M.VAZQUEZ', 'M','1999-05-11'),
               ('A6', 'S.AYALA', 'F','2001-07-07'),
               ('A7', 'Y.BARRAZA', 'M','1998-06-06');

INSERT INTO maestro( CVEMAE, NOMBRE)
        VALUES ( 'M1', 'R.ROJAS' ),
               ( 'M2', 'J.PEREZ' ),
               ( 'M3', 'G.GARCIA' ),
               ( 'M4', 'R.RAMOS' ),
               ( 'M5', 'M.MORALES' );

INSERT INTO grupo(CVEMAT, NOGPO, CVEMAE, HORARIO, SALON)
        VALUES ('M1', 1, 'M2', '08-09' , '10'),
               ('M1', 2, 'M4', '10-11' , '10'),
               ('M2', 1, 'M1', '11-12' , '20'),
               ('M2', 2, 'M3', '11-12' , '35'),
               ('M3', 1, 'M3', '17-18' , '35'),
               ('M3', 2, 'M3', '09-10' , 'B4');

INSERT INTO lista( CVEMAT, NOGPO, NOCONT)
        VALUES ( 'M1' , 1 , 'A1' ),
               ( 'M1' , 1 , 'A2' ),
               ( 'M1' , 1 , 'A5' ),
               ( 'M1' , 2 , 'A3' ),
               ( 'M1' , 2 , 'A4' ),
               ( 'M2' , 1 , 'A1' ),
               ( 'M2' , 1 , 'A3' ),
               ( 'M2' , 2 , 'A2' ),
               ( 'M2' , 2 , 'A4' ),
               ( 'M3' , 1 , 'A1' ),
               ( 'M3' , 1 , 'A2' ),
               ( 'M3' , 1 , 'A4' );
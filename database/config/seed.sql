use tecnmclassroom;

INSERT INTO materia( cveMat, nombre, HorTeo, HorPrac, Creditos)
    VALUES ('M1', 'CALCULO INTEGRAL' , 4 , 0 , 4),
            ('M2', 'S. OPERATIVOS' , 4 , 0 , 4),
            ('M3', 'TALLER DE BD' , 4 , 2 , 6),
            ('M4', 'QUIMICA' , 4 , 2 , 6),
            ('M5', 'CALCULO DIFERENCIAL' , 4 , 0 , 4),
            ('M6', 'FUNDAMENTOS BD.' , 3 , 2 , 5);

INSERT INTO alumno( noCont, nombre, genero, fechaNac, email)
    VALUES ( 'A1', 'Uriel Emiliano', 'M', '1999-08-02', 'ugalindo448@gmail.com'),
           ( 'A2', 'Luis Leal', 'M', '1999-08-02', 'luis@googgle.com'),
           ( 'A3', 'Alfredo Jimenez', 'M', '1999-08-02', 'alfredito@gmail.com'),
           ( 'A4', 'Chaires Pasalagua', 'M', '1999-08-02', 'chaires@gmail.com');

INSERT INTO maestro( cveMae, nombre, email)
    VALUES ('M1', 'Panchito', 'panchito@google.com'),
           ('M2', 'Beni', 'beni@google.com'),
           ('M3', 'Magdalena', 'magdalena@google.com'),
           ('M4', 'Parra', 'parra@google.com');

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
            ( 'M1' , 1 , 'A4' ),
            ( 'M1' , 2 , 'A3' ),
            ( 'M1' , 2 , 'A4' ),
            ( 'M2' , 1 , 'A1' ),
            ( 'M2' , 1 , 'A3' ),
            ( 'M2' , 2 , 'A2' ),
            ( 'M2' , 2 , 'A4' ),
            ( 'M3' , 1 , 'A1' ),
            ( 'M3' , 1 , 'A2' ),
            ( 'M3' , 1 , 'A4' );
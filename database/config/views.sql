CREATE VIEW vGrupo ( nombreGrupo, noGpo )
    AS SELECT m.nombre, g.noGpo
        FROM grupo g
            INNER JOIN materia m on g.cveMat = m.cveMat;

CREATE VIEW vGrupoMaestros ( nombreGrupo, noGpo, emailMaestro )
    AS SELECT m.nombre, g.noGpo, ma.email
        FROM grupo g 
            INNER JOIN maestro ma ON ma.cveMae = g.cveMae
            INNER JOIN materia m on g.cveMat = m.cveMat;

CREATE VIEW vGrupoAlumnos ( nombreGrupo, noGpo, emailAlumno)
    AS SELECT m.nombre, g.noGpo, a.email
        FROM lista l
            INNER JOIN grupo g ON l.cveMat = g.cveMat AND l.noGpo = g.noGpo
            INNER JOIN materia m on g.cveMat = m.cveMat
            INNER JOIN alumno a on l.noCont = a.noCont;
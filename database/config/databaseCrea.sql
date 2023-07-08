create database tecnmClassroom;
use tecnmClassroom;

create table materia(cveMat varchar(4) not null,
                     nombre varchar(25),
                     HorTeo int,
                     HorPrac int,
                     Creditos int,
                     constraint materiaPK primary key (cveMat),
                     constraint materiaCK1 check(HorTeo between 0 and 10),
                     constraint materiaCK2 check(HorPrac between 0 and 10),
                     constraint materiaCK3 check(Creditos between 0 and 10));

create table alumno(noCont varchar(4) not null,
            nombre varchar(30),
					  genero varchar(1),
					  fechaNac date,
            email varchar(30)
					constraint alumnoPK primary key (noCont),
					Constraint alumnoCK1 check (genero = 'F' or genero = 'M'));

create table maestro(cveMae varchar(4) not null ,
                    nombre varchar(30),
                    email varchar(30)
          constraint maestroPK primary key (cveMae)
);

create table grupo(cveMat varchar(4) not null,
                   noGpo int not null,
                   cveMae varchar(4),
                   horario varchar(5),
                   salon varchar(3),
                   constraint grupoPK primary key (cveMat,noGpo),
                   Constraint grupoFK1 foreign key (cveMat) references materia(cveMat),
				   Constraint grupoFK2 foreign key (cveMae) references maestro(cveMae));

create table lista(cveMat varchar(4) not null,
                   noGpo int not null,
                   noCont varchar(4) not null,
                   constraint listaPK primary key (cveMat,noGpo,noCont),
                   Constraint listaFK1 foreign key (cveMat,noGpo) references grupo(cveMat,noGpo),
                   Constraint listaFK2 foreign key (noCont) references alumno(noCont));
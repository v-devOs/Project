import mysql from 'mysql2'


const databasePool = mysql.createPool({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

export const getStudents = async () => {
  return new Promise (( resol, reject ) => {
    databasePool.query('SELECT * FROM alumno', ( err, res ) => {
      err ? undefined : resol( res )
    })
  }) 

  // return new Promise( (resol, reject ) => {
  //   database.conecction.query<IALumno[]>('SELECT * from alumno where noCont = ?',[noCont], ( err, res ) => {
  //     err ? [] : resol(res)
  //   })
  // })
}
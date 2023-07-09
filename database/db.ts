import mysql from 'mysql2'

const databasePool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // port: 3306, // Cambiar este puerto por el puerto que deseemos en nuestro equipo
})

export const getAllCourses = async() => {


  return new Promise(( resol, reject ) => {
    databasePool.query('SELECT * FROM vCursosMaesAlum', ( err, data ) => {
      err ? reject(err) : resol( data ) 
    })
  })

}
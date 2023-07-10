import { IGroup, IGroupMember } from '@/interfaces'
import mysql, { RowDataPacket } from 'mysql2'

const databasePool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // port: 3306, // Cambiar este puerto por el puerto que deseemos en nuestro equipo
})

export const getAllGroups = async(): Promise<IGroup[]> => {

  return new Promise(( resol, reject ) => {
    databasePool.query<IGroup[]>('SELECT * FROM vGrupo', ( err, data ) => {
      err ? reject(err) : resol( data ) 
    })
  })
}

export const getAllGroupsTeacher = async (): Promise<IGroupMember[]> => {

  return new Promise(( resol, reject ) => {
    databasePool.query<IGroupMember[]>('SELECT * FROM vGrupoMaestros', ( err, data ) => {
      err ? reject(err) : resol( data ) 
    })
  })
}

export const getAllGroupsStudents = async (): Promise<IGroupMember[]> => {

  return new Promise(( resol, reject ) => {
    databasePool.query<IGroupMember[]>('SELECT * FROM vGrupoAlumnos', ( err, data ) => {
      err ? reject(err) : resol( data ) 
    })
  })
}
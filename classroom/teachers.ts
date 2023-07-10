import { database } from "@/database"
import { classroom, courses } from "."
import { classroom_v1 } from "googleapis"


export const inivteTeacher = async () => {
  try {

    const teachersToInvite = await database.getAllGroupsTeacher()
    const actualCourses = await courses.getCourses('all')

    if( !teachersToInvite ) throw new Error('Error al obtener los maestros de la base de datos')
    if( !actualCourses ) throw new Error('Error al obtener los cursos')


    

    return true
    
  } catch (error) {
    
    console.log(error)
    return false
  }
}

export const getIdCourseToSendInvitation = ( courses:classroom_v1.Schema$Course[], courseToSearch: string) => {
  return courses.find( c => c.name === courseToSearch )?.id
}
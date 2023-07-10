import { MemberRole } from "@/types";
import { classroom } from "./classroom";
import { database } from "@/database";
import { courses } from ".";
import { classroom_v1 } from "googleapis";
import { IGroupMember } from "@/interfaces";


export const inviteMember = async ( role: MemberRole ) => {
  
  try {

    const membersToInvite = await getMembersToInvite(role)
    const actualCourses = await courses.getCourses('all')

    if( !membersToInvite ) throw new Error(`Error al obtener los miembros de rol ${role} de la base de datos`)
    if( !actualCourses ) throw new Error('Error al obtener los cursos')
    

    for await( const member of membersToInvite ){
      
      const nameCourse = `${member.nombreGrupo} ${member.noGpo}`
      const idCourse = getIdCourseToSendInvitation( actualCourses, nameCourse)
      const userId = getUserIdByRole( role, member )

      if( !idCourse ) throw new Error('Error al buscar nombre del curso, verificar que exista')
      
      // Codigo funcional, no descomentar hasta que se tengas correos electronicos validos en la base de datos
      // classroom.invitations.create({
      //   requestBody: {
      //     userId,
      //     courseId: idCourse, // idcourseId de prueba, generar modalidad dinamica,
      //     role // TEACHER, STUDENT
      //   }
      // })

      console.log({ nameCourse, idCourse, userId })
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getMembersToInvite = async ( role: MemberRole ) => {
  try {
    return role === 'TEACHER'
      ? await database.getAllGroupsTeacher()
      : await database.getAllGroupsStudents()
  } catch (error) {
    return undefined
  }
}

const getIdCourseToSendInvitation = ( courses:classroom_v1.Schema$Course[], courseToSearch: string) => {
  return courses.find( c => c.name === courseToSearch )?.id
}

const getUserIdByRole =  ( role: MemberRole, member: IGroupMember ) => {
  return role === 'TEACHER'
    ? member.emailMaestro
    : member.emailAlumno
}

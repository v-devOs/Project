import { database } from "@/database"
import { classroom } from "./classroom"


// TODO: Debera mejorarse para poder invitar mas de un estudiante en una sola llamada
export const inviteStudent = async () => {

  // const resp = await database.getStudents()

  // console.log(resp)

  try {

    await classroom.invitations.create({
      requestBody: {
        userId: 'ugalindo710@gmail.com',
        courseId: '615895981215', // idcourseId de prueba, generar modalidad dinamica,
        role: 'STUDENT' // TEACHER, STUDENT
      }
    })

    return true
    
  } catch (error) {
    
    console.log(error)
    return false
  }
}
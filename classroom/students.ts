import { classroom } from "./classroom"


// TODO: Debera mejorarse para poder invitar mas de un estudiante en una sola llamada
export const inviteStudent = async () => {
  try {

    await classroom.invitations.create({
      requestBody: {
        userId: 'ugalindo710@gmail.com',
        courseId: '615857821644', // idcourseId de prueba, generar modalidad dinamica,
        role: 'STUDENT' // TEACHER, STUDENT
      }
    })

    return true
    
  } catch (error) {
    
    console.log(error)
    return false
  }
}
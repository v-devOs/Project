import { classroom_v1 } from "googleapis"
import { classroom } from "./"


export const getCourses = async( nameCourse = 'all' ): Promise<classroom_v1.Schema$Course[] | undefined | classroom_v1.Schema$Course> => {

  try {
    
    const { data } = await classroom.courses.list()
    const { courses } = data

    return nameCourse === 'all' ? courses : courses?.find( course => course.name === nameCourse)
  
  } catch (error) {
    
    return []
  }
}

export const createCourse = async() => {
  
  try {
    const courseCreated = await classroom.courses.create({
      requestBody: {
        ownerId: 'me',
        name: 'Ejemplo 3'
      }
    })
  
    return courseCreated
  } catch (error) {
    
    console.log(error)

    return undefined
  }
}

export const deleteAllCourses = async () => {
  // TODO: Realizar metodo para eliminar los cursos
}
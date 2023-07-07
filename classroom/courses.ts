import { classroom_v1 } from "googleapis"
import { classroom } from "./"


export const getCourses = async( nameCourse: string): Promise<classroom_v1.Schema$Course[] | undefined | classroom_v1.Schema$Course> => {

  try {
    
    const { data } = await classroom.courses.list()
    const { courses } = data

    return nameCourse === 'all' ? courses : courses?.find( course => course.name === nameCourse)
  
    
  } catch (error) {
    
    return []
  }
  
}

export const getCourseByName = async( name: string ) => {
  const { data } = await classroom.courses.list()
  const { courses } = data

  return courses?.find( course => course.name === name )
}


export const createCourse = async() => {
  const courseCreated = await classroom.courses.create({
    requestBody: {
      ownerId: 'me',
      name: 'Ejemplo 3'
    }
  })

  return courseCreated
}

export const deleteAllCourses = () => {
  // TODO: Realizar metodo para eliminar los cursos
}
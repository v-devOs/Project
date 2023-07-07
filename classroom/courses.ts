import { classroom_v1 } from "googleapis"
import { classroom } from "./"
import { GaxiosResponse } from 'gaxios';


export const getCourses = async( nameCourse: string): Promise<classroom_v1.Schema$Course[] | undefined > => {

  try {
    
    const { data } = await classroom.courses.list()
    const { courses } = data

    return nameCourse === 'all' ? courses : courses?.filter( course => course.name === nameCourse)
  
  } catch (error) {
    
    return undefined
  }
}

export const createCourse = async() => {
  try {
    const courseCreated = await classroom.courses.create({
      requestBody: {
        ownerId: 'me',
        name: 'Ejemplo desde lap4'
      }
    })
  
    return courseCreated
  } catch (error) {
    
    console.log(error)

    return undefined
  }
}

export const deleteAllCourses = async (): Promise<boolean> => {
  
  try {
    
    const courses = await getCourses('all')

    if( !courses ) throw new Error('Error al obtener los cursos, verificar logs')
    
    for await ( const course of courses ){

      const newCourseState = await changeStateOfCourseToDelete(course)
      

      if( !newCourseState ) throw new Error('Error al realizar cambio de estado en el curso')

       classroom.courses.delete({
        id: newCourseState.id!
      })
    }

    return true

  } catch (error) {
    console.log(error)

    return false
  }
}

export const deletecourse = async ( course: classroom_v1.Schema$Course ) => {
  
  try {

    const newCourseState = await changeStateOfCourseToDelete( course )

    if( !newCourseState ) throw new Error('Error al realizar cambio de estado en el curso')

    await classroom.courses.delete({
      id: newCourseState.id!
    })

    return true

  } catch (error) {
    console.log(error)
    return false
  }
}

const changeStateOfCourseToDelete = async ( course: classroom_v1.Schema$Course ) => {
  
  try {
    const { data } = await classroom.courses.patch({
      id: course.id!,
      updateMask: 'courseState',
      requestBody: {
        ...course,
        courseState: 'ARCHIVED'
      }
    })
  
    return data
  
  } catch (error) {
    console.log(error)
    return undefined
  }
}



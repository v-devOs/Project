import { classroom_v1 } from "googleapis"
import { classroom } from "./"


export const getCourses = async(): Promise<classroom_v1.Schema$ListCoursesResponse> => {
  
  const { data } = await classroom.courses.list()

  return data
}

export const getCourseByName = async( name: string) => {
  // TODO: Realizar metodo para obtener un solo curso
}


export const createCours = async() => {
  // TODO: Realizar metodo para crear un solo curso
}

export const deleteAllCourses = () => {
  // TODO: Realizar metodo para eliminar los cursos
}
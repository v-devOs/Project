import type { NextApiRequest, NextApiResponse } from 'next'
import { classroom_v1 } from 'googleapis'
import { courses } from '@/classroom'
import { GaxiosResponse } from 'gaxios'

type Data = { message: string } | classroom_v1.Schema$ListCoursesResponse | GaxiosResponse<classroom_v1.Schema$Course>

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

  
  switch (req.method) {
    case 'POST':
      return createCourse( req, res )
    case 'GET':
      return getCourses( req, res )
  
    default:
      return res.status(400).json({ message: 'Bad request' })
  }

}

const createCourse = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  try {
    const courseCreated = await courses.createCourse()
    res.status(200).json( courseCreated )
  } catch (error) {
    
    res.status(200).json({ message: 'Error al crear curso, verificar logs de la consola'})

  }
}

const getCourses = async ( req: NextApiRequest, res:NextApiResponse<Data> ) => {

  const { nameCourse = 'all' } = req.query as { nameCourse: string }

  try {
    const data = await courses.getCourses( nameCourse )

    if( data === undefined ){
       throw new Error(`Curso no encontrado con el nombre de ${nameCourse}`)
       return res.status(400).json({message: ''})
    }

    res.status(200).json(data)
  } catch (error) {
    
    console.log(error)

    res.status(400).json({message: 'Error al mostrar cursos, verificar logs de la consonla'})
  }
}

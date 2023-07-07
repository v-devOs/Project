import type { NextApiRequest, NextApiResponse } from 'next'
import { courses } from '@/classroom'
import { classroomResponse } from '@/types'

type Data = { message: string } | classroomResponse

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

  const courseCreated = await courses.createCourse()

  if( !courseCreated ) res.status(200).json({ message: 'Error al crear curso, verificar logs de la consola'})

  res.status(200).json( courseCreated )
}

const getCourses = async ( req: NextApiRequest, res:NextApiResponse<Data> ) => {

  const { nameCourse = 'all' } = req.query as { nameCourse: string }

  const course = await courses.getCourses(nameCourse)

  if( !course ) return res.status(400).json({ message: `Error al buscar curso`})

  return res.status(200).json( course )
  
}

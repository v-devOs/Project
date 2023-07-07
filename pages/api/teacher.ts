import { courses } from '@/classroom'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  try {
    const teacher = await courses.setTeacher()

    // console.log(teacher)

    res.status(200).json({ message: 'Maestro agregado correctamente'})
  } catch (error) {
    console.log({error})
    res.status(400).json({ message: 'Error al agregar maestro'})

  }

  

}
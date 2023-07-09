import { database } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  try {
    
    const resp = await database.getAllCourses() as any

    console.log(resp)

    res.status(200).json(resp)

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error al realizar la consulta'})
  }

}
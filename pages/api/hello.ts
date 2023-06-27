// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { courses } from '@/classroom'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  
  try {

    const data = await courses.getCourses()

    console.log(data)

    res.status(200).json({message: 'Peticion realizada con exito'})
  } catch (error) {
    console.log({error})
    
    res.status(400).json({message: 'Hubo un fallo'})
  }

}

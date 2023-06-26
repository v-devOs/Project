// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCourse } from '@/google/classroom'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  
  try {
    await createCourse()

    res.status(200).json({message: 'Peticion realizada con exito'})
  } catch (error) {
    console.log({error})
    
    res.status(400).json({message: 'Hubo un fallo'})
  }

}

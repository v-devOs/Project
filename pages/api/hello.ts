// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { classroom_v1 } from 'googleapis'
import type { NextApiRequest, NextApiResponse } from 'next'
import { courses } from '@/classroom'

type Data = { message: string } | classroom_v1.Schema$ListCoursesResponse

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  
  try {

    const data = await courses.getCourses()


    res.status(200).json( data )
  } catch (error) {
    console.log({error})
    
    res.status(400).json({message: 'Hubo un fallo'})
  }

}

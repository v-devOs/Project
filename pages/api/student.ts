import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from '@/classroom'

type Data = {
  message: string
}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'POST':
      return sendInvitationStudent( req, res )

  
    default:
      return res.status(400).json({ message: 'Bad request'})
  }

}

const sendInvitationStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const sentCorrectInvitation = await students.inviteStudent()

  return sentCorrectInvitation
    ? res.status(200).json({ message: 'Invitacion para estudiante enviada correctamente'})
    : res.status(400).json({ message: 'Error al enviar invitacion, verificar logs del servidor'})
}
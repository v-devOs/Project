import type { NextApiRequest, NextApiResponse } from 'next'
import { members } from '@/classroom'

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
  
  const sentCorrectInvitation = await members.inviteMember('STUDENT')

  return sentCorrectInvitation
    ? res.status(200).json({ message: 'Invitaciones para estudiante enviadas correctamente'})
    : res.status(400).json({ message: 'Error al enviar invitacion, verificar logs del servidor'})
}
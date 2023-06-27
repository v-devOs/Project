import { google } from 'googleapis'


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

export const classroom = google.classroom({
  version: 'v1',
  auth: oAuth2Client,
  // key: process.env.API_KEY
})
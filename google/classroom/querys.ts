import {google} from 'googleapis'


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const classroom = google.classroom({
  version: 'v1',
  auth: oAuth2Client,
  key: process.env.API_KEY
})

export const createCourse = async() => {
  
  try {

    const { data } = await classroom.courses.list()

    console.log( data )


    // const url = `https://classroom.googleapis.com/v1/courses`
    // const { token = '' } = await oAuth2Client.getAccessToken()
    // const config = generateConfig( url, token )
    // const response = await axios(config)
    
    // console.log(response.data)
  } catch (error) {
    console.log(error)
  }


}


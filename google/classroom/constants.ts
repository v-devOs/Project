
export const auth = {
  type: "OAuth2",
  user: "ugalu448@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
}

export const generateConfig = ( url: string, accessToken: string | null) => {
  return {
    method: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
    }
  }
}
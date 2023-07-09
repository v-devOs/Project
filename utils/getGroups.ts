import { database } from "@/database"


export const getGroups = async () => {
  try {

    const resp = await database.getAllGroups()

    return resp
    
  } catch (error) {
    return undefined
  }
}
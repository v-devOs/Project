
import axios from 'axios'



export const classroomApi = axios.create({
  baseURL: 'https://classroom.googleapis.com/v1'
})
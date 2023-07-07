import { classroom_v1 } from "googleapis";
import { GaxiosResponse } from 'gaxios';


export type classroomResponse = 
  | classroom_v1.Schema$Course[] 
  | GaxiosResponse<classroom_v1.Schema$Course> 
  | undefined
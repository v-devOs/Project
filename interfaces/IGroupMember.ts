import { IGroup } from "./IGroup";


export interface IGroupMember extends IGroup{
  emailMaestro?: string
  emailAlumno?: string
}
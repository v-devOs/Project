import { RowDataPacket } from "mysql2";


export interface IGroup extends RowDataPacket{
  nameGroup: string,
  noGpo: number
}
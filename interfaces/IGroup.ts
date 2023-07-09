import { RowDataPacket } from "mysql2";


export interface IGroup extends RowDataPacket{
  nombreGrupo: string,
  noGpo: number
}
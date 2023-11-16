import connection from './connection.ts'
import { Confession } from '../../models/confessions'

export async function getAllConfessions(db = connection): Promise<Confession[]> {
  return db('confession').select()
}

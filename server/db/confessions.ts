import connection from './connection.ts'
import { Confession } from '../../models/fruit.ts'

export async function getAllConfessions(db = connection): Promise<Confession[]> {
  return db('confession').select()
}

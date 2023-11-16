import request from 'superagent'
import type { ConfessionData } from '../../models/confessions'
const rootUrl = '/api/v1'

export async function getConfessions(): Promise<ConfessionData[]> {
  const res = await request.get(rootUrl + '/confessions')
  return res.body
}

export function editConfession(id: number, content: string) {
  return request
    .patch(rootUrl + '/confessions')
    .send({ content: content, id: id })
    .then((res) => {
      return res.body
    })
}

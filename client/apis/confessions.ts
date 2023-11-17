import request from 'superagent'
import type { ConfessionData } from '../../models/confessions'
const rootUrl = '/api/v1'

export async function getConfessions(): Promise<ConfessionData[]> {
  const res = await request.get(rootUrl + '/confessions')
  return res.body
}

export async function editConfession(confession: any) {
  const res = await request
    .patch(rootUrl + '/confessions')
    .send({ content: confession.content, id: confession.id })

  return res.body
}
export async function addConfession(confession: any): Promise<string> {
  const res = await request
    .post(rootUrl + '/confessions')
    .send({ content: confession.confession, title: confession.title })

  return res.body
}

//.send({ title: title, content: content })

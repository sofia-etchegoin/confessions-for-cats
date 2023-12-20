import request from 'superagent'
import type { ConfessionData } from '../../models/confessions'
const rootUrl = '/api/v1'

// GET all confessions

export async function getConfessions(): Promise<ConfessionData[]> {
  const res = await request.get(rootUrl + '/confessions')
  return res.body
}

// PATCH confessions

export async function editConfession(confession: any) {
  const res = await request
    .patch(rootUrl + '/confessions')
    .send({ content: confession.content, id: confession.id })

  return res.body
}

// POST confessions

export async function addConfession(confession: any): Promise<string> {
  const res = await request
    .post(rootUrl + '/confessions')
    .send({ content: confession.confession, title: confession.title })

  return res.body
}

import request from 'superagent'

const rootUrl = '/api/v1'

export function getConfessions(): Promise<string[]> {
  return request.get(rootUrl + '/confessions').then((res) => {
    return res.body.confessions
  })
}

export function editConfession(id: number, content: string) {
  return request
    .patch(rootUrl + '/confessions')
    .send({ content: content, id: id })
    .then((res) => {
      return res.body.confessions
    })
}

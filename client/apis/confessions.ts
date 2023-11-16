import request from 'superagent'

const rootUrl = '/api/v1'

export function getConfessions(): Promise<string[]> {
  return request.get(rootUrl + '/confessions').then((res) => {
    return res.body.confessions
  })
}

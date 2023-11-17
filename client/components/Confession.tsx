import { getConfessions } from '../apis/confessions'
import { Confession } from '../../models/confessions'
import { useQuery } from '@tanstack/react-query'
import Draggable from 'react-draggable'

export default function Confessions() {
  const {
    data: confessions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['confessions'],
    queryFn: () => {
      return getConfessions()
    },
  })

  if (isError) {
    return <p>YEAAAAAAWWWWWOOOOOOOOOOOOOOO</p>
  }

  if (!confessions || isLoading) {
    return <p>Loading...</p>
  }
  console.log(confessions)
  return (
    <>
      <div className="confessions">
        Confessions
        {confessions.map((c) => (
          <Draggable key={c.id}>
            <ul>
              <li>
                <b>Title: </b>
                {c.title} <br />
                <b> Confession: </b>
                {c.confessionContent} <br />
                <b>Date Posted: </b> {new Date(c.datePosted).toDateString()}
              </li>
            </ul>
          </Draggable>
        ))}
      </div>
    </>
  )
}

import { getConfessions } from '../apis/confessions'
import { Confession } from '../../models/confessions'
import { useQuery } from '@tanstack/react-query'
import Draggable from 'react-draggable'
import LoadingSpinner from './LoadingSpinner'

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
    return <p><LoadingSpinner/></p>
  }
  console.log(confessions)
  return (
    <>
      <div className="confessions">
        {confessions.map((c) => (
          <Draggable key={c.id}>
            <ul>
              
                <b>Title: <br/></b>
                {c.title} <br /><br />
                <b> Confession: <br/></b>
                {c.confessionContent} <br /><br />
                <b>Date Posted: </b> {new Date(c.datePosted).toDateString()}
              
            </ul>
          </Draggable>
        ))}
      </div>
    </>
  )
}

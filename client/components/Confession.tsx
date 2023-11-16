import { getConfessions } from '../apis/confessions'
import { Confession } from '../../models/confessions'
import { useQuery } from '@tanstack/react-query'

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
      <div className="Confessions">
        {/* {JSON.stringify(confessions)} */}
        <div className="confessions">
          Confessions
          {confessions.map((c) => (
            <li key={c.id}>
              {c.title} <br />
              {c.confessionContent}
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

import { editConfession, getConfessions } from '../apis/confessions'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Draggable from 'react-draggable'
import LoadingSpinner from './LoadingSpinner'
import { useState } from 'react'

export default function Confessions() {
  const [confessionState, setConfessionState] = useState({
    title: '',
    confession: '',
  })

  const queryClient = useQueryClient()

  const editConfessionMutation = useMutation({
    mutationFn: editConfession,
    onSuccess: () => {
      queryClient.invalidateQueries(['confessions'])
    },
  })

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
    return (
      <p>
        <LoadingSpinner />
      </p>
    )
  }

  function handleTitleChange(e: any) {
    const stateObj = {
      ...confessionState,
      title: e.target.value,
    }
    setConfessionState(stateObj)
  }

  function handleConfessionChange(e: any) {
    const stateObj = {
      ...confessionState,
      confession: e.target.value,
    }
    setConfessionState(stateObj)
  }

  console.log(confessions)
  return (
    <>
      <div className="confessions">
        {confessions.map((c) => (
          <Draggable key={c.id}>
            <ul>
              <b>
                Title: <br />
              </b>
              {c.title} <br />
              <br />
              <b>
                {' '}
                Confession: <br />
              </b>
              {c.confessionContent} <br />
              <br />
              <b>Date Posted: </b> {new Date(c.datePosted).toDateString()}
              <form
                action="/"
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log(e)

                  const obj = {
                    id: c.id,
                    content: c.confessionContent,
                  }

                  editConfessionMutation.mutate(obj)
                }}
                method="patch"
              >
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  id="title"
                  value={confessionState.title}
                  onChange={handleTitleChange}
                />
                <label htmlFor="confessionContent">Confession: </label>
                <input
                  type="text"
                  id="confessionContent"
                  value={confessionState.confession}
                  onChange={handleConfessionChange}
                />
                <input id="edit" type="submit" /> Edit
              </form>
            </ul>
          </Draggable>
        ))}
      </div>
    </>
  )
}

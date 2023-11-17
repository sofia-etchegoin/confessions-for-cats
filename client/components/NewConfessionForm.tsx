import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addConfession } from '../apis/confessions'
import { FormEvent, useState } from 'react'
import { Confession } from '../../models/confessions'

export function NewConfessionForm() {
  const queryClient = useQueryClient()

  const [confessionState, setConfessionState] = useState({
    title: '',
    confession: '',
  })

  const addConfessionMutation = useMutation({
    mutationFn: addConfession,
    onSuccess: () => {
      queryClient.invalidateQueries(['confessions'])
    },
    // mutationFn: ({ title, content }) => {
    //   addConfession(title, content)
    // },
    // onSuccess: () => {
    //   queryClient.invalidateQueries(['confessions'])
    // },
  })
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(event)

    addConfessionMutation.mutate(confessionState)
  }

  return (
    <form action="/" onSubmit={handleSubmit} method="post">
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
      <button> Add</button>
    </form>
  )
}

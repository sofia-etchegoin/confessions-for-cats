import { useConfessions } from '../hooks/useConfessions.ts'

function App() {
  const { data } = useConfessions()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Confessions!</h1>
        <ul>{data && data.map((confessions) => <li key={confessions}>{confessions}</li>)}</ul>
      </div>
    </>
  )
}

export default App

import Mouse from './Mouse'
import { NewConfessionForm } from './NewConfessionForm'
import Confessions from './Confession'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="Title">Confessions for cats!</h1>
        <NewConfessionForm />
        <Confessions />
        <Mouse />
      </div>
    </>
  )
}

export default App

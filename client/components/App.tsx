import Mouse from './Mouse'
import { NewConfessionForm } from './NewConfessionForm'
import Confessions from './Confession'

function App() {
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Confessions!</h1>
        <NewConfessionForm />
        <h1>Confessions for cats!</h1>
        <Confessions />
        <Mouse />
      </div>
    </>
  )
}

export default App

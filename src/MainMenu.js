import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NewExercise from './NewExercise'
import ExerciseLog from './ExerciseLog'

const MainMenu = () => {
  return (
    <Router>
      <div>
        <Link to={`/new`}><Button>Log new exercise</Button></Link>
        <Link to={`/log`}><Button>View exercises</Button></Link>

        <Route path={`/new`} component={NewExercise} />
        <Route path={`/log`} component={ExerciseLog} />
      </div>
    </Router>
  )
}

export default MainMenu

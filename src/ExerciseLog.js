import React from 'react'
import { Table } from 'semantic-ui-react'
import './ExerciseLog.css'

// TODO table of all exercises
// TODO summary/best-record at the top
// TODO graphs over time?
const ExerciseLog = () => {
  return (
    <div>
      <h1>Exercise Log</h1>
      <Table celled className='exercise-log-table'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Exercise</Table.HeaderCell>
            <Table.HeaderCell>Weight</Table.HeaderCell>
            <Table.HeaderCell>Reps</Table.HeaderCell>
            <Table.HeaderCell>Sets</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  )
}
export default ExerciseLog

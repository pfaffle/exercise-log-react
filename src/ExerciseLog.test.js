import React from 'react'
import ExerciseLog from './ExerciseLog'

import { shallow } from 'enzyme'

it('has a header', () => {
  const exerciseLog = shallow(<ExerciseLog />)
  expect(exerciseLog.contains(<h1>Exercise Log</h1>)).toBe(true)
})

import React from 'react'
import NewExercise from './NewExercise'

import { shallow } from 'enzyme'

it('has a header', () => {
  const newExercise = shallow(<NewExercise />)
  expect(newExercise.contains(<h1>New Exercise</h1>)).toBe(true)
})

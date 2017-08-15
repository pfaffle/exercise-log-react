import React from 'react'
import MainMenu from './MainMenu'

import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'

it('has two buttons', () => {
  const mainMenu = shallow(<MainMenu />)
  const buttons = mainMenu.find(Button)
  expect(buttons.contains(<Button>Log new exercise</Button>)).toBe(true)
  expect(buttons.contains(<Button>View exercises</Button>)).toBe(true)
  expect(buttons.length).toBe(2)
})

import React from 'react'
import MainMenu from './MainMenu'

import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'

it('has two buttons', () => {
  const mainMenu = shallow(<MainMenu />)
  expect(mainMenu.find(Button).length).toBe(2)
})

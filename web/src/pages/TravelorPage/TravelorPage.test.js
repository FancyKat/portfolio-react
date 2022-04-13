import { render } from '@redwoodjs/testing/web'

import TravelorPage from './TravelorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TravelorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TravelorPage />)
    }).not.toThrow()
  })
})

/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '../../utils/tests/wrapper'
import ExampleComponent from './'

describe('Example Component', () => {
  it('should render component correctly', () => {
    const { container, getByText } = render(<ExampleComponent type="button" />)

    expect(container.firstChild).toMatchSnapshot()
    expect(getByText('My Button')).toBeInTheDocument()
  })

  it("should render component with  button type 'reset' ", () => {
    const { getByRole } = render(<ExampleComponent type="reset" />)

    expect(getByRole('button')).toHaveAttribute('type', 'reset')
  })

  it("should render component with  button type 'submit' ", () => {
    const { getByRole } = render(<ExampleComponent type="submit" />)

    expect(getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it("should render component with  button type 'button' ", () => {
    const { getByRole } = render(<ExampleComponent type="button" />)

    expect(getByRole('button')).toHaveAttribute('type', 'button')
  })
})

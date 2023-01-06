import React from 'react'
import { render, screen } from '../../utils/tests/wrapper'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('Button component tests', () => {
  it('should render component correctly', () => {
    render(
      <Button
        type="submit"
        children="Fazer Parte"
        onClick={() => global.window.location.pathname}
      />
    )
    const button = screen.getByText('Fazer Parte')
    expect(button).toBeInTheDocument()
  })
 
  it('should render component with link and click to redirect', () => {
    const url = '/example.com'
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })
    render(<Button type="submit" children="Fazer Parte" onClick={() => url} />)
    const link = screen.getByText('Fazer Parte')
    userEvent.click(link)
    expect(window.location.href).toEqual(url)
  })
})

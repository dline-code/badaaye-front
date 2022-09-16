/**
 * @jest-environment jsdom
 */
import React from 'react'
import { fireEvent, render } from '../../utils/tests/wrapper'
import Button from '.'

describe('ButtonComponent', () => {
  it('should render component correctly', () => {
    const { container, getByText } = render(
      <Button type="submit" children="Fazer Parte" />
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(getByText('Fazer Parte')).toBeInTheDocument()
  })

  it('should render and click button', () => {
    const mockFunction = jest.fn()
    const { getByText } = render(
      <Button
        type="submit"
        children="Fazer Parte"
        onClick={() => mockFunction()}
      />
    )
    fireEvent.click(getByText('Fazer Parte'))
    expect(mockFunction).toBeCalled()
  })
})

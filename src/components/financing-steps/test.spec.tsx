import React from 'react'
import { render, screen } from '../../utils/tests/wrapper'
import Step from '.'

describe('Financing-Steps component tests', () => {
  it('should render component corrently', () => {
    render(<Step />)
    const step = screen.getByText('Entenda como a Baadaye funciona')
    expect(step).toBeInTheDocument()
  })
})
 
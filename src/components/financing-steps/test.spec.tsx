import React from 'react'
import { render } from '../../utils/tests/wrapper'
import Step from '.'

describe('Financing-Steps component tests', () => {
  it('should render component corrently', () => {
    const { getByText } = render(<Step data-aos="flip-left" />)
    expect(getByText('flip-left')).toBeInTheDocument()
  })
})

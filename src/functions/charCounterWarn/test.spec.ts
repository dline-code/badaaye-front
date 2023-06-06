import { charCounterWarn } from '.'

describe('count characteres number', () => {
  it('should return 250 when i enter 5 character', () => {
    const charLacky = charCounterWarn('dline')

    expect(charLacky).toBe(250)
  })

  it('should return 245 when i enter 10 character', () => {
    const charLacky = charCounterWarn('dline-code')

    expect(charLacky).toBe(245)
  })

  it('should return 0 if the lenght of character is more than 255', () => {
    const charLacky = charCounterWarn(
      'dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code dline-code'
    )

    expect(charLacky).toBe(0)
  })
})

function generateFrameOptions(optionId: string, options: any[]) {
  return options.map(option => {
    return {
      desc: option.designacao || option.nome,
      value: option.id,
      selected: optionId === option.id
    }
  })
}

export { generateFrameOptions }

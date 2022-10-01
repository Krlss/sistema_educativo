export const getLengthOfValues = ({
  options
}: {
  options: {
    value: string
  }[]
}) => {
  return options.reduce((acc, current) => {
    if (current.value.length > acc) acc = current.value.length
    return acc
  }, 0)
}

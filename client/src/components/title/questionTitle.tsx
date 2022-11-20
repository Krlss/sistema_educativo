const QuestionTitle = ({
  index = 0,
  title,
  subtitle
}: {
  index?: number
  title: string
  subtitle?: string | null
}) => {
  return (
    <h1 className="text-xl font-bold text-left flex flex-col">
      {index}. {title}
      {subtitle && <span className="text-gray-600 text-base"> {subtitle}</span>}
    </h1>
  )
}

export default QuestionTitle

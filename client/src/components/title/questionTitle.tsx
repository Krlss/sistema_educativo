const QuestionTitle = ({
  title,
  subtitle
}: {
  title: string
  subtitle?: string
}) => {
  return (
    <h1 className="text-xl font-bold text-left flex flex-col">
      {title}
      {subtitle && <span className="text-gray-600 text-base"> {subtitle}</span>}
    </h1>
  )
}

export default QuestionTitle

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
    <div className="self-start mb-2">
      <h1 className="text-xl font-bold text-left flex flex-col">
        {index + 1}. {title}
        {subtitle && (
          <span className="text-gray-600 text-base"> {subtitle}</span>
        )}
      </h1>
    </div>
  )
}

export default QuestionTitle

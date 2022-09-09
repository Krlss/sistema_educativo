interface Props {
  qualification: number
}

const QualificationCourse = ({ qualification }: Props) => {
  return (
    <div>
      Nota del curso{' '}
      <span
        className={`${
          qualification >= 7 ? 'text-green-500' : 'text-red-logo'
        } font-semibold`}>
        {qualification}
      </span>
    </div>
  )
}

export default QualificationCourse

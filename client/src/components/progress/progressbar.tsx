interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full mt-2">
      <div
        className={`text-xs font-semibold text-center p-0.5 leading-none rounded-full ${
          (progress < 20 && 'bg-red-logo') ||
          (progress >= 20 && progress < 50 && 'bg-yellow-page') ||
          (progress >= 50 && progress < 80 && 'bg-green-500') ||
          (progress >= 80 && 'bg-blue-500')
        }`}
        style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  )
}

export default ProgressBar

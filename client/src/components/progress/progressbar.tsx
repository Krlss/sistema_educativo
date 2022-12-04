interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full mt-2 flex text-xs font-semibold text-center h-4 relative">
      <div
        className={`rounded-full ${
          (progress < 20 && 'bg-red-logo') ||
          (progress >= 20 && progress < 50 && 'bg-yellow-page') ||
          (progress >= 50 && progress < 80 && 'bg-green-500') ||
          (progress >= 80 && 'bg-blue-500')
        }`}
        style={{ width: `${progress}%` }}
      />
      <div
        className={`absolute right-0 left-0 ${
          (progress < 20 && 'text-black') ||
          (progress >= 20 && progress < 50 && 'text-black') ||
          (progress >= 50 && progress < 80 && 'text-black') ||
          (progress >= 80 && 'text-white')
        }`}>
        {progress}%
      </div>
    </div>
  )
}

export default ProgressBar

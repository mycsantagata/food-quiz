import React from 'react'

interface IProps {
    progress: number;
}

const ProgressBar: React.FC<IProps> = ({progress}) => {
    return (
      <div className="mb-4 h-3 w-2/5 rounded-md bg-neutral-200 dark:bg-neutral-600">
          <div className="h-3 bg-blue-500 rounded-md" style={{ width: `${progress}%` }}></div>
      </div>
    )
}

export default ProgressBar
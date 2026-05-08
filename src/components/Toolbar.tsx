'use client'

interface Props {
  onCreateFolder: () => void
}

export default function Toolbar({ onCreateFolder }: Props) {
  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={onCreateFolder}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        New Folder
      </button>
    </div>
  )
}
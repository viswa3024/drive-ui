'use client'

import { Folder } from '@/types/drive'

interface Props {
  folders: Folder[]
  currentFolderId: string
  onNavigate: (id: string) => void
}

export default function Breadcrumbs({
  folders,
  currentFolderId,
  onNavigate,
}: Props) {

  const buildPath = () => {
    const path: Folder[] = []

    let current = folders.find(f => f.id === currentFolderId)

    while (current) {
      path.unshift(current)

      current = folders.find(f => f.id === current?.parentId)
    }

    return path
  }

  return (
    <div className="flex gap-2 text-sm mb-4">
      {buildPath().map(folder => (
        <div key={folder.id} className="flex gap-2">
          <button
            className="text-blue-600"
            onClick={() => onNavigate(folder.id)}
          >
            {folder.name}
          </button>
          <span>/</span>
        </div>
      ))}
    </div>
  )
}
'use client'

import { Folder } from '@/types/drive'

interface Props {
  folders: Folder[]
  currentFolderId: string
  onSelect: (id: string) => void
}

export default function Sidebar({
  folders,
  currentFolderId,
  onSelect,
}: Props) {

  const renderTree = (parentId: string | null, level = 0) => {
    return folders
      .filter(folder => folder.parentId === parentId)
      .map(folder => (
        <div key={folder.id}>
          <div
            style={{ paddingLeft: `${level * 20}px` }}
            className={`cursor-pointer p-2 rounded ${
              currentFolderId === folder.id ? 'bg-gray-200' : ''
            }`}
            onClick={() => onSelect(folder.id)}
          >
            📁 {folder.name}
          </div>

          {renderTree(folder.id, level + 1)}
        </div>
      ))
  }

  return (
    <div className="w-64 border-r h-screen overflow-auto p-4">
      <h2 className="font-bold mb-4">Folders</h2>

      {renderTree(null)}
    </div>
  )
}
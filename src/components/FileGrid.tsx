'use client'

import { DriveFile, Folder } from '@/types/drive'

interface Props {
  folders: Folder[]
  files: DriveFile[]
  currentFolderId: string
  onFolderOpen: (id: string) => void
}

export default function FileGrid({
  folders,
  files,
  currentFolderId,
  onFolderOpen,
}: Props) {

  const childFolders = folders.filter(
    folder => folder.parentId === currentFolderId
  )

  const childFiles = files.filter(
    file => file.parentId === currentFolderId
  )

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">

        {childFolders.map(folder => (
          <div
            key={folder.id}
            onDoubleClick={() => onFolderOpen(folder.id)}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
          >
            📁 {folder.name}
          </div>
        ))}

        {childFiles.map(file => (
          <div
            key={file.id}
            className="border p-4 rounded"
          >
            📄 {file.name}

            {file.url && (
              <div className="mt-2">
                <a
                  href={file.url}
                  target="_blank"
                  className="text-blue-600 text-sm"
                >
                  View
                </a>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  )
}
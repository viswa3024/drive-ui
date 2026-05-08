'use client'

import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import Sidebar from '@/components/Sidebar'
import Toolbar from '@/components/Toolbar'
import Breadcrumbs from '@/components/Breadcrumbs'
import FileGrid from '@/components/FileGrid'
import UploadFile from '@/components/UploadFile'

import { Folder, DriveFile } from '@/types/drive'

import {
  loadFolders,
  saveFolders,
  loadFiles,
  saveFiles,
} from '@/utils/storage'

export default function Home() {

  const [folders, setFolders] = useState<Folder[]>([])

  const [files, setFiles] = useState<DriveFile[]>([])

  const [currentFolderId, setCurrentFolderId] = useState('root')

  useEffect(() => {
    setFolders(loadFolders())
    setFiles(loadFiles())
  }, [])

  useEffect(() => {
    if (folders.length > 0) {
      saveFolders(folders)
    }
  }, [folders])


useEffect(() => {
    saveFiles(files)
  }, [files])


   const createFolder = () => {

    const name = prompt('Enter folder name')

    if (!name) return

    const newFolder: Folder = {
      id: uuid(),
      name,
      parentId: currentFolderId,
    }

    setFolders(prev => [...prev, newFolder])
  }


   const uploadFile = (uploadedFile: File) => {

    const url = URL.createObjectURL(uploadedFile)

    const newFile: DriveFile = {
      id: uuid(),
      name: uploadedFile.name,
      parentId: currentFolderId,
      size: uploadedFile.size,
      type: uploadedFile.type,
      url,
    }

    setFiles(prev => [...prev, newFile])
  }

  console.log('loadFolders:', loadFolders())
  console.log('loadFiles:', loadFiles())

  return (
    <div className="flex">

      <Sidebar
        folders={folders}
        currentFolderId={currentFolderId}
        onSelect={setCurrentFolderId}
      />

      <div className="flex-1 p-6">

        <Toolbar onCreateFolder={createFolder} />

        <UploadFile onUpload={uploadFile} />

        <Breadcrumbs
          folders={folders}
          currentFolderId={currentFolderId}
          onNavigate={setCurrentFolderId}
        />

        <FileGrid
          folders={folders}
          files={files}
          currentFolderId={currentFolderId}
          onFolderOpen={setCurrentFolderId}
        />

      </div>
    </div>
  )
}
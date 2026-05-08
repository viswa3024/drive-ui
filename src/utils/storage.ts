import { Folder, DriveFile } from '@/types/drive'
import { initialFolders, initialFiles } from '@/data/initialData'

const FOLDERS_KEY = 'drive-folders'
const FILES_KEY = 'drive-files'

export const loadFolders = (): Folder[] => {
  if (typeof window === 'undefined') return initialFolders

  const data = localStorage.getItem(FOLDERS_KEY)

  return data ? JSON.parse(data) : initialFolders
}

export const saveFolders = (folders: Folder[]) => {
  localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders))
}

export const loadFiles = (): DriveFile[] => {
  if (typeof window === 'undefined') return initialFiles

  const data = localStorage.getItem(FILES_KEY)

  return data ? JSON.parse(data) : initialFiles
}

export const saveFiles = (files: DriveFile[]) => {
  localStorage.setItem(FILES_KEY, JSON.stringify(files))
}
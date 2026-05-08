export interface Folder {
  id: string
  name: string
  parentId: string | null
}

export interface DriveFile {
  id: string
  name: string
  parentId: string | null
  size: number
  type: string
  url?: string
}
'use client'

import { ChangeEvent } from 'react'

interface Props {
  onUpload: (file: File) => void
}

export default function UploadFile({ onUpload }: Props) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    onUpload(file)
  }

  return (
    <input
      type="file"
      onChange={handleChange}
      className="mb-4"
    />
  )
}
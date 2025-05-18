'use client'
import { useState } from 'react'

export default function Home() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })

    const data = await res.json()

    if (res.ok) {
      setMessage('پست با موفقیت ساخته شد')
      setTitle('')
    } else {
      setMessage(data.error || 'خطا در ساخت پست')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">ساخت پست جدید</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 w-full mb-2"
        placeholder="عنوان پست"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ارسال
      </button>

      {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
    </div>
  )
}

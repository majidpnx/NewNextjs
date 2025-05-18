// app/api/posts/route.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  const { title } = await req.json()

  if (!title) {
    return Response.json({ error: 'عنوان نباید خالی باشد' }, { status: 400 })
  }

  const newPost = await prisma.post.create({
    data: { title },
  })

  return Response.json(newPost)
}

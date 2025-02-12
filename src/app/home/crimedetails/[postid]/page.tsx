import Image from 'next/image'
import {
  ArrowLeft,
  ArrowBigUp,
  ArrowBigDown,
  MessageCircle,
  Share2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Article from '@/components/fahad/home/article'

export default function PostDetails({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the post data based on the ID
  const post = {
    title: 'Decentralize Dhaka to Ensure Sustainable Urban Development',
    image: '/placeholder.svg',
    author: 'Abu Fattah Hossain',
    authorAvatar: '/placeholder.svg',
    date: '21st Aug, 2024',
    upvotes: 293,
    downvotes: 5,
    comments: 10,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/home"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>

      <Article />
    </div>
  )
}

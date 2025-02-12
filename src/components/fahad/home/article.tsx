'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  ArrowBigDown,
  ArrowBigUp,
  Heart,
  MessageCircle,
  Share2,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Article = () => {
  const [likes, setLikes] = useState(0)

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 animate-fade-up">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <time>21 August, 2024</time>
            <span>•</span>
            <span>Abu Fattah Hussein</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Decentralize Dhaka to Ensure Sustainable Urban Development
          </h1>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Ministry of Local Government</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-0">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <ArrowBigUp className="mr-1 h-4 w-4" />
              <span>4</span>
            </Button>
            <Button variant="ghost" size="sm">
              <ArrowBigDown className="mr-1 h-4 w-4" />
              <span>5</span>
            </Button>

            <Button variant="ghost" size="sm">
              <Share2 size={16} />
            </Button>
          </div>
        </div>
        <Separator className="my-1" />

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Dhaka traffic"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            The Problem: Dhaka, the capital of Bangladesh, faces an alarming
            population density that significantly impacts its livability and
            development. As the city continues to expand, the strain on
            infrastructure, resources, and services becomes increasingly
            unsustainable. The concentration of population and economic
            activities in Dhaka has led to severe congestion, pollution, and a
            decline in the overall quality of life for its residents.
          </p>

          <p className="text-lg leading-relaxed">
            The Solution: Decentralization is essential to alleviate the burden
            on Dhaka and promote balanced urban development. This can be
            achieved through systematic and well-planned actions including
            creating satellite cities and regional economic hubs to redistribute
            population and economic activities. This includes promoting
            industries, education, healthcare, and essential services in
            decentralized locations to create employment opportunities and
            improve living conditions sustainably.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Comments</h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button size="sm">Comment</Button>
          </div>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <Card key={index} className="p-4">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{comment.author}</h4>
                      <span className="text-sm text-muted-foreground">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {comment.content}
                    </p>
                    <Image
                      src="/placeholder.svg"
                      alt="Comment image"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

const comments = [
  {
    author: 'Sarah M.',
    content:
      'Very insightful article! I agree the planning has to be done in a more systematic way.',
    time: '2 hours ago',
    avatar: '',
  },
  {
    author: 'Karim Rahman',
    content:
      'This is an important issue that needs immediate attention. The current situation is unsustainable.',
    time: '3 hours ago',
    avatar: '',
  },
]

export default Article

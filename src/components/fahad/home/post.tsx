import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowBigUp, ArrowBigDown, MessageCircle } from 'lucide-react'

interface PostProps {
  title: string
  image: string
  author: string
  date: string
  upvotes: number
  downvotes: number
  comments: number
}

export default function Post({
  title,
  image,
  author,
  date,
  upvotes,
  downvotes,
  comments,
}: PostProps) {
  return (
    <Card className="w-full">
      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Image container */}
          <div className="sm:flex-shrink-0 order-1 sm:order-2">
            <div className="relative w-full sm:w-[100px] md:w-[120px] h-[200px] sm:h-[100px] md:h-[120px]">
              <Image
                src={image || '/placeholder.svg'}
                alt={title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0 order-2 sm:order-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2 line-clamp-3">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2 sm:mb-3">
              <span className="font-medium truncate">{author}</span>
              <span>—</span>
              <span>{date}</span>
            </div>
            {/* Interaction buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-green-600 hover:text-green-700"
              >
                <ArrowBigUp className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                <span className="text-xs sm:text-sm">{upvotes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-red-600 hover:text-red-700"
              >
                <ArrowBigDown className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                <span className="text-xs sm:text-sm">{downvotes}</span>
              </Button>
              <div className="flex items-center text-muted-foreground">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-xs sm:text-sm">{comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

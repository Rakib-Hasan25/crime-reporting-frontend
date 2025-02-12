import { Button } from '@/components/ui/button'
import { Bell, MessageCircle, User } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-card shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Crime Report</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Add Crime</Button>

          <Link href={'/home/userdetails'}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

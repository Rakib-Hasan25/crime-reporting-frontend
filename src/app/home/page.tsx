import Navbar from '@/components/fahad/home/navbar'
import PostGrid from '@/components/fahad/home/postGrid'
import SearchAndFilter from '@/components/fahad/home/searchAndFilter'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <SearchAndFilter />
        <PostGrid />
      </main>
    </div>
  )
}

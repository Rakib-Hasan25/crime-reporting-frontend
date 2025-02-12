import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { Search, SortDesc, Filter } from 'lucide-react'

export default function SearchAndFilter() {
  return (
    <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto  mb-6">
      {/* Search Input */}
      <div className="relative w-full sm:w-auto flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="search"
          placeholder="Search posts..."
          className="pl-10 w-full sm:min-w-[200px] md:min-w-[300px]"
        />
      </div>

      {/* Sort & Filter Dropdowns */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <Select>
          <SelectTrigger className="w-[48px] sm:w-[120px]" aria-label="Sort by">
            <div className="flex items-center justify-center sm:justify-start">
              <SortDesc className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Sort</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter Dropdown */}
        <Select>
          <SelectTrigger
            className="w-[48px] sm:w-[120px]"
            aria-label="Filter by"
          >
            <div className="flex items-center justify-center sm:justify-start">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Filter</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Posts</SelectItem>
            <SelectItem value="images">With Images</SelectItem>
            <SelectItem value="text">Text Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Button */}
      <Button className="w-full sm:w-auto">Apply</Button>
    </div>
  )
}

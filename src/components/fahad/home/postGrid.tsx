import Post from './post'

const posts = [
  {
    id: 1,
    title: 'Decentralize Dhaka to Ensure Sustainable Urban Development',
    image: '/placeholder.svg',
    author: 'Abu Fattah Hossain',
    date: '21st Aug, 2024',
    upvotes: 293,
    downvotes: 0,
    comments: 10,
  },
  {
    id: 2,
    title: 'New Metro Rail Project to Connect Major City Hubs',
    image: '/placeholder.svg',
    author: 'Sarah Ahmed',
    date: '21st Aug, 2024',
    upvotes: 156,
    downvotes: 3,
    comments: 8,
  },
  {
    id: 3,
    title: 'Green Initiative: 1000 New Trees to be Planted in Urban Areas',
    image: '/placeholder.svg',
    author: 'Rahul Khan',
    date: '21st Aug, 2024',
    upvotes: 178,
    downvotes: 2,
    comments: 15,
  },
]

export default function PostGrid() {
  return (
    <div className="grid grid-cols-1  gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

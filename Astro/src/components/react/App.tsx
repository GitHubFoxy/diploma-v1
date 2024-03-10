import Posts from './Posts'
import ReactFeatures from './ReactFeatures'

const fetchPosts = async () => {
    const response = await fetch("/api/fetchnode")
    const data = await response.json()
}

export default function App() {
    fetchPosts()
    return (
        <>
            <div className="grid gap-2 grid-rows-[170px_1fr]">
                <ReactFeatures/>
                {/* <Posts posts={posts}/> */}
            </div>
        </>
    )
}
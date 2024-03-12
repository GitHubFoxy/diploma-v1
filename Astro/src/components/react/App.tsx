import Posts from './Posts'
import ReactFeatures from './ReactFeatures'

export default function App() {
    return (
        <>
            <div className="flex flex-col sm:grid sm:grid-cols-4 gap-2">
                {/* <ReactFeatures/> */}
                <Posts/>
            </div>
        </>
    )
}
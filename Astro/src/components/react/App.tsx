import Description from './Description'
import Posts from './Posts'
import ReactFeatures from './ReactFeatures'
export default function App() {
    return (
        <>
            <div className="flex gap-2 flex-col">
                {/* <ReactFeatures/> */}
                <Description/>
                <Posts/>
            </div>
        </>
    )
}
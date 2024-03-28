import {data} from '../data.ts'

function Posts() {
    const cards = data.map(card => {
        return (
            <div key={card.id} className="p-2 bg-zinc-300 dark:bg-zinc-600 flex flex-col gap-2 rounded cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-500">
                    <div>
                        <h1 className="text-center">{card.title}</h1>
                        <p className="text-center opacity-50">{card.content}</p>
                    </div>
                    <div className="flex items-center justify-center h-full"><img src={card.image} alt="" className="" loading="lazy" /></div>
            </div>
        )
    })
    return <>{cards}</>
}
export default Posts
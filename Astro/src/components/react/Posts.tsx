import {data} from '../data.ts'
function Posts() {
    const cards = data.map(card => {

        let isReaded = false

        return (
            <div key={card.id} className="relative group p-2 bg-zinc-300 dark:bg-zinc-600 flex flex-col gap-2 rounded cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-500">
                    <div className={`
                    absolute
                    aspect-square
                    w-[20px]
                    ${isReaded ? '' : 'bg-green-300'}
                    z-50
                    top-0 right-0 rounded-full
                    translate-x-[25%]
                    -translate-y-[25%]
                    `}></div>
                    <div className="flex items-center justify-center h-full"><img src={card.image} alt="" className="rounded opacity-65 group-hover:opacity-100" loading="lazy" /></div>
                    <div className='text-center'>
                        <h1 className="text-center">{card.title}</h1>
                        <p className="text-center opacity-50">{card.content}</p>
                        <button className='py-2 bg-zinc-700 w-full rounded mt-2'>Читать</button>
                    </div>
            </div>
        )
    })
    return <>{cards}</>
}
export default Posts
import {useState} from 'react' 
export default function Counter() {
    const [state, setState] = useState(0)
    return (
    <>
        <div className="max-w-[200px] flex flex-col gap-2 items-center p-2 bg-zinc-600 rounded">
            <h1 className="text-center">React State</h1>
            <hr className="bg-zinc-100 opacity-20 w-full"/>
            <p className="text-center p-1 bg-zinc-700 rounded">Count: {state}</p>
            <div className="flex gap-2">
                <button className="hover:bg-zinc-700 p-1 rounded transition-colors " onClick={() => setState(state - 1)}>Вычесть</button>
                <button className="hover:bg-zinc-700 p-1 rounded transition-colors " onClick={() => setState(state + 1)}>Добавить</button>
            </div>
                <button className="hover:bg-zinc-700 p-1 rounded transition-colors border" onClick={() => setState(0)}>Сбросить</button>
        </div>
    </>
    )
}
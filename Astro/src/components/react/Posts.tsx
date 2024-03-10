
const data = [{
    id: "0",
    title: "Title",
    content: "Description",
    image: "/ai-dogs.jpeg",
},{
    id: "1",
    title: "Title",
    content: "Description",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    id: "1",
    title: "Title",
    content: "Description",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    id: "1",
    title: "Title",
    content: "Description",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    id: "1",
    title: "Title",
    content: "Description",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
]

function Posts() {
    const cards = data.map(card => {
        return (
            <div key={card.id} className="p-2 bg-zinc-600 flex flex-col gap-2">

                    <h1 className="text-center">{card.title}</h1>
                    <p className="text-center opacity-50">{card.content}</p>
                    <img src={card.image} alt="" className="" />
            </div>
        )
    })
    return <div className="p-2 bg-zinc-700 rounded sm:grid sm:grid-cols-3 flex flex-col sm:flex-row gap-2 justify-center items-center sm:items-stretch sm:justify-normal">{cards}</div>
}
export default Posts
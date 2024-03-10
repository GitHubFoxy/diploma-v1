function Posts({posts}) {
    const imagePath = posts[0].image
    const title = posts[0].title
    const content = posts[0].content
    return (
        <div className='flex p-2 bg-zinc-700 rounded gap-2 flex-col'>
            <h1 className="text-center ">Posts from Nodejs and MongoDB</h1>
            <div className='flex-col md:grid grid-cols-2 gap-2 lg:grid-cols-6'>
                <div className="p-2 rounded bg-zinc-600 flex flex-col justify-center items-center cursor-pointer transition-colors hover:bg-zinc-500">
                    <h1 className="border-b">{title}</h1> 
                    <p className="text-zinc-400">{content}</p> 
                    <img src={imagePath} alt="" className='rounded aspect-square w-[250px]' />
                </div>
            </div>
        </div>
    )
}
export default Posts
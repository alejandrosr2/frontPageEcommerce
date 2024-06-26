import bundle from "../../assets/bundle.png"

const articles = [
    {
        title: "Uno de los mejores packs calidad-precio",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum reprehenderit repellendus nulla expedita quae perspiciatis quas dignissimos minima ex quam optio labore error iure facere veniam veritatis, culpa quisquam.",
        image: bundle,
        publish: "14 de mayo de 2024, por Usuario1"
    },
    {
        title: "Uno de los mejores packs calidad-precio",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum reprehenderit repellendus nulla expedita quae perspiciatis quas dignissimos minima ex quam optio labore error iure facere veniam veritatis, culpa quisquam.",
        image: bundle,
        publish: "14 de mayo de 2024, por Usuario1"
    },
    {
        title: "Uno de los mejores packs calidad-precio",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum reprehenderit repellendus nulla expedita quae perspiciatis quas dignissimos minima ex quam optio labore error iure facere veniam veritatis, culpa quisquam.",
        image: bundle,
        publish: "14 de mayo de 2024, por Usuario1"
    },
]

const BlogCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {
                articles.map((article, i) => (
                    <div key={i} className="dark:text-white">
                        <div>
                            <h2 className="pb-2 font-bold text-center text-[18px]">{article.title}</h2>
                        </div>
                        <div className="overflow-hidden rounded-2xl mb-2">
                            <img src={article.image} alt="" className="rounded-2xl hover:scale-105 duration-500"/>
                        </div>
                        <div>
                            <p className="text-sm text-zinc-500 pb-2">{article.publish}</p>
                            <p className="line-clamp-3">{article.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default BlogCard

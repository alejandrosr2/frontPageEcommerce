import BlogCard from "./BlogCard"


const BlogNews = () => {
    return (
        <div className="pb-20">
            <div className="container">
                <div className="text-center mt-20 mb-10 max-w-[600px] mx-auto space-y-2 dark:text-white">
                    <h1 className="text-3xl font-bold lg:text-4xl ">
                        Nuevos Artículos
                    </h1>
                    <p className="text-zinc-400">
                        Explora los más vendidos
                    </p>
                </div>
                <div>
                    <BlogCard/>
                </div>
            </div>
        </div>
    )
}

export default BlogNews

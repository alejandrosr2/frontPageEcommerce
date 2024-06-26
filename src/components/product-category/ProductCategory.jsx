
import SmallCard from "./SmallCard"
import mouse from "../../assets/raton.png"
import teclado from "../../assets/teclado.png"
import auriculares from "../../assets/auriculares.png"



const ProductCategory = () => {
    return (
        <div className="mt-20">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SmallCard text={"Ratón"} bgGradient={"from-black/90 to-black/70"} image={mouse} width={"w-[250px]"} bottom={"bottom-0"} right={"right-0 md:-right-16"} bgBtn={"bg-blue-500"}/>
                    <SmallCard text={"Auriculares"} bgGradient={"from-red-500 to-red-500/90"} image={auriculares} width={"w-[150px]"} right={"right-0"} bottom={"bottom-32"} bgBtn={"bg-white"} textColorBtn={"text-red-500"}/>
                    <div className=" md:col-span-2">
                        <SmallCard bgGradient={"from-blue-500/80 to-blue-500"} text={"Teclado"} image={teclado} bgBtn={"bg-white"} textColorBtn={"text-blue-500"} bottom={"bottom-10 md:bottom-0"} width={"w-[250px] md:w-[320px]"} right={"right-0 md:right-10"}/>
                    </div>
                </div>
            </div>
            <div className="container pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className=" md:col-span-2">
                        <SmallCard bgGradient={"from-zinc-400/80 to-zinc-100 dark:to-zinc-800"} text={"Teclado"} image={teclado} bgBtn={"bg-blue-500"} textColorBtn={"text-white"} bottom={"bottom-10 md:bottom-0"} width={"w-[250px] md:w-[320px]"} right={"right-0 md:right-10"}/>
                    </div>
                    <SmallCard text={"Ratón"} bgGradient={"from-yellow-500/80 to-yellow-400"} image={mouse} width={"w-[250px]"} bottom={"bottom-0"} right={"right-0 md:-right-16"} bgBtn={"bg-white"} textColorBtn={"text-yellow-500"}/>
                    <SmallCard text={"Auriculares"} bgGradient={"from-green-500 to-green-500/90"} image={auriculares} width={"w-[150px]"} right={"right-0"} bottom={"bottom-32"} bgBtn={"bg-white"} textColorBtn={"text-green-500"}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory

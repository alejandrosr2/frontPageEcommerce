import { Facebook, Instagram, MapPin, Smartphone, Twitter } from "lucide-react"

const links = [
    {
        href: "/#",
        label: "Home"
    },
    {
        href: "/#",
        label: "Tienda"
    },
    {
        href: "/#",
        label: "Cartera"
    },
    {
        href: "/#",
        label: "Asistencia"
    },
]

const Footer = () => {
    return (
        <div className="border-t bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <a href="#" className="text-blue-500 font-bold tracking-widest text-2xl uppercase sm:text-3xl hover:scale-105 duration-300 ">
                            randomshop
                        </a>
                        <p className="text-zinc-600 dark:text-zinc-200 lg:pr-24 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium praesentium temporibus perspiciatis nam suscipit!</p>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 sm:grim-cols-3 md:pl-10">
                        <div className="py-8 px-4 flex items-center gap-10">
                            <div>
                                <h1 className="font-semibold text-xl dark:text-white pb-3">Important Links</h1>
                                <ul>
                                    {
                                        links.map((link, i) => (
                                            <li key={i}>
                                                <a href={link.href} className="text-zinc-600 dark:text-zinc-200 dark:hover:text-white hover:text-zinc-400">{link.label}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-semibold text-xl dark:text-white pb-3">Links</h1>
                                <ul>
                                    {
                                        links.map((link, i) => (
                                            <li key={i}>
                                                <a href={link.href} className="text-zinc-600 dark:text-zinc-200 dark:hover:text-white hover:text-zinc-400 ">{link.label}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="py-8 px-4 col-span-2 sm:col-auto dark:text-white">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <MapPin />
                                    <p>Murcia, Murcia</p>
                                    <p>España</p>        
                                </div>
                                <div className="flex items-center gap-3 ">
                                    <Smartphone />
                                    <p>+34 987234571</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="" className="hover:scale-105 duration-300"><Instagram /></a>
                                    <a href="" className="hover:scale-105 duration-300"><Twitter /></a>
                                    <a href="" className="hover:scale-105 duration-300"><Facebook /></a>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Footer

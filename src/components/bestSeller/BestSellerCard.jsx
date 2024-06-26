import pc from "../../assets/pcgaming.png";
import auriculares from "../../assets/auriculares.png";
import mouse from "../../assets/raton.png";
import GenericBtn from "../GenericBtn";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bestSeller = [
    {
        title: "Auriculares Gaming",
        price: 60,
        delay: 0,
        image: auriculares
    },
    {
        title: "PC Gaming GEFORCE",
        price: 1320,
        delay: 0.2,
        image: pc
    },
    {
        title: "Auriculares 2",
        price: 75,
        delay: 0.4,
        image: auriculares
    },
    {
        title: "Ratón gaming",
        price: 30,
        delay: 0.6,
        image: mouse
    },
];

const BestSellerCard = () => {
    const { addToCart } = useContext(CartContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const handleAddToCart = (item) => {
        addToCart(item);
        toast("Añadido a la cesta", {
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
    };

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center">
                {bestSeller.map((item, i) => (
                    <motion.div
                        key={i}
                        data-testid="product-item"
                        className="group relative"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                    >
                        <div className="w-64 h-60 bg-gradient-to-r from-zinc-300/80 to-zinc-100 dark:to-zinc-800 rounded-md drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] overflow-hidden">
                            <img src={item.image} alt={item.title} className="mx-auto h-full object-cover rounded-md" />
                            <div className="hidden group-hover:flex absolute inset-0 backdrop-filter backdrop-blur-sm justify-center items-center duration-1000">
                                <GenericBtn handler={() => handleAddToCart(item)} text={"Añadir al carrito"} bg={"bg-blue-500"} textColor={"text-white"} />
                            </div>
                        </div>
                        <div className="pt-2 leading-7 text-center">
                            <h2 className="font-semibold dark:text-zinc-400">{item.title}</h2>
                            <p className="font-bold dark:text-white">{item.price}€</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BestSellerCard;

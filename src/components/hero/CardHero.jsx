import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pcgaming from '../../assets/pcgaming.png';
import GenericBtn from '../GenericBtn';
import laptop from "../../assets/portatil.png";
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const cardData = [
    {
        id: 1,
        img: pcgaming,
        subtitle: "Para jugar",
        title: "PcGaming",
        title2: "GEFORCEGTX",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic eligendi nihil. Asperiores similique atque doloribus quaerat culpa commodi eum, aliquid pariatur debitis blanditiis? Eius doloribus nemo inventore ea!",
    },
    {
        id: 2,
        img: laptop,
        subtitle: "Para jugar",
        title: "MSI",
        title2: "PORTATIL",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic eligendi nihil. Asperiores similique atque doloribus quaerat culpa commodi eum, aliquid pariatur debitis blanditiis? Eius doloribus nemo inventore ea!",
    },
];

const CardHero = () => {
    const { addToCart } = useContext(CartContext);

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
        <Slider {...settings}>
            {cardData.map((item) => (
                <div key={item.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <motion.div
                            className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.h1
                                className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                {item.subtitle}
                            </motion.h1>
                            <motion.h1
                                className="text-3xl sm:text-6xl lg:text-7xl font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                {item.title}
                            </motion.h1>
                            <motion.h1
                                className="drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  uppercase text-white dark:text-zinc-200/80 text-4xl md:py-12 sm:text-[80px] lg:text-[100px] xl:text-[150px] font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                {item.title2}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <GenericBtn handler={() => handleAddToCart(item)} bg="bg-blue-500" textColor="text-white" text="Compra ahora" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="order-1 sm:order-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <img
                                src={item.img}
                                className="w-[200px] h-[300px] sm:w-[350px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative"
                                alt={item.title}
                            />
                        </motion.div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CardHero;

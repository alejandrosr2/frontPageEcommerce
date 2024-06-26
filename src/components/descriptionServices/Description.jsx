import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Car, CreditCard, TicketPercent } from 'lucide-react';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const services = [
    {
        icon: <Car size={32} />,
        description: "Envío gratuito en compras superiores a 50€"
    },
    {
        icon: <TicketPercent size={24} />,
        description: "Descuentos del 20% por tiempo limitado"
    },
    {
        icon: <CreditCard size={24} />,
        description: "Seguridad a la hora de realizar el pago"
    },
]

const Description = () => {
    return (
        <div className="mt-20 container">
            <Slider {...settings}>
                {
                    services.map((item, i) => (
                        <div key={i} className="justify-center gap-4 p-2  !flex !items-center bg-gradient-to-r from-blue-500/80 to-blue-500 dark:from-zinc-300/80 dark:to-zinc-800 rounded-full">
                            <div className=" text-white ">{item.icon}</div>
                            <p className="text-lg font-bold text-white ">{item.description}</p>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Description;

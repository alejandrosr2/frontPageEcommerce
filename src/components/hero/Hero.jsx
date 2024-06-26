
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CardHero from './CardHero';

const bgCard = "bg-gradient-to-r from-zinc-300/80 to-zinc-100 dark:to-zinc-800 dark:text-white "

const Hero = () => {
    
    return (
        <div className="container mt-10">
            <div className={`${bgCard}flex justify-center items-center overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]`}>
                <div className="container pb-8 sm:pb-0">
                    <CardHero/>
                </div>
            </div>
        </div>
    );
};

export default Hero;

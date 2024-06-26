
import GenericBtn from "../GenericBtn"

const SmallCard = ({text, bgGradient, image, width, bottom, right, bgBtn, textColorBtn}) => {
    return (
        <div className={`bg-gradient-to-br ${bgGradient} text-white rounded-3xl relative py-10 pl-5 h-[320px] flex items-end hover:scale-105 duration-300 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]`}>
            <div>
                <div className="mb-4">
                    <p className="mb-[2px] text-zinc-200 font-semibold">Juega</p>
                    <p className="text-2xl font-semibold mb-[2px]">Con</p>
                    <p className="text-4xl xl:text-5xl font-bold mb-[10px] opacity-70">{text}</p>
                    <GenericBtn text="Buscar" textColor={textColorBtn} bg={bgBtn}/>
                </div>
            </div>
            <img src={image} alt="" className={`${width} absolute ${bottom} ${right} drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] -z-40`} />
        </div>
    )
}

export default SmallCard

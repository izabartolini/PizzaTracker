import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
} from 'next-share'

interface PropsClose {
    funcaoFechar: any;
}
export default function EstiloModal(props: PropsClose) {
    const base = "http://localhost:3000";

    const copylink = () => {
        navigator.clipboard.writeText(base)
    }
    return (
        <div className={`
        flex flex-col justify-between h-96 overflow
        text-black  
        `}>
            <h1 className='text-2xl font-bold '>Compartilhar</h1>

            <div className='grid grid-cols-3 place-items-center'>
                <TwitterShareButton
                    url={'https://github.com/izabartolini/PizzaTracker'}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt eveniet reprehenderit maiores. Expedita, voluptatum, ducimus magnam voluptatem totam vel ab facere cumque necessitatibus esse ratione sit veritatis inventore sapiente!'}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton

                    url={'https://github.com/next-share'}
                    title={'next-share is a social share buttons for your next React apps.'}
                    separator=":: "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <FacebookShareButton
                    url={'https://github.com/next-share'}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#nextshare'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <h1 className='text-xl font-bold '>Ou copie o link</h1>

            <div className=" flex justify-between" >
                <input type="text" value={base} className='border-solid border-2 border-gray-600 ' />
                <button className='botao px-2' onClick={copylink}>Copiar</button>
            </div>

            <div className='flex justify-center'>
                <button className="botao w-24" onClick={props.funcaoFechar}>Fechar</button>
            </div>
        </div>
    )
}
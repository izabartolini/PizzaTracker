export default function Contador({ value, onChange } : { value: number, onChange: Function } ) {

    return (
        <div className="flex gap-3 mb-2
        text-3xl items-center ">
            <button disabled={value == 0} className='botao w-12 h-9 border-2 border-black flex justify-center items-end'
                onClick={() => onChange(value - 1)}
            >
                -</button>

            <span className="bg-vermelho font-bold text-white rounded w-16 h-11 flex justify-center items-center border-2 border-black" >
                {value}
            </span>

            <button className='botao  w-12 h-9 border-2 border-black flex justify-center items-end'
                onClick={() => onChange(value + 1)}
            >
                +</button>


        </div>

    )
}
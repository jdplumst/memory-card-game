import { useState, useEffect } from "react";

type CardProps = {
    id: number
    checkGuessed: (event: React.MouseEvent<HTMLDivElement>) => void
}

function Card(props: CardProps) {
    const [pokeImg, setPokeImg] = useState<string>('');

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`);
        const pokeData = await response.json();
        setPokeImg(pokeData.sprites.other.home.front_default);
        localStorage.setItem(props.id.toString(), pokeData.sprites.other.home.front_default);
    }

    useEffect(() => {
        let x = (localStorage.getItem(props.id.toString()) || ''); 
        if (x === '') {
            getPokemon();
        } else {
            setPokeImg(x);
        }
    }, []);

    return (
        <div onClick={props.checkGuessed} id={props.id.toString()} className="flex justify-center border-solid border-4 border-black w-full hover:cursor-pointer">
            <img src={pokeImg} id={props.id.toString()} className='h-28'></img>
        </div>
    )
}

export default Card;
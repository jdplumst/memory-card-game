import { useState, useEffect } from "react";

type CardProps = {
    id: number
}

function Card(props: CardProps) {
    const [pokeImg, setPokeImg] = useState<string>('');

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`);
        const pokeData = await response.json();
        setPokeImg(pokeData.sprites.other.home.front_default);
    }

    useEffect(() => {
        getPokemon();
    });

    return (
        <div className="flex justify-center border-solid border-4 border-black w-full hover:cursor-pointer">
            <img src={pokeImg} className='h-28'></img>
        </div>
    )
}

export default Card;
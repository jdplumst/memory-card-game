import React, {useState} from 'react';
import Card from './Card';

type GameboardProps = {
    increaseScore: () => void
    resetScore: () => void
}

function Gameboard(props: GameboardProps) {
    // Pokemon IDs to use for PokeAPI
    let pokemonIds = [1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48];
    let unusedIds = pokemonIds.slice();

    // Array of size 20 for the 20 cards to map
    let x = new Array(20).fill(0);

    const [guessedList, setGuessedList] = useState<string[]>([]);

    // Returns a random id from unusedIds array and removes it from the array
    function assignId() {
        let id = unusedIds[Math.floor(Math.random() * unusedIds.length)];
        let index = unusedIds.indexOf(id);
        unusedIds.splice(index, 1);
        return id;
    }

    // Increases score if player selected correct card and resets otherwise
    function checkGuessed(event: React.MouseEvent<HTMLDivElement>) {
        let e = (event.target as HTMLDivElement)
        if (!guessedList.includes(e.id)) {
            setGuessedList([...guessedList, e.id]);
            props.increaseScore();
        } else {
            setGuessedList([]);
            unusedIds = pokemonIds.slice();
            props.resetScore();
        }
    }

    return (
        <div className="grid grid-cols-4 justify-items-center gap-0.5 mx-5 mt-10">
            {x.map((item, index) => {
                return <Card key={index} id={assignId()} checkGuessed={checkGuessed} /> 
            })}
        </div>
    )
}

export default Gameboard;
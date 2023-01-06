import {useState} from 'react';
import Card from './Card';

function Gameboard() {
    // Pokemon IDs to use for PokeAPI
    let pokemonIds = [1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48];
    let unusedIds = pokemonIds.slice();

    const [guessedList, setGuessedList] = useState<number[]>([]);

    // Returns a random id from unusedIds array and removes it from the array
    function assignId() {
        let id = unusedIds[Math.floor(Math.random() * unusedIds.length)];
        let index = unusedIds.indexOf(id);
        unusedIds.splice(index, 1);
        return id;
    }

    return (
        <div className="grid grid-cols-4 justify-items-center gap-0.5 mx-5 mt-10">
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
            <Card id={assignId()} />
        </div>
    )
}

export default Gameboard;
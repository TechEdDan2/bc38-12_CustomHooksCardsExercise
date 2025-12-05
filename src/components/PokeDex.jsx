import React from "react";
import { v4 as uuid4 } from "uuid";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "../hooks/useAxios";

const PokeDex = () => {
    const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");

    const handleAddPokemon = async name => {
        await addPokemon(name);
    };

    return (
        <div className="PokeDex">
            <div className="PokeDex-buttons">
                <h3>Please select your pokemon:</h3>
                <PokemonSelect add={handleAddPokemon} />
            </div>
            <div className="PokeDex-card-area">
                {pokemon.map(cardData => (
                    <PokemonCard
                        key={uuid4()}
                        front={cardData.sprites.front_default}
                        back={cardData.sprites.back_default}
                        name={cardData.name}
                        stats={cardData.stats.map(stat => ({
                            value: stat.base_stat,
                            name: stat.stat.name
                        }))}
                    />
                ))}
            </div>
        </div>
    );
};

export default PokeDex;
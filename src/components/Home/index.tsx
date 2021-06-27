import React from 'react';

import { Logo, Form, Poke } from './styles';
import { api } from '../../services/api';
import Logopoke from '../../assets/Logopoke.png';

interface Pokedex{
    name: string;
    base_experience: number;
    height: number;
    weight:number;
    id: number;
    sprites:{
        other:{
            dream_world:{
                front_default: string;
            }
        }
    }
}

export const Home: React.FC = () => {

    const [poke,setPoke] = React.useState<Pokedex[]>([])
    const [newPoke,setNewPoke] = React.useState('')

   function handleAddPoke(event:React.ChangeEvent<HTMLInputElement>): void{
      setNewPoke(event.target.value);

   }

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>):Promise<void>{
       event.preventDefault();

       const response = await api.get<Pokedex>(`pokemon/${newPoke}`);

       const pokemons = response.data;

       setPoke([...poke, pokemons]);
       setNewPoke('');

}
    return(
        <div>
            <Logo> <img src={Logopoke} alt="" /> </Logo>
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar pokemon" onChange={handleAddPoke}/>
                <button type="submit">Buscar</button>
            </Form>
            <Poke>
                {poke.map(pokeapi =>(
                 <div>
                  <div>
                    <h3>{pokeapi.name}</h3>
                    <span>
                    <img src={pokeapi.sprites.other.dream_world.front_default} alt={pokeapi.name} />
                    <p>
                       Id: {pokeapi.id} <br/>
                       Height:  {pokeapi.height} <br/>
                       Weight: {pokeapi.weight} <br />
                       Base Experience: {pokeapi.base_experience}
                    </p>
                    </span>
                 </div>
                </div>
                ))}

            </Poke>
        </div>
    )
}
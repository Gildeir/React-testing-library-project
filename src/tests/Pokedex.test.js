import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithRouter from '../components/RenderWithRouter';
import App from '../App';

const pokemonName = 'pokemon-name';

describe('test about', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons ',
    () => {
      RenderWithRouter(<App />);
      const h2 = screen.getByRole('heading', {
        level: 2,
        name: 'Encountered pokémons',
      });
      expect(h2).toBeInTheDocument();
    });

  test('Os próximos Pokémons da lista devem ser mostrados',
    () => {
      RenderWithRouter(<App />);
      const nextPokemon = screen.getByTestId(pokemonName);
      const next = screen.getByRole('button', {
        name: 'Próximo pokémon',
      });
      fireEvent.click(next);
      expect(nextPokemon.innerHTML).toBe('Charmander');
    });

  test('Teste se é mostrado apenas um pokemon por vez',
    () => {
      RenderWithRouter(<App />);
      const onePokemon = screen.getAllByTestId(pokemonName);
      expect(onePokemon.length).toBe(1);
    });
});

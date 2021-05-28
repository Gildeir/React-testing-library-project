import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithRouter from '../components/RenderWithRouter';
import App from '../App';

const pokemonNameId = 'pokemon-name';

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
      const nextPokemon = screen.getByTestId(pokemonNameId);
      const next = screen.getByRole('button', {
        name: 'Próximo pokémon',
      });
      fireEvent.click(next);
      expect(nextPokemon.innerHTML).toBe('Charmander');
    });

  test('Teste se é mostrado apenas um pokemon por vez',
    () => {
      RenderWithRouter(<App />);
      const onePokemon = screen.getAllByTestId(pokemonNameId);
      expect(onePokemon.length).toBe(1);
    });

  test('Teste se a Pokédex tem os botões de filtro',
    () => {
      RenderWithRouter(<App />);
      const filterButton = screen.getAllByTestId(/pokemon-type-button/i);
      expect(filterButton).toBeDefined();
    });

  test('Testar os tipos de botões',
    () => {
      const { getByText } = RenderWithRouter(<App />);
      const pokemon = getByText('Pikachu');
      expect(pokemon).toBeInTheDocument();
      const nextButton = getByText('Fire');
      fireEvent.click(nextButton);
      const nextPokemon = getByText('Charmander');
      expect(nextPokemon).toBeInTheDocument();
    });

  test('Teste se a Pokédex contém um botão para resetar o filtro',
    () => {
      const { getByRole } = RenderWithRouter(<App />);
      const endFilter = getByRole('button', {
        name: 'All',
      });
      fireEvent.click(endFilter);
      expect(endFilter).toBeInTheDocument();
    });
});

import React from 'react';
import FavoritePokemons from '../components/FavoritePokemons';
import RenderWithRouter from '../components/RenderWithRouter';
// import pokemonsCards from '../data';

describe('Tests favorites page', () => {
// Teste se é exibido na tela a mensagem No favorite pokemon found, se a pessoa não tiver pokémons favoritos.
  // test('Test the message no favorite pokemom found', () => {
  //   RenderWithRouter(<FavoritePokemons />);
  // });
  // const message = screen.getByText(/No favorite pokemon found/i);
  // expect(message).toBeInTheDocument();

  // Teste se é exibido todos os cards de pokémons favoritados.
  test('Test card no Favorite Pokemon', () => {
    const arr = [];
    const { getByText } = RenderWithRouter(<FavoritePokemons arrayOfPokemos={ arr } />);

    const arrayMessage = getByText(/No favorite pokemon found/i);
    expect(arrayMessage).toBeInTheDocument();
  });

  // test('Tests whether all Pokemons cards are displayed', () => {
  //   const { getAllByTestId } = RenderWithRouter(
  //     <FavoritePokemons pokemonsCards={ pokemonsCards } />,
  //   );
  //   const card = getAllByTestId('pokemon-name');
  //   expect(card.length).not.toBe(0);
  // });

  // Teste se nenhum card de pokémon é exibido, se ele não estiver favoritado.
});

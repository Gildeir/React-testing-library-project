import React from 'react';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from '../components/RenderWithRouter';
import App from '../App';

const detailsOfPokemon = 'Pikachu Details';
const moreDetails = 'More details';

describe('Teste se as informações detalhadas do'
+ 'Pokémon selecionado são mostradas na tela.', () => {
  test('A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon ',
    () => {
      const { getByText, getByRole } = RenderWithRouter(<App />);
      const getMoreDetails = getByText(moreDetails);
      userEvent.click(getMoreDetails);
      const pokemonDetails = getByText(detailsOfPokemon);
      expect(pokemonDetails).toBeInTheDocument();
      expect(getMoreDetails).not.toBeInTheDocument();

      const heading = getByRole('heading', {
        level: 2,
        name: 'Summary',
      });
      expect(heading).toBeInTheDocument();
      const text = getByText(/This intelligent Pokémon roasts hard berries/i);
      expect(text).toBeInTheDocument();
    });

  test('Teste se existe na página uma seção'
  + 'com os mapas contendo as localizações do pokémon', () => {
    const { getAllByRole } = RenderWithRouter(<App />);
    const image = getAllByRole('img');

    expect(image[0]).toBeInTheDocument();
    expect(image[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(image[0]).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Teste se o usuário pode favoritar um pokémon'
  + 'através da página de detalhes', () => {
    const { getByRole, getByText, getByLabelText } = RenderWithRouter(<App />);
    const getMoreDetails = getByText('More details');
    userEvent.click(getMoreDetails);

    const check = getByRole('checkbox');
    expect(check).toBeInTheDocument();
    userEvent.click(check);
    expect(check.checked).toBeTruthy();
    userEvent.click(check);
    expect(check.checked).toBeFalsy();

    const favorite = getByLabelText('Pokémon favoritado?');
    expect(favorite).toBeInTheDocument();
  });
});

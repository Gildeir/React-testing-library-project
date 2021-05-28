import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import RenderWithRouter from '../components/RenderWithRouter';
import App from '../App';

const detailsOfPokemon = 'Pikachu Details';

const clickMoreDetails = () => {
  const { getByText } = RenderWithRouter(<App />);
  const getMoreDetails = getByText('More details');
  expect(getMoreDetails).toBeInTheDocument();
  fireEvent.click(getMoreDetails);
};

describe('Teste se as informações detalhadas do'
+ 'Pokémon selecionado são mostradas na tela.', () => {
  test('A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon ',
    () => {
      clickMoreDetails();
      const { getByText, getByRole } = RenderWithRouter(<App />);
      const pokemonDetails = getByText(detailsOfPokemon);
      expect(pokemonDetails).toBeInTheDocument();
      // expect(getMoreDetails).not.toBeInTheDocument();

      const heading = getByRole('heading', {
        level: 2,
        name: 'Summary',
      });
      expect(heading).toBeInTheDocument();
      const text = getByText(/This intelligent Pokémon roasts hard berries/i);
      expect(text).toBeInTheDocument();
    });
  test('', () => {
    clickMoreDetails();
    const { getByText } = RenderWithRouter(<App />);
    const message = 'Game Locations of Pikachu';
    const text = getByText(message);
    expect(text).toBeInTheDocument();
  });
  test('Teste se existe na página uma seção'
  + 'com os mapas contendo as localizações do pokémon', () => {
    clickMoreDetails();
    const { getAllByRole } = RenderWithRouter(<App />);
    const image = getAllByRole('img');

    expect(image[1]).toBeInTheDocument();
    expect(image[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(image[1]).toHaveAttribute('alt', 'Pikachu location');
  });

  test('Teste se o usuário pode favoritar um pokémon'
  + 'através da página de detalhes', () => {
    clickMoreDetails();
    const { getByRole, getByLabelText } = RenderWithRouter(<App />);
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

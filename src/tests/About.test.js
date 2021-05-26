import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../components/RenderWithRouter';
import About from '../components/About';

describe('test about', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    RenderWithRouter(<About />);
    const h2 = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });
    expect(h2).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { getAllByText } = RenderWithRouter(<About />);
    const paragraphs = getAllByText(/Pokémons/i);
    expect(paragraphs).toHaveLength(2);
  });
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  const { getByRole } = RenderWithRouter(<About />);
  const atribute = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const imagem = getByRole('img');
  expect(imagem).toHaveAttribute('src', atribute);
});

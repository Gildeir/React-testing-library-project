import React from 'react';
import { getAllByAltText, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import About from '../components/About';

describe('teste about', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <About />
      </Router>,
    );
    const h2 = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });
    expect(h2).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {});
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <About />
    </Router>,
  );
  const paragraphs = getAllByAltText(/Pokémons/i);
  expect(paragraphs.length).toHaveLength(2);

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {});
  render(
    <Router history={ history }>
      <About />
    </Router>,
  );
  const atribute = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const img = getByRole('img');
  expect(img).toHaveAttribute('src', atribute);
});

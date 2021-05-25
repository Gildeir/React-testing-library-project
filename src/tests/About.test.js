import React from 'react';
import { render, screen } from '@testing-library/react';
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
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {});
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <About />
    </Router>,
  );
});

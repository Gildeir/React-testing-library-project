import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

// Teste se a página principal da Pokédex é renderizada ao carregar a aplicação no caminho de URL / .
test('shows the Pokédex when the route is `/`', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={ ['/'] }>
      <App />
    </MemoryRouter>,
  );

  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});

// Teste se o topo da aplicação contém um conjunto fixo de links de navegação.
// O primeiro link deve possuir o texto Home.
// O segundo link deve possuir o texto About.
// O terceiro link deve possuir o texto Favorite Pokémons.

// Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.

// Teste se a aplicação é redirecionada para a página de About, na URL / about, ao clicar no link About da barra de navegação.

// Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL / favorites, ao clicar no link Favorite Pokémons da barra de navegação.

// Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.

// O que será verificado:

//   Será avaliado se o arquivo teste App.test.js contemplam 100 % dos casos de uso criados pelo Stryker.

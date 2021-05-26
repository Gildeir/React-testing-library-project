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
test('test the text `home`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const home = getByText(/Home/i);
  expect(home).toBeInTheDocument();
});

// O segundo link deve possuir o texto About.
test('test the text `about`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const about = getByText(/About/i);
  expect(about).toBeInTheDocument();
});

// O terceiro link deve possuir o texto Favorite Pokémons.
test('test the text `Favorite`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const Favorite = getByText(/Favorite/i);
  expect(Favorite).toBeInTheDocument();
});

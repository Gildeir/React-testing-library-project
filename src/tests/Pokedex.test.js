import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../components/RenderWithRouter';
import App from '../App';

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

  // test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  //   RenderWithRouter(<Pokedex />);
  //   const atribute = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  //   const image = screen.queryAllByRole('img');
  //   expect(image[1]).toHaveAttribute('src', atribute);
  // });
});

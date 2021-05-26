import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../components/RenderWithRouter';
import NotFound from '../components/NotFound';

describe('test about', () => {
  test('Teste se página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      RenderWithRouter(<NotFound />);
      const h2 = screen.getByRole('heading', {
        level: 2,
        name: /Page requested not found/i,
      });
      expect(h2).toBeInTheDocument();
    });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    RenderWithRouter(<NotFound />);
    const atribute = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.queryAllByRole('img');
    expect(image[1]).toHaveAttribute('src', atribute);
  });
});

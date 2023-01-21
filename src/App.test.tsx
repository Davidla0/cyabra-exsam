import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './pages/movie-app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

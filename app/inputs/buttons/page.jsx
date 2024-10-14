'use client';
import React from 'react';
import ComponentGrid from '../../components/ComponentGrid';
import Header from '@/app/components/Header';

const components = [
  {
    id: 1,
    name: 'Button 1',
    path: 'components/Inputs/Buttons',
    filename: 'Button1',
    link: '/test'
  },
  {
    id: 2,
    name: 'Button 2',
    path: 'components/Inputs/Buttons',
    filename: 'Button2',
    link: '/test'
  },
  {
    id: 3,
    name: 'Button 3',
    path: 'components/Inputs/Buttons',
    filename: 'Button3',
    link: '/test'
  },
];

const App = () => {

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-center my-6">Ready React Button Components</h1>
      <ComponentGrid components={components} />
    </div>
  );
};

export default App;
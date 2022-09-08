import React from 'react';
import { Canvas } from '../features/componetns/Canvas';
import { PaintBoard } from '../features/componetns/PaintBoard';
import { Toolbar } from '../features/componetns/Toolbar';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <Toolbar />
      <PaintBoard />
      <Canvas />
    </div>
  );
};

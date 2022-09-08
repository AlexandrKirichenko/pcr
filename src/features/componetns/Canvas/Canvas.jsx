import React, { useRef } from 'react';
import styles from './Canvas.module.scss';

export const Canvas = () => {
  const canvasRef = useRef(null);

  const startDrawing = () => {};

  const finishDrawing = () => {};

  const draw = () => {};

  return (
    <div className={styles.canvasWrapper}>
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
};

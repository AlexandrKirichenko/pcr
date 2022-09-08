import React from 'react';
import { ImPencil2 } from 'react-icons/im';
import { BiBrush } from 'react-icons/bi';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__iconBtn}>
        <ImPencil2 color="tomato" size="1.2em" />
      </div>
      <div className={styles.toolbar__iconBtn}>
        <BiBrush color="blue" size="1.5em" />
      </div>
      <input type="color" />
    </div>
  );
};

import React, { useState } from 'react';
import image1 from '../assets/layout1.png';
import image2 from '../assets/layout2.png';
import styles from './nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [activeLayout, setActiveLayout] = useState(''); // default is 'layout1'

  const handleLayoutChange = (layout) => {
    setActiveLayout(layout); // Change the active layout
  };

  return (
    <div className={styles.navContainer}>
      {/* Layout 1 */}
      <div
        className={`${styles.imageWrapper} ${activeLayout === 'layout1' ? styles.active : ''}`}
        onClick={() => handleLayoutChange('layout1')}
      >
        <NavLink to ='/layout1' className={styles.link}>
        <img src={image1} alt="Layout 1" className={styles.img} />
        <div className={styles.layoutLabel}>layout1</div>
        </NavLink>
        
      </div>

      {/* Layout 2 */}
      <div
        className={`${styles.imageWrapper} ${activeLayout === 'layout2' ? styles.active : ''}`}
        onClick={() => handleLayoutChange('layout2')}
      >
        <NavLink to ='/layout2' className={styles.link}>
        <img src={image2} alt="Layout 2" className={styles.img} />
        <div className={styles.layoutLabel}>Layout2</div>
        </NavLink>
        
      </div>
    </div>
  );
}

export default Nav;

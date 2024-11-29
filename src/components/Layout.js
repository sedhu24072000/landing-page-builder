import React from 'react';
import styles from './Layout.module.css';

const LandingPage = ({ heroText1, feature1Text1, feature2Text1, aboutText1 ,WBG, HBG,F1B,F2B,ABG}) => {
  return (
    <div className={styles.landingPage} style={{background: WBG}}>
      {/* Hero Section */}
      <section className={styles.hero} style={{background:HBG}} >
      <div dangerouslySetInnerHTML={{ __html: heroText1 }} />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature } style={{background: F1B}}>
        <div dangerouslySetInnerHTML={{ __html: feature1Text1 }} />
        </div>
        <div className={styles.feature} style={{background: F2B}}>
        <div dangerouslySetInnerHTML={{ __html: feature2Text1 }} />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} style={{background: ABG}}>
        <div className={styles.about-Text}>
        <div dangerouslySetInnerHTML={{ __html: aboutText1 }} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

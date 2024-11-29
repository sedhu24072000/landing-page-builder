import React from 'react';
import styles from './Layout2.module.css';

const LandingPage = ({ heroText2, feature1Text2, feature2Text2, feature3Text2,aboutText2,imgurl ,WBG, HBG,F1B,F2B,ABG}) => {
  return (
    <div className={styles.landingPage} style={{background: WBG}}>

      {/* Hero Section */}
      <section className={styles.hero} style={{background:HBG}} >
        <div className={styles.heroText} dangerouslySetInnerHTML={{ __html: heroText2 }} />
        <div className={styles.heroImage}>
          <img 
            src={imgurl} 
            alt="Hero Illustration"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature} style={{background: F1B}}>
          <div dangerouslySetInnerHTML={{ __html: feature1Text2 }} />
        </div>
        <div className={styles.feature} style={{background: F2B}}>
          <div dangerouslySetInnerHTML={{ __html: feature2Text2 }} />
        </div>
        <div className={styles.feature} style={{background: F2B}}>
          {/* Additional Feature */}
          <div dangerouslySetInnerHTML={{ __html: feature3Text2 }} />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} style={{background: ABG}}>
        <div className={styles.about-Text}>
          <div dangerouslySetInnerHTML={{ __html: aboutText2 }} />
        </div>
      </section>

    </div>
  );
};

export default LandingPage;


//https://entiretools.com/placeholder/600x300/D5D5D5/584959

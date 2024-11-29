import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './editableTwo.module.css';
import Layout2 from './Layout2';

const FullWhiteLayout = () => {

  const [disp, setDisp] = useState('none');
  const [WBG,setWBG] = useState('')
  const [HBG,setHBG] = useState('')
  const [F1B,setF1B] = useState('')
  const [F2B,setF2B] = useState('')
  const [F3B,setF3B] = useState('')
  const [ABG,setABG] = useState('')
  const [imgurl,setImgUrl] = useState('')

  const handleDisp = () =>{
    setDisp('block');
  }

  const [heroText2, setHeroText2] = useState(() =>
    localStorage.getItem('heroText2') || '<h1>Welcome</h1><p>Experience the difference.</p>'
  );
  const [feature1Text2, setFeature1Text2] = useState(() =>
    localStorage.getItem('feature1Text2') || '<h2>Feature 1</h2><p>Unlock powerful tools.</p>'
  );
  const [feature2Text2, setFeature2Text2] = useState(() =>
    localStorage.getItem('feature2Text2') || '<h2>Feature 2</h2><p>Innovation at every step.</p>'
  );
  const [feature3Text2, setFeature3Text2] = useState(() =>
    localStorage.getItem('feature3Text2') || '<h2>Feature 3</h2><p>Seamless integration.</p>'
  );
  const [aboutText2, setAboutText2] = useState(() =>
    localStorage.getItem('aboutText2') || '<h2>About Us</h2><p>We create extraordinary experiences.</p>'
  );

  useEffect(() => {
    localStorage.setItem('heroText2', heroText2);
  }, [heroText2]);

  useEffect(() => {
    localStorage.setItem('feature1Text2', feature1Text2);
  }, [feature1Text2]);

  useEffect(() => {
    localStorage.setItem('feature2Text2', feature2Text2);
  }, [feature2Text2]);

  useEffect(() => {
    localStorage.setItem('feature3Text2', feature3Text2);
  }, [feature3Text2]);

  useEffect(() => {
    localStorage.setItem('aboutText2', aboutText2);
  }, [aboutText2]);

  return (
    <>
      <div className={styles.layout}>
        {/* Hero Section */}
        <section className={styles.hero}>
  <div className={styles.heroCard}>
    <ReactQuill 
      value={heroText2} 
      onChange={setHeroText2} 
      modules={editorModules} 
      formats={editorFormats} 
    />
  </div>
  <div className={styles.heroCard}>
    <img 
      src="https://entiretools.com/placeholder/600x300/D5D5D5/584959" 
      alt="Hero Illustration" 
    />
  </div>
</section>


        {/* Three-Column Features Section */}
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <ReactQuill value={feature1Text2} onChange={setFeature1Text2} modules={editorModules} formats={editorFormats} />
          </div>
          <div className={styles.featureCard}>
            <ReactQuill value={feature2Text2} onChange={setFeature2Text2} modules={editorModules} formats={editorFormats} />
          </div>
          <div className={styles.featureCard}>
            <ReactQuill value={feature3Text2} onChange={setFeature3Text2} modules={editorModules} formats={editorFormats} />
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <ReactQuill value={aboutText2} onChange={setAboutText2} modules={editorModules} formats={editorFormats} />
        </section>
      </div>


      <div className={styles.backgroundInputs}>
  <div className={styles.inputGroup}>
    <label htmlFor="wholeBackground">Whole background</label>
    <input
      type="text"
      id="wholeBackground"
      placeholder="Enter background color"
      value={WBG}
      onChange={(e) => setWBG(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="heroBackground">Hero background</label>
    <input
      type="text"
      id="heroBackground"
      placeholder="Enter background color"
      value={HBG}
      onChange={(e) => setHBG(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="feature1Background">Feature 1 background</label>
    <input
      type="text"
      id="feature1Background"
      placeholder="Enter background color"
      value={F1B}
      onChange={(e) => setF1B(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="feature2Background">Feature 2 background</label>
    <input
      type="text"
      id="feature2Background"
      placeholder="Enter background color"
      value={F2B}
      onChange={(e) => setF2B(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="feature2Background">Feature 3 background</label>
    <input
      type="text"
      id="feature2Background"
      placeholder="Enter background color"
      value={F3B}
      onChange={(e) => setF3B(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="aboutBackground">About background</label>
    <input
      type="text"
      id="aboutBackground"
      placeholder="Enter background color"
      value={ABG}
      onChange={(e) => setABG(e.target.value)}
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="aboutBackground">Image Link</label>
    <input
      type="text"
      id="aboutBackground"
      placeholder="Enter background color"
      value={imgurl}
      onChange={(e) => setImgUrl(e.target.value)}
    />
  </div>
</div>

<div className={styles.previewButtonContainer}>
        <button className={styles.previewButton} onClick={handleDisp}>Preview</button>
      </div>

      <div style={{ display: disp }}>
        <Layout2  heroText2={heroText2} feature1Text2={feature1Text2} feature2Text2={feature2Text2} feature3Text2={feature3Text2} aboutText2={aboutText2} WBG={WBG}
          F1B={F1B}
          F2B={F2B}
          F3B={F3B}
          HBG={HBG}
          ABG={ABG}
          imgurl = {imgurl}
          />
      </div>
    </>
  );
};

const editorModules = {
  toolbar: [[{ header: '1' }, { header: '2' }], [{ list: 'ordered' }, { list: 'bullet' }], ['bold', 'italic', 'underline'], ['link', 'image'], [{ align: [] }, { color: [] }]],
};

const editorFormats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'align', 'link', 'image', 'color'];

export default FullWhiteLayout;

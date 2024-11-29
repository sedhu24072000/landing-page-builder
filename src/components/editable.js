import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './editable.module.css';
import Layout from './Layout'

const FullWhiteLayout = () => {
  const [disp, setDisp] = useState('none');
  const [WBG,setWBG] = useState('')
  const [HBG,setHBG] = useState('')
  const [F1B,setF1B] = useState('')
  const [F2B,setF2B] = useState('')
  const [ABG,setABG] = useState('')
  
  // Initialize state from local storage or with default values
  const [heroText1, setHeroText1] = useState(() => localStorage.getItem('heroText1') || '<h1>Welcome</h1><p>Experience the difference.</p>');
  const [feature1Text1, setFeature1Text1] = useState(() => localStorage.getItem('feature1Text1') || '<h2>Feature 1</h2><p>Unlock powerful tools.</p>');
  const [feature2Text1, setFeature2Text1] = useState(() => localStorage.getItem('feature2Text1') || '<h2>Feature 2</h2><p>Innovation at every step.</p>');
  const [aboutText1, setAboutText1] = useState(() => localStorage.getItem('aboutText1') || '<h2>About Us</h2><p>We create extraordinary experiences with innovation and excellence.</p>');

  const handleDisp = () => {
    setDisp('block');
  };

  // Save to local storage whenever content changes
  useEffect(() => {
    localStorage.setItem('heroText1', heroText1);
  }, [heroText1]);

  useEffect(() => {
    localStorage.setItem('feature1Text1', feature1Text1);
  }, [feature1Text1]);

  useEffect(() => {
    localStorage.setItem('feature2Text1', feature2Text1);
  }, [feature2Text1]);

  useEffect(() => {
    localStorage.setItem('aboutText1', aboutText1);
  }, [aboutText1]);

  return (
    <>
      <div className={styles.layout}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <ReactQuill
              value={heroText1}
              onChange={setHeroText1}
              modules={editorModules}
              formats={editorFormats}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <ReactQuill
              value={feature1Text1}
              onChange={setFeature1Text1}
              modules={editorModules}
              formats={editorFormats}
            />
          </div>
          <div className={styles.featureCard}>
            <ReactQuill
              value={feature2Text1}
              onChange={setFeature2Text1}
              modules={editorModules}
              formats={editorFormats}
            />
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <ReactQuill
            value={aboutText1}
            onChange={setAboutText1}
            modules={editorModules}
            formats={editorFormats}
          />
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
    <label htmlFor="aboutBackground">About background</label>
    <input
      type="text"
      id="aboutBackground"
      placeholder="Enter background color"
      value={ABG}
      onChange={(e) => setABG(e.target.value)}
    />
  </div>
</div>


      {/* Preview Button */}
      <div className={styles.previewButtonContainer}>
        <button className={styles.previewButton} onClick={handleDisp}>Preview</button>
      </div>

      {/* Display the updated content */}
      <div style={{ display: disp }}>
        <Layout
          heroText1={heroText1}
          feature1Text1={feature1Text1}
          feature2Text1={feature2Text1}
          aboutText1={aboutText1}
          WBG={WBG}
          F1B={F1B}
          F2B={F2B}
          HBG={HBG}
          ABG={ABG}
        />
      </div>
    </>
  );
};

const editorModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    [{ align: [] }, { 'color': [] }], // Enable the color picker
  ],
};

const editorFormats = [
  'header', 'bold', 'italic', 'underline', 'list', 'bullet', 'align', 'link', 'image', 'color', // Include color in the formats
];

export default FullWhiteLayout;

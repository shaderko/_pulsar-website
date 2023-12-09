import { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const imgRef = useRef<any>();

  const handleScroll = (e: any) => {
    const scrollTop = window.scrollY;
    const img = imgRef.current!;

    console.log('da', scrollTop);

    img.style.transform = `translate(-50%, calc(-50% + ${scrollTop / 2}px))`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="header">
        <span className="title-animation-container">
          <h1 className="header-title">Pulsar Digital</h1>
        </span>
        <span className="header-text-container">
          <h2 className="header-description">We help you with</h2>
          <h2 className="header-description-title">Websites</h2>
        </span>
      </div>
      <div className="image-container">
        <img
          ref={imgRef}
          className="main-img"
          src="./pulsar_background.png"
          draggable={false}
        />
      </div>
      <div className="header-btn-container">
        <button className="header-btn">
          <img src="./arrow.svg" />
        </button>
      </div>
    </div>
  );
};

export default Header;

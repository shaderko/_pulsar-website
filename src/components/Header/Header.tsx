import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [image, setImage] = useState<string>('./video/scene00030.jpg');

  const range = [30, 90];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    let x = e.pageX / window.innerWidth;
    const i = Math.floor(x * (range[1] - range[0]) + range[0]);
    setImage(`./video/scene000${i}.jpg`);
  };

  return (
    <div onMouseMove={handleMouseMove} className="main-container">
      <div className="header">
        <h1 className="header-title">Pulsar Digital</h1>
        <span className="header-text-container">
          <h2 className="header-description">We help you with</h2>
          <h2 className="header-description-title">Websites</h2>
        </span>
      </div>
      <img className="main-img" src={image} draggable={false} />
      <div className="header-btn-container">
        <button className="header-btn">
          <img src="./arrow.svg" />
        </button>
      </div>
    </div>
  );
};

export default Header;

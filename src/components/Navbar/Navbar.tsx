import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);

  const mainNavbarRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    setScrolled(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    hoverRef.current!.addEventListener('mouseover', () => {
      setHovered(true);
    });
    hoverRef.current!.addEventListener('mouseleave', () => {
      setHovered(false);
    });

    setTimeout(() => {
      mainNavbarRef.current!.classList.remove('loading');
    }, 100);

    // create the hover box

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (!hovered && scrolled >= 40) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }, [hovered, scrolled]);

  useEffect(() => {
    if (open) {
      mainNavbarRef.current?.classList.remove('closed');
    } else {
      mainNavbarRef.current?.classList.add('closed');
    }
  }, [open]);

  return (
    <>
      <div ref={hoverRef} className="navbar-hover">
        <div ref={mainNavbarRef} className="navbar closed loading">
          <ul className="navbar-menu">
            <li className="navbar-item active">
              <a href="/#">
                <img src="./pulsar_logo.png"></img>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about">About us</a>
            </li>
            <li className="navbar-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="navbar-item">
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

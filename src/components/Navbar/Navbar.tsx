import { useState, useEffect, useRef, MouseEvent } from 'react';
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

    // create the hover box

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const openHandler = (e: any) => {
    const target = e.target as HTMLElement;
    console.log(target);
    target.classList.add('active');
  };

  const closeHandler = (e: any) => {
    const target = e.target as HTMLElement;
    console.log(target);
    target.classList.remove('active');
  };

  return (
    <>
      <div ref={hoverRef} className="navbar-hover">
        <div ref={mainNavbarRef} className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item active">
              <a href="/#">
                <img src="./pulsar_logo.png"></img>
              </a>
            </li>
            <ul className="navbar-right-menu">
              <li className="navbar-item">
                <a href="#about">About us</a>
              </li>
              <li
                className="navbar-item"
                onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                  (e.target as HTMLElement).classList.add('active');
                  document.getElementById('projects')?.classList.add('show');
                }}
                onMouseLeave={closeHandler}
              >
                <a href="#projects">Projects</a>
              </li>
              <li className="navbar-item">
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </ul>
          <div id="projects">
            <div>
              <span>
                <div>
                  <img />
                </div>
                <div>
                  <h4></h4>
                  <p></p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

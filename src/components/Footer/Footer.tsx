import { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInViewport = (offset = 0) => {
    const top = ref.current!.getBoundingClientRect().top;
    return top + offset >= 0 && top + offset <= window.innerHeight;
  };

  const scrollHandler = () => {
    if (!isInViewport(-100)) {
      ref.current!.classList.remove('inview');
      console.log('footer hide');
      return;
    }

    console.log('footer show');
    ref.current!.classList.add('inview');
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLDivElement;
    const activeElements = document
      .getElementById('footer')
      ?.getElementsByClassName('active');
    for (let i = 0; i < activeElements!.length; i++) {
      if (activeElements!.item(i) != target) {
        activeElements!.item(i)!.classList.remove('active');
      }
    }

    document.body.style.setProperty(
      `--footer-clickable-${target.id}-top`,
      `${e.clientY - target.getBoundingClientRect().top - 0}px`
    );
    document.body.style.setProperty(
      `--footer-clickable-${target.id}-left`,
      `${e.clientX - target.getBoundingClientRect().left + 20}px`
    );
    target.classList.add('active');
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.remove('active');
  };

  return (
    <footer className="footer" id="footer">
      <div ref={ref} className="footer-content">
        <a
          href="https://pulsardp.com/"
          target="_blank"
          className="footer-clickable footer-a"
        >
          <img
            className="footer-img"
            src="https://pulsardp.com/pulsar_logo_thumbnail.png"
          />
        </a>
        <h6 className="footer-copyright desc-small">Copyright ©2023</h6>
        <ul className="footer-navbar">
          <li className="footer-nav-item">
            <a
              id="ig"
              style={{ color: '#f1f1f1' }}
              onMouseMove={handleTouch}
              onMouseLeave={handleLeave}
              href="https://www.instagram.com/pulsar.digital"
              target="__blank"
            >
              INSTAGRAM
            </a>
          </li>
          <li className="footer-nav-item">
            <a
              id="x"
              style={{ color: '#f1f1f1' }}
              onMouseMove={handleTouch}
              onMouseLeave={handleLeave}
              href="https://www.twitter.com/pulsar.digital"
              target="__blank"
            >
              TWITTER
            </a>
          </li>
          <li className="footer-nav-item">
            <a
              id="fb"
              style={{ color: '#f1f1f1' }}
              onMouseMove={handleTouch}
              onMouseLeave={handleLeave}
              href="https://www.facebook.com/pulsar.digital"
              target="__blank"
            >
              FACEBOOK
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  const isInViewport = (offset = 0) => {
    const top = ref.current!.getBoundingClientRect().top;
    return top + offset >= 0 && top + offset <= window.innerHeight;
  };

  const scrollHandler = () => {
    if (!isInViewport(700)) {
      ref.current!.classList.remove('inview');
      document.body.classList.remove('blackout');
      return;
    }

    ref.current!.classList.add('inview');
    document.body.classList.add('blackout');
  };

  const buttonPerspectiveHandler = (e: React.MouseEvent) => {
    btn.current!.classList.remove('notactive');
    const trans = `${
      btn.current!.getBoundingClientRect().left -
      e.clientX +
      btn.current!.getBoundingClientRect().width
    }px ${
      btn.current!.getBoundingClientRect().top -
      e.clientY +
      btn.current!.getBoundingClientRect().height
    }px`;
    btn.current!.style.perspectiveOrigin = trans;
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <section id="contact">
      <div ref={ref} className="contact-container">
        <div className="contact-content">
          <h2 className="desc-contact">Got a project in mind?</h2>
          <h1 className="title-contact">Contact Us</h1>
          <button ref={btn} className="contact-btn notactive">
            <div
              onMouseMove={buttonPerspectiveHandler}
              onMouseLeave={() => {
                btn.current!.classList.add('notactive');
                const trans = `${
                  btn.current!.getBoundingClientRect().width / 2
                }px ${btn.current!.getBoundingClientRect().height / 2}px`;
                btn.current!.style.perspectiveOrigin = trans;
              }}
              className="contact-btn-hover-container"
            ></div>
            <h2 className="contact-btn-title">Message us</h2>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

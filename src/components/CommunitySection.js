import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CommunitySection = () => {
  const booksRef = useRef([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        gsap.to(booksRef.current[0], {
          x: -400, 
          y: -300,
          rotation: -20,
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[1], {
          x: -400, 
          y: 100,
          rotation: -10,
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[2], {
          x: 0,
          y: 200,
          rotation: 0,
          scale: 1.2, 
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[3], {
          x: 400, 
          y: -300,
          rotation: 20,
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[4], {
          x: 400, 
          y: 100,
          rotation: 10,
          duration: 1.5,
          ease: 'power3.out',
        });
      } else {
        gsap.to(booksRef.current[0], {
          x: 0, 
          y: 0,
          rotation: -15,
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[1], {
          x: 0, 
          y: 0,
          rotation: -5, 
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[2], {
          x: 0, 
          y: 0,
          scale: 1.1, 
          rotation: 0, 
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[3], {
          x: 0,
          y: 0,
          rotation: 5, 
          duration: 1.5,
          ease: 'power3.out',
        });

        gsap.to(booksRef.current[4], {
          x: 0, 
          y: 0,
          rotation: 15, 
          duration: 1.5,
          ease: 'power3.out',
        });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section className="community-section relative bg-green text-yellow min-h-screen w-full py-16 px-8 overflow-hidden">
      <div
        className="absolute text-black inset-0 z-0 opacity-50 text-[1.25rem] leading-[1.5] tracking-tight overflow-hidden whitespace-pre-wrap"
        style={{ fontFamily: 'Neuton, serif' }}
      >
        {Array(50).fill(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida odio ut mollis luctus. Vestibulum scelerisque vitae felis et cursus. Morbi orci arcu, tincidunt porta sodales et, hendrerit nec odio. Curabitur a libero felis. Cras fringilla sit amet nunc et vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis massa sit amet ipsum aliquet facilisis sed non erat. Cras sodales molestie mollis. Aliquam laoreet libero dui, in tincidunt erat pellentesque ac. Sed pulvinar cursus purus a imperdiet. Donec lorem risus, suscipit vitae nulla a, finibus iaculis orci. Nulla risus sem, interdum quis blandit et, convallis hendrerit lorem. Integer sollicitudin nunc a pharetra tristique... '
        ).join('')}
      </div>

      <div className="relative  text-center">
        <p className="text-4xl italic mb-2" style={{ fontFamily: 'dm-sans-italic' }}>Rejoignez un club</p>
        <h1 className="text-8xl font-bold" style={{ fontFamily: 'dm-display' }}>Trouvez votre</h1>
        <h1 className="text-8xl font-bold" style={{ fontFamily: 'dm-display' }}>communauté</h1>
      </div>

      <div className="relative z-10 flex justify-center mt-12">
        {['/Book4.png', '/Book2.png', '/Book3.png', '/Book4.png', '/Book1.png'].map((src, index) => (
          <div
            key={index}
            className={`relative z-${10 - Math.abs(index - 2)} transform ${
              index === 2 ? 'scale-110' : index < 2 ? `rotate-[${-15 + index * 10}deg]` : `rotate-[${index * 10 - 15}deg]`
            } -mr-16`}
            ref={(el) => (booksRef.current[index] = el)} 
          >
            <img src={src} alt={`Book Cover ${index + 1}`} className="h-80 w-60 shadow-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;

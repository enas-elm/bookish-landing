import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CommunitySection = () => {
  const booksRef = useRef([])
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      const isMobile = window.innerWidth < 640

      if (currentScrollY > lastScrollY) {
        gsap.to(booksRef.current[0], {
          x: isMobile ? -150 : -400,
          y: isMobile ? -100 : -300,
          rotation: -20,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[1], {
          x: isMobile ? -150 : -400,
          y: isMobile ? 50 : 100,
          rotation: -10,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[2], {
          x: 0,
          y: isMobile ? 100 : 200,
          rotation: 0,
          scale: isMobile ? 1.1 : 1.2,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[3], {
          x: isMobile ? 150 : 400,
          y: isMobile ? -100 : -300,
          rotation: 20,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[4], {
          x: isMobile ? 150 : 400,
          y: isMobile ? 50 : 100,
          rotation: 10,
          duration: 1.5,
          ease: 'power3.out',
        })
      } else {
        gsap.to(booksRef.current[0], {
          x: 0,
          y: 0,
          rotation: -15,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[1], {
          x: 0,
          y: 0,
          rotation: -5,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[2], {
          x: 0,
          y: 0,
          scale: 1.1,
          rotation: 0,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[3], {
          x: 0,
          y: 0,
          rotation: 5,
          duration: 1.5,
          ease: 'power3.out',
        })

        gsap.to(booksRef.current[4], {
          x: 0,
          y: 0,
          rotation: 15,
          duration: 1.5,
          ease: 'power3.out',
        })
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <section className="relative bg-green text-yellow min-h-screen w-full py-16 px-8">
      <div className="relative text-center">
        <p className="text-2xl sm:text-4xl italic mb-2" style={{ fontFamily: 'dm-sans-italic' }}>Rejoignez un club</p>
        <h1 className="text-5xl sm:text-8xl font-bold" style={{ fontFamily: 'dm-display' }}>Trouvez votre</h1>
        <h1 className="text-5xl sm:text-8xl font-bold" style={{ fontFamily: 'dm-display' }}>communauté</h1>
      </div>

      <div className="relative z-10 flex justify-center mt-12 flex-wrap">
        {['/Book5.png', '/Book2.png', '/Book3.png', '/Book4.png', '/Book1.png'].map((src, index) => (
          <div
            key={index}
            className={`relative z-${10 - Math.abs(index - 2)} transform ${
              index === 2 ? 'scale-110' : index < 2 ? `rotate-[${-15 + index * 10}deg]` : `rotate-[${index * 10 - 15}deg]`
            } -mr-6 sm:-mr-16 ${index === 0 || index === 4 ? 'hidden sm:block' : ''}`} 
            ref={(el) => (booksRef.current[index] = el)}
          >
            <img src={src} alt={`Book Cover ${index + 1}`} className="h-40 w-20 sm:h-80 sm:w-60" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommunitySection

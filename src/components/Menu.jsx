import { useRef, useState } from 'react'
import { allMocktails } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
'use client';

const Menu = () => {

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
         gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1});
         gsap.fromTo('.mocktail img', {opacity: 0, xPercent: -100}, {xPercent: 0, opacity: 1, duration: 1, ease:'power1.inOut'})
         gsap.fromTo('.details h2', {yPercent: 100, opacity: 0},{yPercent: 0, opacity: 100, ease: 'power1.inOut'})
         gsap.fromTo('.details p', {yPercent: 100, opacity: 0},{yPercent: 0, opacity: 100, ease: 'power1.inOut'})
    },[currentIndex]);

    const totalMocktails = allMocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalMocktails) % totalMocktails;
        
        setCurrentIndex(newIndex);
    }

    const getMocktailAt = (indexOffset) => {
        return allMocktails[(currentIndex + indexOffset + totalMocktails) % totalMocktails]
    }

    const currentMocktail = getMocktailAt(0);
    const prevMocktail = getMocktailAt(-1);
    const nextMocktail = getMocktailAt(1);

  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>
    
        <h2 id='menu-heading' className='sr-only'>
            Mocktail Menu
        </h2>

        <nav className='mocktail-tabs' aria-label='Mocktail Navigation'>
            {
                allMocktails.map((mocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={mocktail.id} className={`
                        ${isActive ? 'text-white border-white' 
                        : 'text-white/50 border-white/50'}
                        `} onClick={() => goToSlide(index)}
                        >
                        {mocktail.name}
                        </button>
                    )
                })
            }
        </nav>

        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                    <span>{prevMocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
                </button>

                <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                    <span>{nextMocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
                </button>
            </div>

            <div className='mocktail'>
                <img src={currentMocktail.image} className='object-contain' />
            </div>

            <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>{currentMocktail.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentMocktail.title}</h2>
                    <p>{currentMocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
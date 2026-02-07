import React from 'react'
import { mocktailLists1, mocktailLists2 } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Mocktails = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#mocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        })

        parallaxTimeline
        .from('#m-left-leaf',{
            x: -100, y: 100
        })
        .from('#m-right-leaf',{
            x: 100, y: 100
        })
    })

  return (
    <section id='mocktails'>
        <img src="/images/mocktail-left-leaf.png" alt="l-leaf" id='m-left-leaf'/>
        <img src="/images/mocktail-right-leaf.png" alt="r-leaf" id='m-right-leaf'/>

        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Mocktails : </h2>
                <ul>
                    {
                        mocktailLists1.map(({ name, country, detail, price })=> (
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='loved '>
                <h2>Most Loved Mocktails : </h2>
                <ul>
                    {
                        mocktailLists2.map(({ name, country, detail, price })=> (
                            <li key={name}>
                                <div className='me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Mocktails
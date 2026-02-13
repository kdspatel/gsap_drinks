import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type:'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease : "power1.inOut"
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: '-50',
            duration: 1,
            ease: 'power1.inOut'
        })
        .to('#f-left-leaf', {
            y: '-50',
            duration: 1,
            ease: 'power1.inOut'
        }, '<')
    })

  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'/>
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf'/>
    
        <div className='content'>
            <h2>Where To Find Us</h2>

            <div>
                <h3>Visit Our Store</h3>
                <p>abc , Street Road , Gujarat , India</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>(+91) 0000 0000 00</p>
                <p><a href="mailto:feelfresh@example.com">feelfresh@example.com</a></p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social) => (
                        <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                            <img src={social.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className='drink-img'>
            <img src="/images/footer-mocktails.png" alt="img" />
        </div>
    </footer>
  )
}

export default Contact
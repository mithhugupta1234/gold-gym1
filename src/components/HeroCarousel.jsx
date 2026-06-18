import { useEffect, useState } from 'react'
import './hero-carousel.css'

export default function HeroCarousel({ slides = [] }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
        return () => clearInterval(id)
    }, [slides.length])

    function prev() {
        setIndex((i) => (i - 1 + slides.length) % slides.length)
    }
    function next() {
        setIndex((i) => (i + 1) % slides.length)
    }

    return (
        <div className="hero-wrapper">
            <section className="hero-carousel">
                <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {slides.map((s, i) => (
                        <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
                            <img src={s} alt={`slide-${i}`} />
                        </div>
                    ))}
                </div>
                <button className="arrow prev" onClick={prev} aria-label="Prev">‹</button>
                <button className="arrow next" onClick={next} aria-label="Next">›</button>
            </section>
        </div>
    )
}

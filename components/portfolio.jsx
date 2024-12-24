import React from 'react'
import style from '../styles/portfolio.module.css'
function portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.container}>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img alt='Airflex tissues' src={'/assets/airflex tissues.png'} />
          </div>
          <h3 className={style.h3}>Airflex Tissues</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/whatsapp-frontend" className='btn btn-primary'>Github</a>
            <a href="https://airflextissues.com/" title="https://airflextissues.com" className='btn'  >Live Demo</a>
          </div>
        </article>
        <article>
          <div className={style.itemImage}>
            <img alt='joseph studio' src={'/assets/joseph studio.png'} />
          </div>
          <h3 className={style.h3}>Joseph Studio</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/whatsapp-frontend" className='btn btn-primary'>Github</a>
            <a href="https://josephstudio.in/" title="https://josephstudio.in" className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img alt='E-commerece' src={'/assets/E-commerce Home Page.png'} />
          </div>
          <h3 className={style.h3}>E-Commerce Application</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/whatsapp-frontend" className='btn btn-primary'>Github</a>
            <a href="https://pair-care.live" title="chat.pair-care.live" className='btn'  >Live Demo</a>
          </div>
        </article>

        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio1.webp'} />
          </div>
          <h3 className={style.h3}>Whatsapp Web Application</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/whatsapp-frontend" className='btn btn-primary'>Github</a>
            <a href="https://chat.pair-care.live" title="chat.pair-care.live" className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio2.png'} />
          </div>
          <h3 className={style.h3}>Nextflix Feature Development</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/netflixm" className='btn btn-primary'>Github</a>
            <a href="https://chill.pair-care.live" title='chill.pair-care.live' className='btn' >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio3.png'} />
          </div>
          <h3 className={style.h3}>Custom Portfolio</h3>
          <div className={style.btn}>
            <a href="https://github.com/Mahammed-Siyabuddeen/avocado-nextjs" className='btn btn-primary'>Github</a>
            <a href="https://avocado-nextjs2.vercel.app/" className='btn'  >Live Demo</a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img src={'/assets/portfolio4.png'} />
          </div>
          <h3 className={style.h3}>Paicare portfolio</h3>
          <div className={style.btn}>
            <a href="https://github.com/mahammed-siyabuddeen" className='btn btn-primary'>Github</a>
            <a href="https://paircare.in" className='btn' >Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
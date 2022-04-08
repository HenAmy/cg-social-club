import React from 'react'
import Footer from '../../../components/Footer'
import Menu  from '../../../components/Menu'

export const Events = () => {
  return (
    <>
      <Menu/>
      <div className='container'>
        <div className="px-4 py-5 my-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 className="display-5 fw-bold">EVENTS</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">CG Socials is free and Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                
            </div>
        </div>
      </div>
      <div className='container' style={{ background: `url("https://via.placeholder.com/500")` }}>
        <div className="px-4 py-5 my-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 className="display-5 fw-bold" style={{ color: 'transparent' }}>The "EVENT" event</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" style={{ color: 'transparent' }}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={{ backgroundColor: '#EF841A', border: 'none', padding: 15, borderRadius: 25, width: '50%' }}>Learn More</button>
                </div>
            </div>
        </div>
      </div>
      <div className='container' style={{ background: `url("https://via.placeholder.com/500")` }}>
        <div className="px-4 py-5 my-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 className="display-5 fw-bold" style={{ color: 'transparent' }}>The "EVENT" event</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" style={{ color: 'transparent' }}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={{ backgroundColor: '#EF841A', border: 'none', padding: 15, borderRadius: 25, width: '50%' }}>Learn More</button>
                </div>
            </div>
        </div>
      </div>
      <div className='container' style={{ background: `url("https://via.placeholder.com/500")` }}>
        <div className="px-4 py-5 my-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 className="display-5 fw-bold" style={{ color: 'transparent' }}>The "EVENT" event</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" style={{ color: 'transparent' }}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={{ backgroundColor: '#EF841A', border: 'none', padding: 15, borderRadius: 25, width: '50%' }}>Learn More</button>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

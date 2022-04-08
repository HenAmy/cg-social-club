import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import Menu  from '../../../components/Menu'
import Footer from '../../../components/Footer';

const data = [
    {
        id: 1,
        name: 'Sports',
        followers: '2k',
    },
    {
        id: 2,
        name: 'Technology',
        followers: '5k',
    },
    {
        id: 3,
        name: 'Gaming',
        followers: '1k',
    },
    {
        id: 4,
        name: 'Health',
        followers: '6k',
    },
    {
        id: 5,
        name: 'Board Games',
        followers: '12k',
    },
    {
        id: 6,
        name: 'Buildings',
        followers: '2.5k',
    },
]

export const Home = () => {
  return (
      <>
        <Menu/>
        <div className='container'>
            <div className="px-4 py-5 my-5 text-center">
                {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
                <h1 className="display-5 fw-bold">The "EVENT" event</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button style={{ backgroundColor: '#EF841A', border: 'none', padding: 15, borderRadius: 25, width: '50%' }}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='row'>
            <h2>Interests</h2>
            <p>Sign in to view your interests</p>
                {
                    data.map((item) => {
                        return(
                            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-5">
                                <div className="card shadow h-100">
                                    {/* Image */}
                                    <img src="https://via.placeholder.com/500" className="card-img-top" alt="course image"/>
                                    {/* Card body  */}
                                    <div className="card-body pb-0">
                                        {/* Badge and favorite  */}
                                        <div className="d-flex justify-content-between mb-2">
                                            {/* <Link to="#" className="badge bg-purple bg-opacity-10 text-purple">All level</Link> */}
                                            {/* <Link to="#" className="h6 mb-0"><i className="far fa-heart"></i></Link> */}
                                        </div>
                                        {/* <!-- Title --> */}
                                        <h5 className="card-title "><Link to="#">{item.name}</Link></h5>
                                        <p className="mb-2 text-truncate-2">{item.followers}+ followers</p>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row align-items-center" style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="col-6">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">EVENT B1</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <button style={{width: '30%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}}>Learn More</button>
                    {/* <a href="#" className="btn btn-primary mb-0">View Reviews</a> */}
                </div>
                <div className="col-6">
                    <img width="100%" src='https://via.placeholder.com/500'/>
			    </div>
		    </div>
        </div>

        <div className='container' style={{ marginTop: 100, marginBottom: 100 }}>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <h2 className='text-center'>Join the Club</h2>
                    <p className='text-center'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                    {/* <button style={{width: '100%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}} >Join Now</button> */}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button style={{ backgroundColor: '#EF841A', border: 'none', padding: 15, borderRadius: 25, width: '50%' }}>Join Now</button>
                    </div>
                </div>
                <div className='col-3'></div>
            </div>
        </div>

        <Footer />
    </>
  )
}

import React from 'react'
import Footer from '../../../components/Footer'
import Menu from '../../../components/Menu'

export const Competitions = () => {
  return (
      <>
        <Menu /> 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <input width="100%" style={{ borderRadius: 30 }} className="form-control me-2" placeholder="Search..."/>
                </div>
                <div className='col-3'></div>
            </div>

            <div className="row align-items-center" style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="col-6">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">Old boys football match</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <button style={ {width: '30%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}}>Learn More</button>
                    {/* <a href="#" className="btn btn-primary mb-0">View Reviews</a> */}
                </div>
                <div className="col-6">
                    <img width="100%" src='https://via.placeholder.com/500'/>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row align-items-center" style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="col-6">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">Junior Leagues Trials</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <button style={ {width: '30%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}}>Learn More</button>
                    {/* <a href="#" className="btn btn-primary mb-0">View Reviews</a> */}
                </div>
                <div className="col-6">
                    <img width="100%" src='https://via.placeholder.com/500'/>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row align-items-center" style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="col-6">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">The Magic Show</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <button style={ {width: '30%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}}>Learn More</button>
                    {/* <a href="#" className="btn btn-primary mb-0">View Reviews</a> */}
                </div>
                <div className="col-6">
                    <img width="100%" src='https://via.placeholder.com/500'/>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row align-items-center" style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="col-6">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1">The Girls Talk Show</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
                    <button style={ {width: '30%',backgroundColor: '#FFEAD5', color: '#EF841A', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, justifySelf: 'center'}}>Learn More</button>
                    {/* <a href="#" className="btn btn-primary mb-0">View Reviews</a> */}
                </div>
                <div className="col-6">
                    <img width="100%" src='https://via.placeholder.com/500'/>
                </div>
            </div>
        </div>
        <Footer />
      </>
  )
}

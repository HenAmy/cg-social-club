import React from 'react'

export const Card = ({item}) => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="card shadow h-100">
            {/* Image */}
            <img src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg" className="card-img-top" alt="course image"/>
            {/* Card body  */}
            <div className="card-body pb-0">
                {/* Badge and favorite  */}
                <div className="d-flex justify-content-between mb-2">
                    <Link to="#" className="badge bg-purple bg-opacity-10 text-purple">All level</Link>
                    <Link to="#" className="h6 mb-0"><i className="far fa-heart"></i></Link>
                </div>
                {/* <!-- Title --> */}
                <h5 className="card-title "><Link to="#">{item.name}</Link></h5>
                <p className="mb-2 text-truncate-2">{item.followers}</p>
            </div>
            {/* <!-- Card footer --> */}
            {/* <div className="card-footer pt-0 pb-3">
                <hr/>
                <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>15 lectures</span>
                </div>
            </div> */}
        </div>
    </div>
  )
}

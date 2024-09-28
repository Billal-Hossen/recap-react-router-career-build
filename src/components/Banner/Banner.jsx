import React from 'react'
import banner from '../../assets/images/user.png'
export default function Banner() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="w-1/2 h-auto rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <span className='text-emerald-500'>Dream Job</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

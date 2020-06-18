import React from 'react'
import Link from 'next/link'

export default () => {

    return (
      <div className="container d-flex justify-content-center">
        <div className="col-md-6 col-sm-10 mt-5">

          <h1 className="mb-4 text-center">Sign In</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control"/>
              <p className="text-right">Forgot Password?</p>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Sign In</button>
              <p className="mt-4">Don't have an account? 
              <Link href="/signup"> 
                <a> Sign Up</a> 
              </Link>
              </p>
            </div>
          </form>

        </div>
      </div>
    )
}
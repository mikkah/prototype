import React, { useState } from 'react'
import Link from 'next/link'
import Layout from './components/Layout'
import { useMutation } from 'urql';
import { SignupDocument } from '../generated/graphql';

export default () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [{},initRegister] = useMutation(SignupDocument)

  const submitSignUp = async (e: any) => {
    e.preventDefault();
      const response = await initRegister({
          email,
          firstName,
          lastName
      })
      console.log('response', response.data.signUp);
    };


    return (
    <Layout title="Prototype | Sign Up">
      <div className="container d-flex justify-content-center">
        <div className="col-md-6 col-sm-10 mt-5">
          <h1 className="text-center">Sign Up</h1>
          <form onSubmit={(e) => submitSignUp(e)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Last Name</label>
              <input type="text" className="form-control"
              onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Email</label>
              <input type="text" className="form-control"
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="text-center">
              <p className="remarks">
                By clicking on Sign Up, you agree to our Terms of Service and Privacy Policy
              </p>
              <button className="btn btn-primary" type="submit">Sign Up</button>
              <p className="mt-3">Already have an account? 
              <Link href="/"> 
                <a> Sign in</a> 
              </Link>
              </p>
            </div>

          </form>

        </div>
      </div>
    </Layout>
    )
}
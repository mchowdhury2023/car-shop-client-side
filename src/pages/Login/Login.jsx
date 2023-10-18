import React, { useContext } from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../authentication/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";


const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

    const {signIn} = useContext(AuthContext);

    const location =useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            navigate(location?.state ? location.state : '/')})
            .catch(error => {
                console.log(error)
            })
        
    }

    const handleSignInWithGoogle = ()=> {
      signInWithPopup(auth, googleProvider)
      .then(result => {
        navigate(location?.state ? location.state : '/')
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error ',error.message);
      })
    }



  return (
    <div>
        
        <div>
        <h2 className="text-3xl text-center ">Please Login</h2>
      <form onSubmit={handleLogin} 
        className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='mt-4 text-center'>
          <h2>Sign in with</h2>
          <button onClick={handleSignInWithGoogle} className='btn'>Google</button>
        </div>
      <p className="text-center mt-4">Dont Have an Account? 
        <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
        
    </div>
  );
}

export default Login
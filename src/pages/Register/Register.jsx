import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../authentication/Authprovider';
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');

    const {user, createUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

     // State for form fields
     const [formData, setFormData] = useState({
      name: '',
      photoURL: '',
      email: '',
      password: ''
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const clearFormFields = () => {
      setFormData({
          name: '',
          photoURL: '',
          email: '',
          password: ''
      });
  }

  const handleRegister = (e) => {
    e.preventDefault();
    
    const { name, photoURL, email, password } = formData;

    setRegisterError('');
    setRegSuccess('');

    if (password.length < 6) {
        const errorMsg = "Password must be at least 6 characters long";
        setRegisterError(errorMsg);
        
       toast.error(errorMsg);
        clearFormFields();
        return;
    }

    if (!/[A-Z]/.test(password)) {
        const errorMsg = "Password must contain at least one uppercase letter";
        setRegisterError(errorMsg);
       
       toast.error(errorMsg);
        clearFormFields();
        return;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        const errorMsg = "Password must contain at least one special character";
        setRegisterError(errorMsg);
        
        toast.error(errorMsg);
        clearFormFields();
        return;
    }

    console.log("Form Data:", formData);


    // If validations pass, continue with user creation
    createUser(email, password)
    .then((result) => {
      console.log("Firebase User:", result.user);

      
      // Use the values provided by the user for the displayName and photoURL
      return updateProfile(result.user, {
        displayName: formData.name,
        photoURL: formData.photoURL
    });
  })
  .then(() => {

    updateUser({
      ...user, 
      displayName: name, 
      photoURL: photoURL
  }); 
      const successMsg = 'User created successfully';
      setRegSuccess(successMsg);
      toast.success(successMsg);
  
      clearFormFields();
      navigate('/');
  })
  .catch((error) => {
      console.log("Error:", error);
      setRegisterError(error.message);
      toast.error(error.message);
  });
    
        
};

      return (
        <div>
         
            <h2 className="text-3xl text-center ">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photoURL"
                  className="input input-bordered"
                  required
                  value={formData.photo}
                  onChange={handleInputChange}
                />
              </div>
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <ToastContainer></ToastContainer>
      
            <p className="text-center mt-4">
              Already Have an Account?
              <Link className="text-blue-600 font-bold ml-2" to="/login">
                Login
              </Link>
            </p>
            
          
        </div>
      );
}

export default Register
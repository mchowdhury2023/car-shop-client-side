// TestimonialForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TestimonialForm = () => {

    const handleAddFeedback = e => {

        e.preventDefault();
    
        const form = e.target;
    
        const name = form.name.value;
        const review = form.review.value;

        const newFeedback = {name,review};
        console.log(newFeedback);
    
       
        fetch('https://brand-shop-server-nupp88ewz-mahamudul-chowdhurys-projects.vercel.app/testimonials', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                // console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Feedback Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
      }
    
      return (
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl text-center font-extrabold mb-6">Submt your Feedback</h2>
          <form onSubmit={handleAddFeedback}>
            {/* Form Name and Quantity Row */}
            <div className="md:flex mb-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Your Review</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="review"
                    placeholder="Your Review"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
        
            <input
              type="submit"
              value="Submit"
              className="btn btn-block bg-slate-700 text-white"
            />
          </form>
        </div>
      );
};

export default TestimonialForm;

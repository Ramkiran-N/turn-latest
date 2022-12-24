import React from 'react'
import './Contact.css'

function Contact() {

  return (
    <div className='contact'>
        <div className="container-md mx-auto d-flex pt-5 flex-wrap text-center">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <h1>It's nice to meet you</h1>
                <p>For enquiries, please fill out the form to get in touch.</p>
            </div>
            <div className="col-12 col-md-6">
                <form action="">
                    <div className=" mt-3 input-div mx-auto d-flex flex-column align-items-center ">
                        <input type="text" name="" id="" className='input-field'/>
                        <label  id="label-username" class="input-label ">Username</label>
                    </div>
                    <div className=" mt-3 input-div mx-auto d-flex flex-column align-items-center">
                        
                        <input type="email" name="" id="" className='input-field'/>
                        <label  id="label-username" class="input-label ">Password</label>
                    </div>
                    <div className=" mt-3 input-div mx-auto d-flex flex-column align-items-center">
                        <input type="text" name="" id="" className='input-field'/>
                        <label  id="label-username" class="input-label ">Phone</label>
                        </div>
                    <div className=" mt-3 input-div mx-auto d-flex flex-column align-items-center">
                        <textarea name="" id="" cols="1" rows="5" className='input-field'></textarea>
                        <label  id="label-username" class="input-label ">Content</label>
                    </div>
                    
                    
                    <input type="submit" value="Send Message" className='mt-1 px-3 py-2 mt-3' />
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
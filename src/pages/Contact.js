import React from 'react'
import './Contact.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Contact() {

  return (
    <div className='contact'>
        <div className="container-md mx-auto d-flex pt-5 flex-wrap text-center">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <h1>It's nice to meet you</h1>
                <p>For enquiries, please fill out the form to get in touch.</p>
            </div>
            <div className="col-12 col-md-6 mb-5">
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
            <div className="col-12 mt-5 clients">
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 10,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 600,
                        min: 0
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 600
                    },
                    items: 6,
                    partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                        <div><img src="../../clients/1.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/2.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/3.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/4.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/5.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/6.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/7.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/1.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/2.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/3.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/4.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/5.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/6.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/7.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/1.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/2.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/3.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/4.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/5.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/6.png" alt="" srcset="" /></div>
                        <div><img src="../../clients/7.png" alt="" srcset="" /></div>
                </Carousel>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay
            interval={2500}
            showDots={false}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}>
                <div>
                    <img src="1.jpg" alt='turn'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="1.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="1.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="1.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
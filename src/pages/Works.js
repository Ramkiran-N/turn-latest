import React from 'react'
import './Works.css'

function Works() {
  return (
    <div className='works'>
        <div className="container d-flex flex-wrap justify-content-center pb-5">
            <div className="row d-flex">
                <ul className='mt-5 nav'>
                    <li className='mx-1'>All</li>
                    <li className='mx-1 active'>Branding</li>
                    <li className='mx-1'>Digital Marketing</li>
                    <li className='mx-1'>Print Ads</li>
                    <li className='mx-1'>Packaging</li>
                    <li className='mx-1'>Websites</li>
                    <li className='mx-1'>Tvc</li>
                </ul>
            </div>
            <div class="row">
                <div class="portfolio">
                    <img src="../works/branding/1.jpg" class="w-100 shadow-1-strong" alt="Boat on Calm Water"/>
                    <img src="../works/social-media/1.jpg" class="w-100 shadow-1-strong" alt="Wintry Mountain Landscape"/>
                
                    <img src="../works/outdoor/3.jpg" class="w-100 shadow-1-strong" alt="Mountains in the Clouds"/>
                    <img src="../works/print-ads/3.jpg" class="w-100 shadow-1-strong" alt="Boat on Calm Water"/>
                
                    <img src="../works/logos/1.png" class="w-100 shadow-1-strong" alt="Waves at Sea"/>
                    <img src="../works/design/3.jpg" class="w-100 shadow-1-strong" alt="Yosemite National Park"/>
                    <img src="../works/print-ads/3.jpg" class="w-100 shadow-1-strong" alt="Boat on Calm Water"/>
            
                    <img src="../works/package-design/1.jpg" class="w-100 shadow-1-strong" alt="Waves at Sea"/>
                    <img src="../works/websites/1.jpg" class="w-100 shadow-1-strong" alt="Yosemite National Park"/>
                    <img src="../works/websites/1.jpg" class="w-100 shadow-1-strong" alt="Yosemite National Park"/>
            
                    <img src="../works/package-design/1.jpg" class="w-100 shadow-1-strong" alt="Waves at Sea"/>
                    <img src="../works/websites/1.jpg" class="w-100 shadow-1-strong" alt="Yosemite National Park"/>
                    <img src="../works/websites/1.jpg" class="w-100 shadow-1-strong" alt="Yosemite National Park"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works
import React from 'react'

function AboutUs() {
  return (
        <div>
            <div className="col-md-6 mx-auto p-4">
            <img className="imagen-aboutUs" src={require('../../assets/AboutUs.png')} alt="" data-image-width="750" data-image-height="450"/>
            </div>
        </div>
    );
}

export default AboutUs;
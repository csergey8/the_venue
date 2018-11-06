import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5441.89610506055!2d30.51579792521313!3d50.454267472458824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa1b91f%3A0x42d5962fe7e791c!2sIndependence+Square!5e0!3m2!1sen!2sua!4v1541498306558" 
      width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullScreen
      >
    </iframe>
    <div className="location_tag">
      <div>Location</div>
    </div>
    </div>
  )
}

export default Location;

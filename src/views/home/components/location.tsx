import React from "react";

export default function Location() {
  return (
    <div className='heroLocation'>
      <h2>Current Location: Butuan</h2>
      <div className='locationMeta'>
        <h3>No. Services: <span>24</span></h3>
        <div className="serviceTags">
          <div className="sTag">Boarding House</div>
          <div className="sTag">Manicure</div>
          <div className="sTag">Water Delivery</div>
          <div className="sTag">Septic Tank Repairs</div>
        </div>
      </div>
    </div>
  );
}
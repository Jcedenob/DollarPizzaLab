import React, { Component } from 'react';
import hawaiian from './images/hawaiian.jpg';
import './css/slice.css';

function Hawaiian() {
  return(
    <div className="Hawaiian col-4">
      <div className="card">
        <img src={ hawaiian } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Hawaiian Slice</h5>
          <p className="card-text">Dont follow the trend of hating hawaiian pizza try it now .</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Hawaiian;
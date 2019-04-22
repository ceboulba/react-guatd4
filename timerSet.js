import React, { Component, Fragment } from 'react';

export default (props) => {
  <Fragment>
    <div className="columns is-mobile has-text-centered is-centered">
      <div className="column is-1">
        <span onClick={(e) => console.log('clickDown')} className='is-inline down'>
          <i className="fas fa-arrow-alt-circle-down" ></i>
        </span>
      </div>
      <div className="column is-narrow">
        <p className="subtitle">{props.compteurName}</p>
      </div >
      <div className="column is-1">
        <span onClick={(e) => console.log('clickUP')} className='up'>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </span>
      </div>
    </div>

    <div className="columns has-text-centered">
      <div className="column">
        <p className="title">{this.state.time} </p>
      </div >
    </div>
  </Fragment>
}
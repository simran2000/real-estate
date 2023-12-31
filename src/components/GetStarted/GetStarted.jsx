import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section id="getStarted" className="g-wrappewr">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.
                <br />
                Find your resisdence soon
                </span>
                <button className="button">
                    <a href="mailto:simarmishra11@gmail.com">
                        Get Started
                    </a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
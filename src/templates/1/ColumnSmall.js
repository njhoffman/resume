import React from 'react';

import './column-small.css';
import data from '../../data.json';

const ColumnSmall = () => (
  <div className="column small">
    <div className="content">
      <section className="name">
        <h1>Nicholas Hoffman</h1>
        <i>Senior Software Engineer</i>
      </section>
      <h4>Personal Info</h4>
      <section className="contact">
        <p>
          <span className="label">Address</span>
          <br />
          <span className="value">
            {data.contact.address}
            <br />
            {data.contact.city}, {data.contact.state} {data.contact.zip}
          </span>
        </p>
        <p>
          <span className="label">Phone</span>
          <br />
          <span className="value">{data.contact.phone}</span>
        </p>
        <p>
          <span className="label">Email</span>
          <br />
          <span className="value">{data.contact.email}</span>
        </p>
        <p>
          <span className="label">GitHub</span>
          <br />
          <span className="value">{data.contact.github}</span>
        </p>
        <p>
          <span className="label">LinkedIn</span>
          <br />
          <span className="value">{data.contact.linkedin}</span>
        </p>
      </section>
      <h4>Technical Skills</h4>
      <section className="skills">
        {data.skills.map(skill => (
          <div className="skill">
            <span className="name">{skill.name}</span>
            <div className="rating-wrapper">
              <div className="rating" style={{width: `${skill.rating}%`}}></div>
            </div>
            <span className="rating-label">
              {skill.rating > 90
                ? 'Excellent'
                : skill.rating > 80
                ? 'Proficient'
                : skill.rating > 70
                ? 'Advanced'
                : 'Average'}
            </span>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default ColumnSmall;

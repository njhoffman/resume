import React from 'react';

import './column-large.css';
import data from '../../data';

const ColumnLarge = () => (
  <div className="column large">
    <div className="content">
      <section className="summary">
        <ul>
          <li>
            Senior Software Engineering with nine years of hands-on experience
            in core web design, coding, and product life cycle development.
          </li>
          <li>
            Strongly motivated developer and a fast learner with a background in
            a variety of technology stacks.
          </li>
          <li>
            Broad array of skills developed throughout career including design,
            infrastructure, and system administration.
          </li>
          <li>
            Currently looking to contribute my services to a dynamic and growing
            company that values creativity and the adoption of new technology.
          </li>
        </ul>
      </section>
      <section className="summary hidden">
        System administration skills, including AWS, Apache and Nginx server
        configuration. Experienced in vertical and horizontal scaling of a
        variety of platforms to meet changing needs.
      </section>
      <section className="experience">
        <h3>Experience</h3>
        {data.jobs.map((job, i) => (
          <div className="job" key={i}>
            <div className="left">
              <p className="date">
                {job.dates[0]}-<br />
                {job.dates[1]}
              </p>
            </div>
            <div className="right header">
              <p className="title">{job.title}</p>
              <p>
                <span className="name">{job.name}</span>
                <span className="location">{job.location}</span>
              </p>
              <ul className="bullet-points">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="education">
        <h3>Education</h3>
        {data.education.map((item, i) => (
          <div className="education-item" key={i}>
            <div className="left">
              <p>
                {item.dates[0]}-<br />
                {item.dates[1]}
              </p>
            </div>
            <div className="right">
              <p className="title">{item.title}</p>
              <p>
                <span className="name">{item.name}</span>
                <span className="location">{item.location}</span>
              </p>
              <p className="content">{item.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default ColumnLarge;

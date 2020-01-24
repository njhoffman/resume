import React from 'react';

import './column-large.css';
import data from '../../data.json';

const ColumnLarge = () => (
  <div className="column large">
    <div className="content">
      <section className="summary">
        Senior Software Engineering with nine years of hands-on experience in
        core web design, coding, and product life cycle development. To
        contribute my programming services to a dynamic and growing company
        while expanding and diversifying my own skills.
      </section>
      <section className="summary hidden">
        System administration skills, including AWS, Apache and Nginx server
        configuration. Experienced in vertical and horizontal scaling of a
        variety of platforms to meet changing needs.
      </section>
      <section className="experience">
        <h3>Experience</h3>
        {data.jobs.map(job => (
          <div className="job">
            <div className="left">
              <p className="date">{job.dates}</p>
            </div>
            <div className="right">
              <p className="title">{job.title}</p>
              <p className="location">
                {job.name}, {job.location}
              </p>
              <p className="content">{job.content}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="education">
        <h3>Education</h3>
        {data.education.map(item => (
          <div className="education-item">
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
            <p>{item.name}</p>
            <p>{item.location}</p>
            <p>{item.dates}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default ColumnLarge;

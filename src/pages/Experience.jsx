import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { IoIosSchool } from "react-icons/io";

function Experience() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2009 - 2013'
        iconStyle={{ background: "#3e497a", color: "#fff"}}
        icon= {<IoIosSchool/>}>
        <h3 className="vertical-timeline-element-title"> Greenpark High School, Philippines</h3>
        <p> High School Diploma </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2009 - 2013'
        iconStyle={{ background: "#3e497a", color: "#fff"}}
        icon= {<IoIosSchool/>}>
        <h3 className="vertical-timeline-element-title"> AMA Computer College, Philippines</h3>
        <p> Unfinished Bachelor's of Science Degree </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2009 - 2013'
        iconStyle={{ background: "#3e497a", color: "#fff"}}
        icon= {<IoIosSchool/>}>
        <h3 className="vertical-timeline-element-title"> Full Stack Academy, New York, USA</h3>
        <p> Full Stack Developer Certificate </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  )
}

export default Experience

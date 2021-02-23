import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import heritageFund from '../images/HeritageFund.png';
import StreetScene from '../images/StreetScene.jpg';

const ResearchTimeLine = (properties) => {

    return (

        <>
        
        <div className="ResearchTimeLineHeader"><h1>Project Research</h1></div>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="March 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<i className='glyphicon glyphicon-question-sign'/>}>
                <h3 className="vertical-timeline-element-title">Project Beginning</h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p>During WW2 crime rose by a reported 57%. Fraud, gang culture, looting, and robbery impacted on people’s everyday life. 
                    Along with poverty, hunger, illness, and exceptional pressure – what was home really like during the war?
                    Behind closed doors, every house has a story. Dive into our digital art project, which interprets the stories and 
                    research we were given access to by individuals, the National Archives and The Imperial War Museum.
                    <br />
                    <br />
                    Things to do in a Blackout was a pre-pandemic idea. In early 2020, Bounce Theatre had engaged over 300 young people in Kingston to explore 
                    the rise in crime during WW2 and the contemporary parallels – petty crime, food poverty, and our relationship with Europe were some of 
                    the topics of conversation. All of the young people were to be invited to take over the National Archives in an evening of mixed art 
                    entertainment in May 2020.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Funding</h3>
                <p><img src={heritageFund} alt="The Heritage Lottery Fund" width="108px" height="40px" /></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <img src={StreetScene} alt="The work of art" width="400px" height="80px" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}/>
        </VerticalTimeline>

        </>
    )


}

export default ResearchTimeLine;
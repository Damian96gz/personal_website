import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
        <p><b>{education.description2}</b>{education.description3} </p>
        </div>
      })
      var researchinterest = this.props.data.researchinterest.map(function(researchinterest){
        return <div key={researchinterest.title}><h3>{researchinterest.title}</h3>
            <p>{researchinterest.description}<br/></p>
            <p>{researchinterest.description2}</p>
        </div>
      })
      var research = this.props.data.research.map(function(research){
        return <div key={research.company}><h3>{research.company}</h3>
            <p className="info">{research.title}<span>&bull;</span> <em className="date">{research.years}</em></p>
            <p2>{research.description}<br/></p2>
            <p2>{research.description2}<br/></p2>
            <p>{research.description3}</p>
        </div>
      })
      var publication = this.props.data.publication.map(function(publication){
        return <div>
            <p>{publication.description}<br/></p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p2>{work.description} <br/></p2>
            <p2>{work.description2}<br/></p2>
            <p2>{work.description3}<br/></p2>
            <p>{work.description4}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row researchinterest">

         <div className="three columns header-col">
            <h1><span>Research Interest</span></h1>
         </div>

         <div className="nine columns main-col">
          {researchinterest}
        </div>
      </div>

      <div className="row research">

         <div className="three columns header-col">
            <h1><span>Research</span></h1>
         </div>

         <div className="nine columns main-col">
          {research}
        </div>
      </div>

      <div className="row publication">

         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>

         <div className="nine columns main-col">
          {publication}
        </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      
   </section>
    );
  }
}

export default Resume;

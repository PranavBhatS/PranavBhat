import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Product Developer in Tekizma India Pvt ltd</h2>
                        <p>
                          In Tekizma i worked on multiple projects(Tekizma BI,9zest etc)).
                        </p>
                        <p>
                          <i><b>Project : </b></i> 9Zest<br></br>
                          <i><b>Environment : </b></i> Ionic 4, Spring boot<br></br>
                          <i><b>Description : </b></i> 9zest is a growing health-care company focused on providing solution to Parkinson’s, Stroke patients. The purpose of developing the Coach App was to enable the coach to collaborate with 9zest and sell their fitness plans through Google and Apple store.
User who is typically a coach could browse through list of exercise available or he can create new custom exercise, make a template out of it and then share it with the client. As a part of this project, I worked as front-end developer.
                        </p>
                        <p>
                          <i><b>Project : </b></i> Tekizma BI<br></br>
                          <i><b>Environment : </b></i> Angular 7, JQuery, Node Js<br></br>
                          <i><b>Description : </b></i> Developing a reporting tool which can be used to design custom dashboards.
                          Reporting portal is a business intelligence tool which offers data analytic capabilities.The major features of reporting portal are generating highly formatted reports based on sql queries ,filtering data ,downloading the reports in PDF or EXCEL formats, drilldown reports
                           ,sharing  the reports  with other users ,editing the dashboard, Designing datacubes.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Ajit Technologies</h2>
                        <p>
                          <i>Environment:</i> Angular 6,Firebase (FCM), DJango
                        </p>
                        <p>
                          In this company i worked as frontend developer. We created application for <b>Security system for Societies and Apartments</b>.
                        </p>
                        <p>
                          This is A simple tool that helps secure your gated communities at the click of button. From residents to security person and our app has many thoughtful additions and features for a hassle-free security experience. It provide the most bankable,
                           instant and smart technology solution that ensures the user remain secure and worry-free in gated societies.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java/ J2EE Internship in Uttara infotech</h2>
                        <p>I have completed Java/ J2EE Internship. There i learnt  writing test cases in Test Driven Development and Behavior Driven Development.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of Engineering</h2>
                        <p>I have completed my B.E in Electronics and communication.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

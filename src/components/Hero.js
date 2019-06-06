import React, { PureComponent } from 'react'
import InterestForm from './InterestForm'

export default class Hero extends PureComponent {
  render() {
    return (
      <section className="hero-home hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="content-area">
                  <h1 className="title">You got tickets? We got answers!</h1>
                  <h2 className="subtitle">
                    Get help with your traffic violation.
                  </h2>
                  <p>
                    Here are some things you might not know about traffic
                    tickets.
                  </p>
                  <ul>
                    <li>Do this thing</li>
                    <li>Then do this</li>
                    <li>Don't worry, we got this!</li>
                  </ul>
                </div>
              </div>

              <div className="column is-half">
                <InterestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

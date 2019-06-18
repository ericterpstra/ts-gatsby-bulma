import React, { PureComponent } from 'react'
import InterestForm from './InterestForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default class Hero extends PureComponent {
  render() {
    return (
      <section className="hero-home hero hero-gavel is-fullheight is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="content-area">
                  <h1 className="title">You got tickets? We got answers!</h1>
                  <h2 className="subtitle">
                    Get help with your traffic violation.
                  </h2>
                  <p className="hero-content">
                    There are a lot of things to know about fighting traffic
                    tickets in Iowa. Here are some things you might not know
                    about traffic tickets:
                  </p>
                  <ul className="hero-list fa-ul">
                    <li>
                      <span className="fa-li">
                        <FontAwesomeIcon icon={faCheckSquare} />
                      </span>
                      Do this thing
                    </li>
                    <li>
                      <span className="fa-li">
                        <FontAwesomeIcon icon={faCheckSquare} />
                      </span>
                      Then do this
                    </li>
                    <li>
                      <span className="fa-li">
                        <FontAwesomeIcon icon={faCheckSquare} />
                      </span>
                      Don't worry, we got this!
                    </li>
                  </ul>
                  <p className="hero-content">
                    Fill out the form and an experienced lawyer will get back to
                    you with some great info! If you have your citation number
                    (e.g. A389455), that would help us serve you faster and more
                    effectively!
                  </p>
                </div>
              </div>

              <div className="column is-half">
                <h2 className="hero-right-column-title is-size-2 has-text-centered">
                  Free Consultation!
                </h2>
                <InterestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

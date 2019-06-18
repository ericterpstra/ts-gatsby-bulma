import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faUser,
  faPhone,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'

export default class InterestForm extends PureComponent {
  render() {
    return (
      <div className="interest-form-wrapper">
        <div className="field">
          <div className="control  has-icons-left">
            <input className="input is-medium" type="text" placeholder="Name" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-medium"
              type="text"
              placeholder="Phone Number"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-medium"
              type="text"
              placeholder="Ticket Number"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
        </div>

        <div className="field is-pulled-right">
          <div className="control is-expanded">
            <button className="button is-warning is-medium">
              Request A Call
            </button>
          </div>
        </div>
      </div>
    )
  }
}

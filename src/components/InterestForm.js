import React, { PureComponent } from 'react'

export default class InterestForm extends PureComponent {
  render() {
    return (
      <div className="interest-form-wrapper">
        <div className="field">
          <div className="control">
            <input className="input is-medium" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Ticket Number"
            />
          </div>
        </div>

        <div className="field is-grouped">
          <p className="control is-expanded">
            <span className="select is-medium is-fullwidth">
              <select>
                <option>Best Time to Call...</option>
                <option value="morning">Morning</option>
                <option value="morning">Afternoon</option>
                <option value="morning">Evening</option>
                <option value="morning">Email Only, Please</option>
              </select>
            </span>
          </p>
          <p className="control">
            <a className="button is-warning is-medium">Request A Call</a>
          </p>
        </div>
      </div>
    )
  }
}

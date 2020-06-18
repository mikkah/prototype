import React from 'react'

export default () => {
  const loggedUser = {
    name: "Mikhael"
  }
    return (
      <div className="container-fluid">
        <div className="header mt-3 d-flex justify-content-between">
          <div className="brand">
            <h4>PrototypeBrand</h4>
          </div>
          <div className="profile">
            <div className="profile-name">
              { loggedUser.name }
            </div>
            <div className="profile-picture">

            </div>
          </div>
        </div>

        <div className="banner mt-5 d-flex">
          <div className="greeting">
            <h2>Hi {loggedUser.name},</h2>
          </div>
        </div>
      </div>
    )
}
import React from 'react'

function UserDetailForm({ otherUser }) {


  function handleSubmit(e) {
    e.preventDefault()
    window.alert(`Message Sent to ${otherUser.name}`)
    e.target.reset()
  }

    return (
        <div>
                <h1 className="noTeamH1">
                  {otherUser.name} hasn't created a team yet!
                </h1>
                <h3 style={{textAlign: "center", marginTop: "100px"}}>Send {otherUser.name} a message</h3>
                <form className="userForm" onSubmit={handleSubmit}>
                  <label>
                    <textarea
                      className="message"
                      type="text"
                      placeholder="Send A Message"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                  </label>
                </form>
              </div>
    )
}

export default UserDetailForm
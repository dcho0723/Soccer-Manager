import React from "react"
import { useState, useEffect } from "react"
import TeamCard from "./TeamCard"


function Team({ teamData, user, setTeamData }) {

    
    return(
        <div >
        <TeamCard teamData={teamData} setTeamData={setTeamData} />
        </div>
    )

}

export default Team;
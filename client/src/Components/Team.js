import React from "react"
import TeamCard from "./TeamCard"


function Team({ teamData, setTeamData }) {

    
    return(
        <div >
        <TeamCard teamData={teamData} setTeamData={setTeamData} />
        </div>
    )

}

export default Team;
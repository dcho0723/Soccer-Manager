import React from "react"
import { useState, useEffect } from "react"

function Team({teamData}) {


    // need to fix fetch for teamData, it is rendering as a blank array at first. 
    console.log(teamData)
    const returnTeam = teamData.map((player) => {
        return(
            <div key={player.id}>
                <h1>{player.name}</h1>
            </div>
        )
    })
    return(
        <>
        <h1>hello in team</h1>
        {returnTeam}
        </>
    )

}

export default Team;
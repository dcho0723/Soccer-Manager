import React from "react"
import { useState, useEffect } from "react"
import TeamCard from "./TeamCard"

function Team({ teamData, user }) {


    // need to fix fetch for teamData, it is rendering as a blank array at first. 
    // console.log(teamData)
    // const returnTeam = teamData.map((player) => {
    //     return(
    //         <div key={player.id}>
    //         </div>
    //     )
    // })
    // console.log(teamData)
    return(
        <>
        <h1>hello in team</h1>
        {teamData.map((player) => {
            // console.log(player)
            return (
                <div key={player.id}>
                    <TeamCard 
                    id={player.id}
                    dob={player.dob}
                    club={player.club}
                    country={player.country}
                    image={player.image}
                    name={player.name}
                    rating={player.rating}
                    number={player.number}
                    position={player.position}
                    pace={player.pace}
                    shot={player.shot}
                    pass={player.pass}
                    dribble={player.dribble}
                    defence={player.defence}
                    physical={player.physical}
                    bench={player.bench}
                    user={user}
                    />
                </div>
            )
        })}
        </>
    )

}

export default Team;
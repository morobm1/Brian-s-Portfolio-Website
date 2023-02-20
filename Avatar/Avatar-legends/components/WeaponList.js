

function WeaponsList() {


    const weaponsbending = [ 
        {
            title:"Weapons placeholder -Detect the Heavy Step",
            approach:"Defend & Maneuver", 
            desc:"Use seismic sense to detect the instant an enemy is about to move against"
        },
        {
            title:"Breath of Ice",
            approach:"Defend & Maneuver", 
            desc:"Become ready to breathe shivering cold upon any foe who gets close to you. Any foe engaged with you at any point in this exhange becomes Impaired until they clear the ice from their limbs."
        },
        {
            title:"Creeping Ice",
            approach:"Evade & Observe", 
            desc:"Carefully and stealthily extend a sheet of ice out beneath foes of your choice; they become Impaired as long as they remain on the ice, and you become Prepared to engage with them."
        },
        {
            title:"Crushing Grip of Seas",
            approach:"Advance & Attack", 
            desc:"Throw a tendril of water that wraps around a foe's limb and holds it in place. Mark 1-fatigue and inflict Impaired on a foe; mark an additional 2-fatigue to inflict Trapped on that foe with a second tendril. If the foe is already Impaired, you only need to pay 2-fatigue for Trapped."
        },
        {
            title:"Flow As Water",
            approach:"Defend & Maneuver", 
            desc:"Use a jet of water to propel you smoothly around obstacles. Mark 1-fatigue and move to a new location. If you engage with or disengage from a foe, they are Impaired."
        },
        {
            title:"Freeze Blood",
            approach:"Defend & Maneuver", 
            desc:"Use bloodbending to seize a target and hold them in place. Your must be Empowered to use this technique. Mark 1-fatigue; your target becomes Trapped and/or Dommed, your choice. If this is your first, second, or third time ever using this technique, mark a condition."
        },
        {
            title:"Ice Gauntlet",
            approach:"Defend & Maneuver", 
            desc:"Cover your hand with a shethe of ice. Become Prepared. When you next make an attack, inflict an additional 1-fatigue."
        },
        {
            title:"Ice Prison",
            approach:"Advance & Attack", 
            desc:"Aggressively wrap a foe in ice. Mark 2-fatigue to inflict Trapped on a foe standing in water or on ice."
        },
        {
            title:"Refresh",
            approach:"Evand & Observe", 
            desc:"Apply water to reinvigorate and close wounds on a willing target. Mark 1-fatigue to heal an ally in reach who is evading and observing. Clear an apprropriate status from them, and clear 3-fatigue or two conditions."
        },
        {
            title:"Stream The Water",
            approach:"Advance & Attack", 
            desc:"Push a high-powered stream of water from a significant source. Mark fatigue to inflict a condition on a foe within reach of the water source; they are pinned against someting and cannot shift positions or engage foes other than you until they break the stream or you drop it. Mark 1-fatigue at the end of each exhange to continue the stream."
        },
        {
            title:"Slip Over Ice",
            approach:"Evade & Observe", 
            desc:"Use ice and water to slip around your environment with ease while putting foes off-balance. Clear 1-fatique (in addition to clearing 1-fatigue via evade and observe) and reposition foes within reach, deciding who is engaged with whom unless they are willing to mark 1-fatigue and become Impaired to remain where they are."
        },
        {
            title:"Water Cloak",
            approach:"Defend & Maneuver", 
            desc:"Surrond yourself with water; mark fatigue and hold 3. Spend your hold 1-for-1 to reduce the 1-fatigue or conditions inflicted by an incoming attack by 1; to become Favored for the next exhange, as long as you use waterbending techniques; or to throw water into the envioronment, effecting it and possibley inflicting a status. Mark 1-fatigue at the end of each exhange to maintain the hold to the next exchange."
        },
    
        {
            title:"Water Whip",
            approach:"Defend & Maneuver", 
            desc:"Lash out with a tendril of water. Mark 1-fatigue to inflict a condition or 2-fatigue, your choice."
        },
    ]
    
    const weaponsList = weaponsbending.map(weapons => 
        <div>
            <h1>{weapons.title}</h1>
            <h4>{weapons.approach}</h4>
            <p>{weapons.desc}</p>
            
    
        </div>)
    
        return <div>{weaponsList}</div>
    
    }
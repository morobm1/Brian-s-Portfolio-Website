
function TechList() {

    const universal = [ 
        {
            title:"Attack Weakness",
            approach:"Advance & Attack", 
            desc:"Strike an enemy at a weak point where they've already been ingured. Mark 1-Fatigue to target an engaged, imapired emay in teach; they suffer fatigue equal to however many conditions they already have marked."
        },
        
    
        {
            title:"Charge",
            approach:"Advance & Attack", 
            desc:"Advance straight at an enemy to strike them full force. Mark 1-fatigue to close the distance and engage with an enemy you aren't currently engaged with, inflicting one condition or 2-fatigue (their choice). Become favored for the next exhange."
        },
    
        {
            title:"Duck and Twist",
            approach:"Evade & Observe", 
            desc:"Rely on your fast movement to help keep you out of the worst of hearm's way. Mark 1-fatigue to clear one condition and become Favored."
        },
    
        {
            title:"Forceful Blow",
            approach:"Advance & Attack", 
            desc:"Swing at an enemy with all your might, sending them flying. Mark 1-fatigue and inflict 2-fatigue or one condition on your target (your choice). Then push them to a new position of your choice unless they mark 2-fatigue."
        },
    
        {
            title:"Furious Assault",
            approach:"Advance & Attack", 
            desc:"Marke a unbalanced, impassioned strick. Become Impaired due to your overwhelming passion, shift your balance away from center, and inflict conditions equal to your PASSION on an enemy; NPCs instead inflict conditions equal to their current balance. You may only removed Impaired when your balance is at your center."
        },
    
        {
            title:"Pounce",
            approach:"Advance & Attack", 
            desc:"Press the advantage against an enemy who is off-balance. Mark 1-fatigue to inflict Impaired on a foe, or inflict Stunned on an Impaired foe, or inflict 5-fatigue on a Stunned foe."
        },
    
        {
            title:"Protect",
            approach:"Defend & Maneuver", 
            desc:"Protect an ally with reach. Mark 1-fatigue  to intercept and stop and attack made against them in this exchange; if no attack is made against them in this exchange, you both become Inspired."
        },
    
        {
            title:"Rapid Assessment",
            approach:"Evade & Observe", 
            desc:"Quickly take in your situation far faster than normal. Ask one question about the situation at hand. Become Prepared to act on the answer, and you may call out your plan to an ally to make them Prepared as well."
        },
    
        {
            title:"Seek Vulnerabilities",
            approach:"Evade & Observe", 
            desc:"Examine your foe for weak points. The next time you inflict a condition or fatigue on them, you may also shift their balance. If you know what their principle is, then you may mark 1-fatigue to shift their balance a second time."
        },
    
        {
            title:"Sense Enviroment",
            approach:"Evade & Observe", 
            desc:"Look for opportunities to usefully reshape your environment. The next time you advance and attack or defend and maneuver, you may use Smash or Ready, as appropriate, in addition to any other techniques you use, even on a miss. When you use Smash or Ready this way, do not mark fatigue."
        },
    
        {
            title:"Stand Strong",
            approach:"Defend & Maneuver", 
            desc:"Plant your feet and prepare yourself for incoming blows. Become Prepared, and you automatically block or avoid any negative statuses inflicted on you this exchange."
        },
    
        {
            title:"Suck It Up",
            approach:"Defend & Maneuver", 
            desc:"Focus and absorb a clow, ready yourself to act immediatly after. For each attack that inflicts fatigue, conditions, or balance shifts on you this exhange, choose one additional technique next exchange (even if you roll a miss on the stance move)."
        },
    
        {
            title:"Take Cover",
            approach:"Defend & Maneuver", 
            desc:"Swerve and maneuver into cover. The first attack on you this exchange strikes your cover, damaing or destroying it, but leaving you unharmed."
        }
    ]

    const universalList = universal.map(universal => 
    <div>
        <h1>{universal.title}</h1>
        <h4>{universal.approach}</h4>
        <p>{universal.desc}</p>
    </div>)

    return <div>{universalList}</div>

}

export default TechList
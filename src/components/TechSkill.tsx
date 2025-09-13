import React from 'react'
import TechSkills from './ui/TechSkills'
import { backEnd, frontEnd, others } from "@/data";
const TechSkill = () => {
    return (
        <section className='section-container'>
            <TechSkills title={frontEnd.title} skill={frontEnd.skills} />
            <TechSkills title={backEnd.title} skill={backEnd.skills} />
            <TechSkills title={others.title} skill={others.skills} />
        </section>
    )
}

export default TechSkill
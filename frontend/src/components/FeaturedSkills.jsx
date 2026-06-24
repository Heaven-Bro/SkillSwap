import { useEffect, useState } from "react";

import { getSkills } from "../api/skillApi";

import SkillCard from "./SkillCard";

function FeaturedSkills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        loadSkills();

    }, []);

    async function loadSkills() {

        const response = await getSkills();

        setSkills(response.data.results.slice(0, 6));

    }

    return (

        <section className="max-w-7xl mx-auto py-10">

            <h2 className="text-3xl font-bold mb-6">

                Featured Skills

            </h2>

            <div className="grid md:grid-cols-3 gap-5">

                {

                    skills.map(skill => (

                        <SkillCard

                            key={skill.id}

                            skill={skill}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default FeaturedSkills;
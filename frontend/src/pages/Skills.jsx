import { useEffect, useState } from "react";
import { getSkills } from "../api/skillApi";
import SkillCard from "../components/SkillCard";
import Navbar from "../components/Navbar";

function Skills() {
    const [skills, setskills] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        loadSkills();
    }, []);
    async function loadSkills() {
        try {
            const response = await getSkills();
            setskills(response.data.results);
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setloading(false);

        }
    }
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto p-5">
                <h1 className="text-3xl font-bold mb-5">

                    All Skills
                </h1>
                {
                    loading ?
                        <h2>Loading</h2>
                        :
                        <div className="grid md:grid-cols-3 gap-5">
                            {
                                skills.map((skill) => (
                                    <SkillCard
                                        key={skill.id}
                                        skill={skill}
                                    />
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default Skills;
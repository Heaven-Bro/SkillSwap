import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getSkill } from "../api/skillApi";

function SkillDetails() {

    const { id } = useParams();

    const [skill, setSkill] = useState(null);

    useEffect(() => {

        loadSkill();

    }, []);

    async function loadSkill() {

        const response = await getSkill(id);

        setSkill(response.data);

    }

    if (!skill) {

        return (

            <>
                <Navbar />
                <div className="p-10 text-center">
                    Loading...
                </div>
            </>

        );

    }

    return (

        <>
            <Navbar />

            <div className="max-w-5xl mx-auto mt-10">

                <div className="bg-white rounded-xl shadow p-8">

                    <h1 className="text-4xl font-bold">

                        {skill.title}

                    </h1>

                    <div className="mt-5 flex gap-3">

                        <span className="bg-blue-100 px-4 py-2 rounded">

                            {skill.category_name}

                        </span>

                        <span className="bg-green-100 px-4 py-2 rounded">

                            {skill.experience_level}

                        </span>

                    </div>

                    <p className="mt-8 text-gray-700 leading-8">

                        {skill.description}

                    </p>

                    <div className="mt-8 border-t pt-6">

                        <h3 className="font-bold text-xl">

                            Skill Owner

                        </h3>

                        <p className="mt-2">

                            {skill.owner_name}

                        </p>

                    </div>

                    <button

                        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"

                    >

                        Request Skill Exchange

                    </button>

                </div>

            </div>

        </>

    );

}

export default SkillDetails;
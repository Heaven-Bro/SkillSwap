import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import SkillForm from "../components/SkillForm";

import { createSkill } from "../api/skillApi";

function CreateSkill() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        owner_name: "",
        category: "",
        experience_level: "Beginner",

    });

    async function handleSubmit(e) {

        e.preventDefault();

        await createSkill(formData);

        navigate("/skills");

    }

    return (

        <>

            <Navbar />

            <div className="max-w-3xl mx-auto mt-10">

                <h1 className="text-3xl font-bold mb-6">

                    Create Skill

                </h1>

                <SkillForm

                    formData={formData}

                    setFormData={setFormData}

                    onSubmit={handleSubmit}

                />

            </div>

        </>

    );

}

export default CreateSkill;
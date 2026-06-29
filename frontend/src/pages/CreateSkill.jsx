import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import SkillForm from "../components/SkillForm";

import { createSkill } from "../api/skillApi";

function CreateSkill() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({

        title: "",
        description: "",
        category: "",
        experience_level: "Beginner",

    });

    async function handleSubmit(e) {

        e.preventDefault();
        if(!formData.title.trim()){
            alert("Title is required");
            return;
        }
        if(!formData.description.trim()){
            alert("Description is required");
            return;
        }
        
        if(!formData.category){
            alert("please select a category");
            return;
        }
        try {
            setLoading(true);
            await createSkill(formData);
            alert("Skill created sucessfully");
            navigate("/skills");
        } catch (error){
            console.error(error);
            alert("Something wwent wrong");
        }finally {
            setLoading(false);
        }

    }

    return (

        <>

            <Navbar />

            <div className="max-w-3xl mx-auto mt-10">

                <h1 className="text-3xl font-bold mb-6">

                    Create Skill

                </h1>
                {loading && (
                    <p className="mb-4 text-blue-600">Saving</p>
                )}

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
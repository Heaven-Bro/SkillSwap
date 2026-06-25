import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

import Navbar from "../components/Navbar";
import SkillForm from "../components/SkillForm";

import {getSkill, updateSkill} from "../api/skillApi";


function EditSkill(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        owner_name: "",
        category: "",
        experience_level: "Beginner",
    });

    useEffect(() => {
        loadSkill();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        await updateSkill(id, formData);
        navigate(`/skills/${id}`);
    }

    return (
        <>
            <Navbar/>
            <div className="max-w-3xl mx-auto mt-10">
                <h1 className="text-3xl font-bold mb-6">
                    Edit Skill
                </h1>
                <SkillForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                    />
            </div>
        </>
    )
}


export default EditSkill;
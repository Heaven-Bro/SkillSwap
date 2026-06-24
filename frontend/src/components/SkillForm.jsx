import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";

function SkillForm({ formData, setFormData, onSubmit }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        const response = await getCategories();
        setCategories(response.data);
    }

    return (

        <form
            onSubmit={onSubmit}
            className="space-y-5"
        >

            <input
                type="text"
                placeholder="Skill Title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        title: e.target.value
                    })
                }
                className="w-full border p-3 rounded"
            />

            <textarea
                placeholder="Description"
                rows="5"
                value={formData.description}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        description: e.target.value
                    })
                }
                className="w-full border p-3 rounded"
            />

            <input
                type="text"
                placeholder="Owner Name"
                value={formData.owner_name}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        owner_name: e.target.value
                    })
                }
                className="w-full border p-3 rounded"
            />

            <select
                value={formData.category}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        category: e.target.value
                    })
                }
                className="w-full border p-3 rounded"
            >

                <option value="">
                    Select Category
                </option>

                {

                    categories.map(category => (

                        <option
                            key={category.id}
                            value={category.id}
                        >

                            {category.name}

                        </option>

                    ))

                }

            </select>

            <select
                value={formData.experience_level}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        experience_level: e.target.value
                    })
                }
                className="w-full border p-3 rounded"
            >

                <option value="Beginner">
                    Beginner
                </option>

                <option value="Intermediate">
                    Intermediate
                </option>

                <option value="Advanced">
                    Advanced
                </option>

            </select>

            <button
                className="bg-blue-600 text-white px-6 py-3 rounded"
            >

                Save Skill

            </button>

        </form>

    );

}

export default SkillForm;
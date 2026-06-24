import { Link } from "react-router-dom";

function SkillCard({ skill }) {

    return (

        <Link to={`/skills/${skill.id}`}>

            <div className="border rounded-lg p-5 hover:shadow-lg transition bg-white">

                <h2 className="text-xl font-bold">

                    {skill.title}

                </h2>

                <p className="mt-3 text-gray-600 line-clamp-3">

                    {skill.description}

                </p>

                <div className="mt-4 flex justify-between">

                    <span className="bg-blue-100 px-3 py-1 rounded">

                        {skill.category_name}

                    </span>

                    <span>

                        {skill.experience_level}

                    </span>

                </div>

                <div className="mt-4 text-gray-500">

                    {skill.owner_name}

                </div>

            </div>

        </Link>

    );

}

export default SkillCard;
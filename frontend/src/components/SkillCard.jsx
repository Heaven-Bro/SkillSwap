function SkillCard({ skill }) {

    return (

        <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">

            <h2 className="text-xl font-bold">

                {skill.title}

            </h2>

            <p className="text-gray-600 mt-2">

                {skill.description}

            </p>

            <div className="mt-4">

                <span className="bg-blue-100 px-3 py-1 rounded">

                    {skill.category_name}

                </span>

            </div>

            <div className="mt-3 text-sm text-gray-500">

                {skill.owner_name}

            </div>

            <div className="mt-2">

                {skill.experience_level}

            </div>

        </div>

    );

}

export default SkillCard;
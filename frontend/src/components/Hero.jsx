import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

            <div className="max-w-7xl mx-auto py-24 px-6">

                <h1 className="text-5xl font-bold">

                    Exchange Skills,
                    <br />
                    Learn Together

                </h1>

                <p className="mt-6 text-xl max-w-2xl">

                    Connect with talented people and trade your
                    knowledge instead of paying money.

                </p>

                <div className="mt-8 flex gap-4">

                    <Link

                        to="/skills"

                        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"

                    >

                        Browse Skills

                    </Link>

                    <Link

                        to="/register"

                        className="border border-white px-6 py-3 rounded-lg"

                    >

                        Join Community

                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Hero;
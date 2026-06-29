import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await login(formData);

            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            alert("Login Successful");

            navigate("/");

        } catch {

            alert("Invalid username or password");

        }
    }

    return (

        <div className="max-w-md mx-auto mt-20">

            <h1 className="text-3xl font-bold mb-6">

                Login

            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Username"
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            username:e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    className="w-full border p-3 rounded"
                    placeholder="Password"
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            password:e.target.value
                        })
                    }
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                >
                    Login
                </button>

            </form>

        </div>

    );
}

export default Login;
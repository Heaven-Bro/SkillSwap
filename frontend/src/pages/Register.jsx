import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/authApi";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    async function handleSubmit(e){

        e.preventDefault();

        await register(formData);

        alert("Registration Successful");

        navigate("/login");
    }

    return (

        <div className="max-w-md mx-auto mt-20">

            <h1 className="text-3xl font-bold mb-6">
                Register
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Username"
                    onChange={(e)=>setFormData({...formData,username:e.target.value})}
                />

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Email"
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                />

                <input
                    type="password"
                    className="w-full border p-3 rounded"
                    placeholder="Password"
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                />

                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Register
                </button>

            </form>

        </div>

    );
}

export default Register;
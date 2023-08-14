import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: " ", password: " " });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });
    }
    catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="bg-orange-700 h-screen flex items-center justify-center">
      <div className="bg-orange-700 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Sign Up</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="text-white block mb-2">Email</label>
            <input
              value={userFormData.email}
              onChange={handleChange}
              name="email"
              type="email"
              className="bg-orange-500 px-4 py-2 rounded w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2">Password</label>
            <input
              value={userFormData.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="bg-orange-500 px-4 py-2 rounded w-full"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

const SignUp = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-orange-500 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              className="bg-orange-200 px-4 py-2 rounded w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              className="bg-orange-200 px-4 py-2 rounded w-full"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-orange-700 text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

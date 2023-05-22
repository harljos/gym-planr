const Login = () => {
    return (
        <div className="bg-orange-700 h-screen flex items-center justify-center">
            <div className="bg-orange-700 rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-16 text-white">Login or Sign Up</h1>
                <div className="flex justify-between">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                    Login
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                    Sign Up
                </button>
                </div>
            </div>
        </div>
  );
}

export default Login;
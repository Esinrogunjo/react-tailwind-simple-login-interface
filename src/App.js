function App() {
  return (
    <div className="App">
      <div className="flex flex-wrap justify-center mt-20">
        <div className="w-full max-w-sm">
          <form className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

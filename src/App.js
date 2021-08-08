import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mx-10" >
      {/* https://serverless-stack.com/chapters/create-a-login-page.html */}
      {/* https://dev.to/diraskreact/create-simple-login-form-in-react-227b */}
      {/* https://tailwindcomponents.com/component/login-form */}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <label className="block font-bold text-md text-gray-700"  htmlFor="email">Email</label>
          <input className="border-2 rounded-md py-2 px-4" id="email" />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-md text-gray-700" htmlFor="password">Password</label>
          <input className="border-2 rounded-md py-2 px-4" id="password" />
        </div>
        <div className="">
          <button className="px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500  text-white" type="submit">Login</button>
        </div>
      </div>

    </div>
  );
}

export default App;

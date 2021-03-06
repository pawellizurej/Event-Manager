import { useRef, useState } from 'react';
import { useAuth } from '../customHooks/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      console.log(error);
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (err) {
      console.log(err);
      setError(`Failed to log in. ${err?.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-4 flex justify-center">
      <form onSubmit={handleSubmit}>
        <h2 className="flex justify-center text-xl">Log In</h2>
        <div className="flex flex-col p-6">
          {error && (
            <div className="bg-red-500 text-white text-center p-2 mb-4">
              {error}
            </div>
          )}
          <div className="group -mx-4 mb-4 p-1 border-b-2 hover:border-black focus-within:border-black">
            <svg
              className="w-5 inline-block mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
            </svg>
            <input
              className="border-l-2 px-2 focus:outline-none focus:ring-transparent focus:ring-2"
              type="email"
              name="e-mail"
              ref={emailRef}
              placeholder="E-Mail"
              required
            />
          </div>
          <div className="group -mx-4 mb-4 p-1 border-b-2 hover:border-black focus-within:border-black">
            <svg
              class="w-5 inline-block mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
            <input
              className="border-l-2 px-2 focus:outline-none focus:ring-transparent focus:ring-2"
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </div>
          <button className="submitButton" disabled={loading} type="submit">
            Login
          </button>
          <Link
            to="/forgotpassword"
            className="pt-4 self-center hover:border-b-2 hover:border-black">
            Forgot password?
          </Link>
          <p className="pt-6 text-sm">
            Need an account?{' '}
            <Link
              to="/signup"
              className="py-2 px-3 text-orange hover:border-b-2 bg-transparent hover:shadow-lg   hover:border-orange tracking-wider transform hover:scale-105 text-md">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

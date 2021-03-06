import { useRef, useState } from 'react';
import { useAuth } from '../customHooks/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { validEmail } from '../utils/Regex.js';

const UpdateEmail = () => {
  const emailRef = useRef();
  const { currentUser, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState(false);

  const validate = () => {
    setEmailError(!validEmail.test(emailRef.current.value));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/updateprofile');
      })
      .catch(() => {
        setError('Failed to update email');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="m-4 flex justify-center">
      <form onSubmit={handleSubmit}>
        <h2 className="flex justify-center text-xl">Update Email</h2>
        <div className="flex flex-col p-6">
          {error && (
            <div className="bg-red-500 text-white text-center p-2 mb-4">
              {error}
            </div>
          )}
          {emailError && (
            <div className="bg-red-500 text-white text-center p-2 mb-4">
              Please, enter valid email
            </div>
          )}
          <h3 className="text-lg mb-3">
            Current email: <strong>{currentUser.email}</strong>
          </h3>
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
          <div className="flex flex-row-reverse  items-center justify-evenly">
            <button className="submitButton" disabled={loading} type="submit">
              Update
            </button>
            <div>
              <Link className="createEventCancel" to="/updateprofile">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmail;

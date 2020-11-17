import React, { useState } from "react";
import Head from 'next/head';
import { Layout } from "../components/layout/layout";
import { useInput } from '../hooks/useInput';

export default function Login() {
  const [email, bindEmail, resetEmail] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const switchForm = event => {
    event.preventDefault();
    setForgotPassword(!forgotPassword);
  };

  const loginHandler = event => {
    event.preventDefault();
    alert(`Sup, ${email}`)
  };

  const forgotPasswordHandler = event => {
    event.preventDefault();
    alert(`Sup, Mr. I-forgot-my-password? ${email}`)
  };

  return (
    <Layout>
      <Head>
        <title>Login | VantageOne</title>
      </Head>
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full min-h-screen py-12">
          <div>
            <h2 className="mt-4 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Member Login
            </h2>
          </div>
          <form className="mt-8" onSubmit={!forgotPassword ? loginHandler : forgotPasswordHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Email address"
                  name="email"
                  type="email"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 ${!forgotPassword ? 'rounded-t-md' : 'rounded-md' } `}
                  placeholder="Email address"
                  {...bindEmail}
                />
              </div>
              {!forgotPassword && (
                <div className="-mt-px">
                  <input
                    aria-label="Password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Password"
                    {...bindPassword}
                  />
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                {!forgotPassword && (
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <label
                      for="remember_me"
                      className="ml-2 block text-sm leading-5 text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                )}
              </div>

              <div className="text-sm leading-5">
                <button
                  onClick={switchForm}
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  {!forgotPassword ? 'Forgot your password?' : 'Remember your password?'}
                </button>
              </div>
            </div>

            <div className="mt-6">
              {!forgotPassword && (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              )}
              {forgotPassword && (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Reset password
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

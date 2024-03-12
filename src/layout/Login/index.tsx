// Login.tsx

import React, { useState } from 'react';
import { API_URL } from '../../shared/env';

const Login: React.FC<{ onClose: () => void, handleShowRegister: () => void }> = ({ onClose, handleShowRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false)

    const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log('API_URL', API_URL)
        console.log('Logging in with username:', email, 'and password:', password);


        try {
            setIsLoadingLogin(true);

            const response = await fetch((API_URL).concat('api/auth/login'), {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Allow-Origin-Access-Control': '*',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log('response', response)
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setIsLoadingLogin(false);
            return data;
        } catch (error) {
            setIsLoadingLogin(false);
        }

    };

    return (
        <div className='w-screen h-screen absolute flex md:p-24 justify-center items-center bg-opacity-50 bg-gray-500 z-10'>
            <div className=" w-screen h-screen md:w-2/3 md:h-2/3 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg relative">
                <div className="max-w-md w-full space-y-8">
                    <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-indigo-500 hover:text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div onClick={handleShowRegister}>
                            <h4 className="mt-6 text-start text-base cursor-pointer font-bold text-indigo-500 hover:text-indigo-700">Henüz bir hesabınız yok mu? Kayıt olun.</h4>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoadingLogin}
                                className={"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm"
                                    + " font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    + " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + (isLoadingLogin ? "disabled bg-indigo-300 hover:bg-indigo-300" : "")}
                            >

                                {isLoadingLogin ? "Yükleniyor..." : "Log in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

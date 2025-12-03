// src/pages/VerifyEmail.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyStatus = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get('status');
    const message = searchParams.get('message');

    return (
        <div className="flex min-w-full h-screen justify-center items-center">
            <div className=" flex flex-col p-4 justify-center gap-3 ">
                {status === 'success' ? (
                    <div className="flex flex-col p-4 justify-center gap-3 shadow-md shadow-gray-400">
                        <h2 className='bold text-3xl'>✅ Email Verified Successfully!</h2>
                        <p>Your email has been verified. You can now log in to your account.</p>
                        <button onClick={() => window.location.href = '/'} className='px-3 py-2 bg-accent cursor-pointer hover:bg-blue-400 text-white'>
                            Go to Login
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col p-4 justify-center gap-3 shadow-md shadow-gray-400">
                        <h2 className='bold text-3xl'>❌ Email Verification Failed</h2>
                        <p>{message || 'Something went wrong during verification.'}</p>
                        <button onClick={() => window.location.href = '/'} className='px-3 py-2 bg-accent cursor-pointer hover:bg-blue-400 text-white'>
                            Back to Register
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyStatus;
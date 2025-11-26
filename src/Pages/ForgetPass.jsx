import React from 'react';

const ForgetPass = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-15">
                    <div className="card-body">
                        <form onSubmit={handleResetPassword}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Full Name" />
                                <label className="label">PhotoURL</label>
                                <input type="text" name='photo' className="input" placeholder="Enter Your PhotoURL" />
                                
                                <button className="btn btn-neutral mt-4">Reset Password</button>
                            </fieldset>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default ForgetPass;
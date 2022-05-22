import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const {resister, handleSubmit, formState: {errors}} = useForm();
    const handleSignUp = (data) =>{
        console.log(data)
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(handleSignUp)} action="">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input {...resister("name", {required: true})} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">email</span>
                        </label>
                        <input {...resister("email", {required: true})} type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input {...resister("password", {required: true})} type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <input className='btn btn-secondary' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account please <Link to={'/login'}>login</Link></p>
                <div className='divider'>OR</div>
                <div>
                    <button>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
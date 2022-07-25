import React from 'react'
import { useForm } from 'react-hook-form';
import hero from "../../image/home/hero.jpg"
import {FcGoogle} from "react-icons/fc"
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom'
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    console.log(data);
  }
  return (
    <div class=" w-full h-full bg-no-repeat bg-cover lg:p-20 p-12 "style={{backgroundImage:`url(${hero})`}}>
       <div class="mx-auto shadow-2xl w-80 h-auto rounded-xl bg-black pl-10 pr-10 pb-10">
            <h1 class="text-white font-bold text-center text-2xl pt-7 pb-7">Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
           <div class="form-control w-full max-w-xs">
         <input 
             {...register("email",{
                required:{
                   value:true,
                   message:"Email is required"
                  },
                pattern:{
                   value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                   message:"Provide a Valid email"
                 }
              })}     
              type="email" 
              placeholder="Enter Your Email" 
              class="input input-bordered w-full max-w-xs mt-0 rounded-lg " />
            <label class="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            </label>
        </div>
        <div className="form-control w-full max-w-xs mt-0">
          <input
          type="password"
          placeholder="Enter Your Password"
        className="input input-bordered w-full max-w-xs rounded-lg"
      {...register("password", {
        required: {
          value: true,
          message: 'Password is Required'
          },
           minLength: {
                value: 6,
                message: 'Must be 6 characters or longer'
         }
      })}
    />
    <label className="label">
    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
    </label>
    <h1 class="text-cyan-500 text-sm mb-3"><a href="">Forget Password?</a></h1>
    <h1 class="btn btn-outline w-full max-w-xs text-white" type="submit">Login </h1>
    <h1 class="text-center text-white mt-2">or log using</h1>
    <div class="flex mt-3 mx-auto">
    <h1 class="btn btn-outline w-50 max-w-xs text-white text-3xl" type="submit"><BsGithub></BsGithub></h1>
    <h1 class="btn btn-outline w-50 max-w-xs  ml-4 text-4xl text-white " type="submit"><FcGoogle></FcGoogle></h1>
    </div>
    <h1 class="text-lg text-white mt-3">Create New Account<Link class="text-blue-700 pl-2" to ="/register">Sign Up</Link></h1>
    </div>
  </form>
       </div>
    </div>
  )
}

export default Login
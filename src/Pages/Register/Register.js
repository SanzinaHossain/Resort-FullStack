import React from 'react'
import { useForm } from 'react-hook-form';
import hero1 from "../../image/home/hero1.webp"
import { Link } from 'react-router-dom'
const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    console.log(data);
  }
  return (
    <div class=" w-full h-full bg-no-repeat bg-cover lg:p-20 p-12 "style={{backgroundImage:`url(${hero1})`}}>
       <div class="mx-auto shadow-2xl lg:w-96 w-80 h-auto rounded-xl bg-black pl-10 pr-10 pb-10">
            <h1 class="text-white font-bold text-center text-2xl pt-7 pb-7">Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
         <input 
             {...register("name",{
                required:{
                   value:true,
                   message:"Name is required"
                  }
               
              })}     
              type="text" 
              placeholder="Your Name" 
              class="input input-bordered w-full max-w-xs mt-0 rounded-lg " />
            <label class="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            </label>
        </div>
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
              placeholder="Your Email" 
              class="input input-bordered w-full max-w-xs mt-0 rounded-lg " />
            <label class="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            </label>
        </div>
        <div className="form-control w-full max-w-xs mt-0">
          <input
          type="password"
          placeholder="Your Password"
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
    <h1 class="btn btn-outline w-full max-w-xs text-white" type="submit">Register </h1>
    <h1 class="lg:text-lg text-sm text-white mt-3">Already have an account?<Link class="text-blue-700 pl-2" to ="/login">Login</Link></h1>
    </div>
  </form>
       </div>
    </div>
  )
}

export default Register
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios'; // Import axios
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => { // Make the function async
    const userInfo = {
      email: data.email,
      password: data.password,
    }; // Remove fullname field

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo); // Change the endpoint to login
      console.log(res.data);
      if (res.data) {
        toast.success('Login Successfull!');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload()
          localStorage.setItem("Users", JSON.stringify(res.data.user));

        },1000);
      
      
    }
   
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("" + err.response.data.message);
        setTimeout(() => {},2000);
        window.location.reload()
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method='dialog'> 
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
             onClick={() => document.getElementById("my_modal_3").close()}
            
            >✕
            </Link>
            <h3 className="font-bold text-lg">LOGIN</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" // Change type to password
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-around mt-5'>
              <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>Login</button>
              <p>Not Registered?<Link to="signup" className='underline text-red-500 cursor-pointer '>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login;
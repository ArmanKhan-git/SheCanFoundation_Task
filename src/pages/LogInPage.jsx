import  { useState } from 'react'
import {MessageSquare,User,Mail ,Lock, EyeOff,Eye, Loader2} from "lucide-react"
import { Link } from 'react-router-dom'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';




const LogInPage=()=> {

  const [showPassword,setshowPassword]=useState(false)

  const [formData,setFormData]=useState({
    fullName:"",
    email:"",
    password:""
  })

  const validateForm=()=>{
    // if(!formData.fullName.trim()) return toast.error("Full Name is requuired")
    if(!formData.email.trim())return toast.error("email is requuired")  
      // if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return toast.error("Invalid email format")
            if(!formData.password)return toast.error("password is requuired") 
              if(formData.password.length<6) return toast.error("Password must be atleast 6 characters") 

                return true

  }

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const success = validateForm();
  if (!success) return;

  try {
    const res = await fetch("/userData.json");
    const user = await res.json();

    if (
      formData.email === user.email &&
      formData.password === "1234567" 
    ) {
      toast.success("Login successful");
      navigate("/dashboard", { state: user });
    } else {
      toast.error("Invalid credentials");
    }
  } catch (err) {
    toast.error("Failed to fetch user data");
    console.error(err);
  }
};

  
  return (
    <div className='min-h-screen mt-15'>
        <div className=" flex flex-col justify-center items-center p-6 sm:p-12  ">
          <div className="w-full max-w-md space-y-8">
            {/* logo */}
            <div className="text-center mb-8 ">
              <div className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
                group:gover:bg-primary/20 transition-colors">
                </div>
                <h1 className='text-2xl font-bold mt-2'>Login Account</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className="form-control">
                  <label  className="label">
                    <span className='label-text font-medium'>Full Name</span>
                  </label>
                  <div className="relative">
                    <div className="absolute insety-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                      <User className="z-10 mt-2  size-6 text-base-content/40" />
                    </div>
                    <input
                     type="text" 
                     className={`input size-9 border border-black rounded-2xl input-bordered w-full pl-10`}
                     placeholder='User123'
                     value={formData.fullName}
                     onChange={(e)=>setFormData({...formData,fullName:e.target.value})}
                     />
                  </div>
                </div>

                {/* email */}
                 <div className="form-control">
                  <label  className="label">
                    <span className='label-text font-medium'>Email</span>
                  </label>
                  <div className="relative">
                    <div className="absolute insety-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="z-10 mt-3 size-5 text-base-content/40" />
                    </div>
                    <input
                     type="email" 
                     className={`input size-9 border border-black rounded-2xl input-bordered w-full pl-10`}
                     placeholder='abc@gmail.com'
                     value={formData.email}
                     onChange={(e)=>setFormData({...formData,email:e.target.value})}
                     />
                  </div>
                </div>
               <div className="form-control">
                  <label  className="label">
                    <span className='label-text font-medium'>Password</span>
                  </label>
                  <div className="relative">
                    <div className="absolute insety-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="z-10 mt-2 size-5 text-base-content/40" />
                    </div>
                    <input
                     type={showPassword?"text":"password"} 
                     className={`input size-9 border border-black rounded-2xl input-bordered w-full pl-10`}
                     placeholder='1234567'
                     value={formData.password}
                     onChange={(e)=>setFormData({...formData,password:e.target.value})}
                     />
                     <button
                     type="button"
                     className='absolute inset-y-0 right-0 pr-3 flex items-center'
                     onClick={()=>setshowPassword(!showPassword)}
                     >
                      {showPassword ? (
                        <EyeOff className='z-10 size-5 text-base-content/40 '/>
                      ):(
                        <Eye className="z-10 size-5 text-base-content/40"/>
                      )}
                     </button>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary w-full border border-black rounded-2xl' >
                 {(
                    "Log In"
                  )
                }
                </button>
            </form>
            <div className="text-center">
              <p className='text-base-content/60'>
              Dont have an account?{""}
              <Link to="/signup" className="link link-primary">
                Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LogInPage

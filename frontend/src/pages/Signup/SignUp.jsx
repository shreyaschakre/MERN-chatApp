import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../Hooks/useSignup";

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
          <span className="text-blue-500"> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit} >
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="fullname..." className="w-full input input-bordered h-10"
            value={inputs.fullname}
            onChange={(e) => setInputs({...inputs,fullname: e.target.value})} // taking input from the front end
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="username..." className="w-full input input-bordered h-10"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs,username: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password: e.target.value})} 
            />
            
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="confirm password" className="w-full input input-bordered h-10" 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <div className="divider divider-neutral mt-1 mb-1"></div>
          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-900 mt-0 inline-block">
          Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "sign up"} 
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

//STARTER CODE FOR SIGNUP COMPONENT

// import GenderCheckbox from "./GenderCheckbox"

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
//           <span className="text-blue-500"> Chat App</span>
//         </h1>
//         <form >

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="Shreyas Chakre" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="shreyas_chakre" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter pasword" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="confirm password" className="w-full input input-bordered h-10" />
//           </div>

//           <GenderCheckbox />
//           <div className="divider divider-neutral mt-1 mb-1"></div>

//           <a href="#" className="text-sm hover:underline hover:text-blue-900 mt-0 inline-block">
//           Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp
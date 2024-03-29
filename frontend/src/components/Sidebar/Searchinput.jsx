import { HiOutlineSearch } from "react-icons/hi";

const Searchinput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <HiOutlineSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default Searchinput

// STARTER CODE FOR <SEARCHINPUT>

// import { HiOutlineSearch } from "react-icons/hi";

// const Searchinput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//             <HiOutlineSearch className="w-6 h-6 outline-none"/>
//         </button>
//     </form>
//   )
// }

// export default Searchinput
// </SEARCHINPUT>

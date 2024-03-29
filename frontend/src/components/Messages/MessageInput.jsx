import { IoSendOutline } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text"
             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
             placeholder="message..."
             />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"> <IoSendOutline /> </button>
        </div>
    </form>
  )
}

export default MessageInput


// STARTER CODE SNIPPET

// import { IoSendOutline } from "react-icons/io5";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//         <div className="w-full relative">
//             <input type="text"
//              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
//              placeholder="message..."
//              />
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"> <IoSendOutline /> </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput

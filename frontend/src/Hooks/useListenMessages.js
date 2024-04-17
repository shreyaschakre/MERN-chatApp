import { useEffect } from 'react'
import {useSocketContext} from '../Context/SocketContext'
import useConversation from '../zustand/useConversation'
import Notification from '../sounds/Notification.mp3'

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useConversation()

  useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
      const sound = new Audio(Notification)
      sound.play()
      setMessages([...messages,newMessage])
    })
    
    return () => socket?.off("newMessage") 
  },[socket,setMessages,messages])
}

export default useListenMessages

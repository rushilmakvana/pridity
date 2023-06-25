import React , {useEffect, useState} from 'react'
// import ScrollToBottom from 'react-scroll-to-bottom'
const Chat = ({socket , userName, roomId}) => {

    const [message , setMessage] = useState('');
    const [messageList , setMessageList] = useState([])

    const sendMsg = async()=>{
        if(message !== ""){
            const messageData={
                roomId : roomId ,
                author : userName,
                message : message,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            await socket.emit("send_msg" , messageData);
            setMessageList((List)=>[...List,messageData]);
            // console.log(messageList)
            setMessage("")
        }
    }

    useEffect(()=>{
      socket.on("receive_msg" , (data)=>{
    //   console.log(data)
    setMessageList((List)=>[...List,data])
      })
    } , [socket])

    return(
        <>
    <div className='main'>
      <div className='chat-header'>
        <h2>Chat Room</h2>
      </div>

      <div className='chat-body'  >
        {/* <ScrollToBottom className='message-container'> */}
        {
            messageList.map((messageContent)=>{
                return <div className='message' id={userName===messageContent.author ? 'you':'other'}>
                    
                        <div className='message-content'><p>{messageContent.message}</p></div>

                        <div className='extra' > 
                        
                        <p>{messageContent.author}  {messageContent.time} </p>
                       
                        </div>       
                </div>
                
            })
        }
      {/* </ScrollToBottom> */}
      </div>

      <div className='chat-footer'>
      <input className='input' type="text" value={message}  placeholder="type message..." onChange={(e)=>{
         setMessage(e.target.value)
     }}
     onKeyPress={(event)=>{event.key === 'Enter'&& sendMsg()}}
     />
     <button className='send' onClick={sendMsg}>&#9658;</button>
      </div>
    </div>
    </>
  )
}

export default Chat;

import React, { useEffect, useRef } from 'react'
import "./chatPage.css";
import NewPrompt from '../../components/newPrompt/NewPrompt';
const ChatPage =()=>  {
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"})
  },[])
    return (
      <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
        <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, sit ipsum fuga quas illo cupiditate placeat doloremque qui dolorem sapiente eius magni corporis repellat officia, nesciunt optio provident eveniet!</div>
        <div className="message">message form ai</div>
        <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, sit ipsum fuga quas illo cupiditate placeat doloremque qui dolorem sapiente eius magni corporis repellat officia, nesciunt optio provident eveniet!</div>
        <div className="message">message form ai</div>
        <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, sit ipsum fuga quas illo cupiditate placeat doloremque qui dolorem sapiente eius magni corporis repellat officia, nesciunt optio provident eveniet!</div>
        <div className="message">message form ai</div>
        <div className="message">message form ai</div>
        <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, sit ipsum fuga quas illo cupiditate placeat doloremque qui dolorem sapiente eius magni corporis repellat officia, nesciunt optio provident eveniet!</div>
        <div className="message">message form ai</div>
        <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, sit ipsum fuga quas illo cupiditate placeat doloremque qui dolorem sapiente eius magni corporis repellat officia, nesciunt optio provident eveniet!</div>
        <NewPrompt/>
        <div ref={endRef}></div>
      </div>
        {/* <div className="chat">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, i) => (
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    className={
                      message.role === "user" ? "message user" : "message"
                    }
                    key={i}
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          {data && <NewPrompt data={data}/>}
        </div> */}
      </div>
    </div>
    )
  
}

export default ChatPage;

import React,{useState} from 'react'
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

 const App = () => {
  const[textToCopy, setTextToCopy]=useState();
  const[isCopied, setCopied]=useClipboard(textToCopy);

   const startListening=()=>SpeechRecognition.startListening({ continuous: true,language:'en-IN' })
   const stopListening=()=>SpeechRecognition.stopListening()
   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>your browser not support</span>
  }

  return (
    <>
      <div className='container'>
        <h2>Speech to Text Convertor</h2>
       
        <p>the react hook that convert the speech to textss</p>
        <div className='main-content' onClick={()=>setTextToCopy(transcript)}>
          {transcript}
        </div>
        <div className='btn-style'>
           <button onClick={setCopied}>{isCopied?"copied":"Copy to clipboard"}</button>
           <button onClick={startListening}>Listining</button>
           <button onClick={stopListening}>Stop Listining</button>
        </div>
      </div>
    </>
  )
}

export default App;

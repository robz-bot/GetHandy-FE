import React, { useState } from 'react';
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
function TextToSpeech() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleDownload = () => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language if needed
    const synthesis = window.speechSynthesis;
    
    // Create a new speech synthesis and handle audio generation
    synthesis.cancel(); // Clear any existing utterances
    synthesis.speak(utterance); // Speak the provided text

    // When the synthesis finishes, generate MP3 and initiate download
    utterance.onend = () => {
      const audioBlob = new Blob([new Audio(utterance)], { type: 'audio/mpeg' }); // Changed type to 'audio/mpeg'
      const audioUrl = URL.createObjectURL(audioBlob);
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = 'speech.mp3';
      link.click();
      URL.revokeObjectURL(audioUrl); // Cleanup
    };
  };

  const handleSpeak = () => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language if needed
    const synthesis = window.speechSynthesis;
    
    synthesis.cancel(); // Clear any existing utterances
    synthesis.speak(utterance); // Speak the provided text
  };

  return (
    <> 
    <Breadcrums />
      <div className='container'>
        <h4 className='text-center'>Text to Speech</h4>
        <textarea
          className='form-control form-control-sm'
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={4}
          cols={50}
        />
        <div className='my-3 d-flex justify-content-center align-items-center'>
          <button className='mx-2 btn btn-sm btn-primary' onClick={handleSpeak} disabled={!text}>
            Speak
          </button>
          {/* <button className='mx-2 btn btn-sm btn-success' onClick={handleDownload} disabled={!text}>
            Download Speech as MP3
          </button> */}
        </div>
      </div>
    </>
  );
}

export default TextToSpeech;

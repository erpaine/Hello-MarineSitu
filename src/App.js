// Import necessary dependencies
import React, { useEffect, useState } from 'react'



// Create App component
function App() {
  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Prepare state hook for image url
  const [imageUrl, setImageUrl] = useState('')

  // Create async function for fetching welcome message
  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/api')
      .then(res => res.text()) // process incoming data

    // Update welcomeMessage state
    setWelcomeMessage(message)
  }

  // Use useEffect to call fetchMessage() on initial render
  useEffect(() => {
    fetchMessage()
  }, [])

  // Create async function for fetching users list
  const fetchUsers = async () => {
    const users = await fetch('/users/all')
      .then(res => res.text()) // Process the incoming data

    // Update usersList state
    setImageUrl(users)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
      <img src={imageUrl} alt="logo"/> 
        {/* Display welcome message */}
        <p>{welcomeMessage}</p>
        
        <a
          className="App-link"
          href="http://www.marinesitu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us for Marine Monitoring needs.
        </a>

        
      </header>
    </div>
  )
}

export default App

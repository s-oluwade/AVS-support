import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';

interface Conversation {
  role: string;
  name: string;
  email: string;
  phone: string;
  inquiry: string;
  title: string;
  message: string;
}

function App() {
  const [conversations, setConversations] = React.useState<Conversation[]>([]);

  useEffect(() => {
    // use axios to fetch data from localhost:3000/conversations and update state variables
    axios
      .get<Conversation[]>('http://localhost:3000/conversations')
      .then((response) => {
        setConversations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Support | <span className='App-link'>AVS Support Center</span>
        </p>
      </header>
      <section style={{marginLeft: '70px', marginRight: '70px', marginTop: '70px'}}>
        <p>
          Welcome to the Amazon Virtual Support (AVS). This system is designed to help you quickly and easily report
          issues with your services.
        </p>
        <div>
          {conversations.map((conversation, index) => {
            return (
              <div key={index} style={{border: '1px solid black', padding: '10px', marginTop: '10px'}}>
                <p>
                  <strong>Role:</strong> {conversation.role}
                </p>
                <p>
                  <strong>Name:</strong> {conversation.name}
                </p>
                <p>
                  <strong>Email:</strong> {conversation.email}
                </p>
                <p>
                  <strong>Phone:</strong> {conversation.phone}
                </p>
                <p>
                  <strong>Inquiry:</strong> {conversation.inquiry}
                </p>
                <p>
                  <strong>Title:</strong> {conversation.title}
                </p>
                <p>
                  <strong>Message:</strong> {conversation.message}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;

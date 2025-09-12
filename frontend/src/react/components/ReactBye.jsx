import React from 'react';
export default function ReactBye({ farewell, name, reminder }) {
  return <div style={{ border: '2px solid green', padding: 10 }}>
        <h1>{farewell} {name} from React!</h1>
        <p>{reminder}</p>
    </div>
}
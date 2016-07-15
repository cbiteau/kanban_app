import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'DO Laundry'
  }
]

export default() => (
  <div>
    <button onClick={() => console.log('add note')}>+</button>
    <Notes notes={notes}/>
  </div>
);

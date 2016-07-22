import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
  render() {
    const {notes} = this.props;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onDelete={this.deleteNote}
          onEdit={this.editNote}
          />
      </div>
    )
  }
  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New Task'
    });
  }
  activateNoteEdit = (id) => {
    this.props.NoteActions.update({
      id,
      editing: true
    });
  }
  editNote = (id, task) => {
    this.props.NoteActions.update({
      id,
      task,
      editing: false
    });
  }
  deleteNote = (id, e) => {
    e.stopPropagation();

    this.props.NoteActions.delete(id);
  }
}

export default connect(
  ({notes}) => ({
    notes: notes
  }),
  {
    NoteActions
  }
)(App)

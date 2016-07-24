import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New Lane'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(({lanes}) => ({
    lanes
  }), {
    LaneActions
  })
)(App)

// class App extends React.Component {
//   render() {
//     const {notes} = this.props;
//
//     return (
//       <div>
//         <button className="add-note" onClick={this.addNote}>+</button>
//         <Notes
//           notes={notes}
//           onNoteClick={this.activateNoteEdit}
//           onDelete={this.deleteNote}
//           onEdit={this.editNote}
//           />
//       </div>
//     )
//   }
//   addNote = () => {
//     this.props.NoteActions.create({
//       id: uuid.v4(),
//       task: 'New Task'
//     });
//   }
//   activateNoteEdit = (id) => {
//     this.props.NoteActions.update({
//       id,
//       editing: true
//     });
//   }
//   editNote = (id, task) => {
//     this.props.NoteActions.update({
//       id,
//       task,
//       editing: false
//     });
//   }
//   deleteNote = (id, e) => {
//     e.stopPropagation();
//
//     this.props.NoteActions.delete(id);
//   }
// }
//
// export default connect(
//   ({notes}) => ({
//     notes: notes
//   }),
//   {
//     NoteActions
//   }
// )(App)

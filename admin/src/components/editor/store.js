import { createStore } from 'redux'

var initialState = {
    editor: null,
    page: {
        sections: [{
            name: 'fwewe'
        }]
    }
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'section.delete':
        state.editor.deleteSection(action.index);

        return state;
    case 'section.create':
        state.editor.addSection({
            "name": "section 1",
            ...action.section
        });

        return state; 
    case 'editor':
        state.editor = action.editor;

        return state;
    default:
      return state
  }
}

export default createStore(counterReducer);

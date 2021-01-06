import React from 'react';
import store from './store';

export default class PageSectionList extends React.Component {

    constructor(props) {
        super(props);

        store.subscribe(() => { this.setState({ reload: false }) });
    }

    render() {
        var sections = [];
        if (store.getState().editor) {
            for (const [index, entry] of store.getState().editor.sections.entries()) {
                sections.push(<div key={index}>{entry.config.name} <span onClick={() => store.dispatch({type: 'section.delete', index: index})}>x</span></div>)
            }
        }

        return (
           <div>{sections}</div>
        );
    }
}
import React from 'react';

import store from './store';

export default class ThemeSectionList extends React.Component {

    constructor(props) {
        super(props);

        fetch('http://localhost:1337/pages')
            .then(response => response.json())
            .then(sections => {
                this.setState({sections: sections});
            });
    }

    render() {
        var sections = [];
        if (this.state && this.state.sections) {
            for (const [index, section] of this.state.sections.entries()) {
                const thumbnail = 'http://localhost:1337/site/public/thumbnails/' + section.template + '.png';

                sections.push(
                    <div onClick={() => store.dispatch({ type: 'section.create', section: section})} key={index}>
                        <img src={thumbnail} width="400px"></img>
                        {section.template}
                    </div>
                )
            }
        }


        return (
           <div>{sections}</div>
        );
    }
}
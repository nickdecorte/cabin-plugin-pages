import React from 'react';

import store from './store';
import PageSectionList from './page-section-list';
import ThemeSectionList from './theme-section-list';

class Editor extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://localhost:1337/index.html')
            .then(response => response.text())
            .then(template => {
                const doc = document.getElementById('editor').contentWindow.document;
            
                doc.open();
                doc.write(template);
                doc.close();
            });
    }

    onSavePage = () => {
        console.log(store.getState().editor.sections);
    }

    onIframeLoaded = (event) => {
        const editor = event.target.contentWindow.Editor.init({
            config: {
                theme: 'eleventyone',
                onEditSection: (section) => {
                    this.selectedSection = section;
                }
            }
        });

        store.dispatch({ type: 'editor', editor: editor });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <button onClick={this.onSavePage}>save</button>
                        <PageSectionList></PageSectionList>
                        <ThemeSectionList></ThemeSectionList>
                    </div>
                    <div class="col-md-9">
                        <iframe id="editor" src="#" width="100%" height="2000px" onLoad={this.onIframeLoaded}></iframe>
                    </div>
                </div>
            </div>
        );
    }

}

export default Editor;
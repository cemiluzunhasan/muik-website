import 'braft-editor/dist/index.css';
import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import { Button } from 'antd';
import firebase from 'firebase';

class Blog extends Component {
  
  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'),
    outputHTML: '<p></p>',
    windowDefined: false
  }

  componentDidMount () {
    this.isLivinig = true
    if (process.browser) {
      this.setState({
        windowDefined: true
      })
    }
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState(this.state.editorState)
    })
  }

  handleSubmit = () => {
    firebase.database().ref('articles/').push(this.state.outputHTML);
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div className="Blog page">
        <div className="editor-wrapper">
          {this.state.windowDefined && 
            <BraftEditor
              value={editorState}
              onChange={this.handleChange}
            />
          }
        </div>
        <Button
          type="primary"
          onClick={() => this.handleSubmit()}
        >
          Save me
        </Button>
          
      </div>
    )

  }
};

export default Blog;

import React from 'react';
import AceEditor from 'react-ace';
export default function(props) {
      return (
      <div>
        <AceEditor
  placeholder="Placeholder Text"
  mode="java"
  theme="solarized_dark"
  name="blah2"
  
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`public class Main {
    public static void main(String[] args) {

    }
}
`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
      </div>
    );
  }

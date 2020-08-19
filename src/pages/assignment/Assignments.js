import React, { useState, useRef, useCallback , useEffect} from 'react';
import {  useHistory } from 'react-router-dom';
import './assignment.scss';
 
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import { Form ,Item,ButtonItem,ButtonOptions} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
const dateBoxOptions = { width: '100%' };

export default () => {
  
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});
  const [, setUser] = useState(); 
  
  const createassignment  = useCallback(async(e)=>{
    e.preventDefault();
  const { assignmentTitle, assignmentQuestion, activation, expiration } = formData.current;
  setLoading(true);
    
    const resp = await fetch('http://localhost:8080/api/createAssignment', {
      method: 'POST',
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
      },
      body: new URLSearchParams({  
        assignmentTitle: assignmentTitle,
        assignmentQuestion: assignmentQuestion,
        activation: activation,
        expiration: expiration  
      }) 
    });
    const newResp = await resp.json() 
    console.log('newResp', newResp)
    // console.log(email, password);
  
    setUser({
      // email,
      // avatarUrl: defaultUser.avatarUrl
    });
  
  history.push('/viewAssignments');
  
  },'/viewAssignments')
  
  useEffect(() => {
    // Retrieve and save user data on initial load

    
    setLoading(false);
  }, []);

  
  // const assignments = {
  //   assignmentTitle:assignmentTitle,
  //   assignmentQuestion:assignmentQuestion,
  //   activation:activation,
  //   expiration:expiration
  // };

  return(
    <React.Fragment>
    <h2 className={'content-block'}>Create Assignments</h2>
    <div  className={'content-block'}>
              <form className={'login-form'} onSubmit={createassignment}>
                <Form formData={formData.current} >
                    <Item dataField="assignmentTitle"
                      editorType={'dxTextBox'}
                    editorOptions={AssignmentTitleOptions}  />
                      <Item dataField="assignmentQuestion"
                      editorType={'dxTextBox'}
                    editorOptions={AssignmentQuestionOptions}  />
                   
                    <Item dataField="activation" 
                    editorType="dxDateBox"
                    editorOptions={dateBoxOptions}/>
                    <Item dataField="expiration"
                     editorType="dxDateBox"
                     editorOptions={dateBoxOptions} />
                     <ButtonItem>
                     <ButtonOptions
                      width={'100%'}
                      type={'default'}
                      useSubmitBehavior={true}
                     >
                    <span className="dx-button-text">
                    {
                      loading
                      ? <LoadIndicator width={'24px'} height={'24px'} visible={true} />
                      : 'create Assignment'
                    }
                    </span>
                      </ButtonOptions>
                      </ButtonItem>
              </Form> 
              </form> 
              </div>
    
    
  </React.Fragment>
  )
  
};


const AssignmentTitleOptions = { stylingMode: 'filled', placeholder: 'Assignment Title', mode: 'assignmentTitle' };
const AssignmentQuestionOptions = { stylingMode: 'filled', placeholder: 'Assignment Question', mode: 'assignmentQuestion' }
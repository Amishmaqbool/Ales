import React from 'react';
import './assignment.scss';
 
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import { Form ,Item } from 'devextreme-react/form';


const employee = {
  firstName: 'John',
  lastName: 'Heart',
  phone: '+1(213) 555-9392',
  email: 'jheart@dx-email.com'};
  const dateBoxOptions = { width: '100%' };
export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Create Assignments</h2>
    <div  className={'content-block'}>
                <Form formData={employee}>
                    <Item dataField="Asignment Title"
                    editorType={'dxTextBox'}
                    editorOptions={AssignmentTitleOptions}  />
                    <Item dataField="Assignment Quetion" 
                    editorType={'dxTextArea'}
                    editorOptions={AssignmentTitleOptions}/>
                    <Item dataField="Activation date" 
                    editorType="dxDateBox"
                    editorOptions={dateBoxOptions}/>
                    <Item dataField="Expiry Date"
                     editorType="dxDateBox"
                     editorOptions={dateBoxOptions} />
                </Form>
               
            </div>
    
    
  </React.Fragment>
);


const AssignmentTitleOptions = { stylingMode: 'filled', placeholder: 'Assignment Title', mode: 'assignmentTitle' };
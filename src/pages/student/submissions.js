import React, { useState, useRef, useCallback, useEffect } from "react";
import {useHistory, Link } from "react-router-dom";
import "devextreme/data/odata/store";
import DataGrid, {
  Column,
  Button
} from "devextreme-react/data-grid";
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import List  from 'devextreme-react/list';



export default () => {

   
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});
  const [user, setUser] = useState();
  const [data, setData] = useState('');
  
    // e.preventDefault();
    // setLoading(true);

    function handleErrors(response) {
      if (!response.ok)
          throw Error(response.statusText);
      return response;
  }
    
  const customDataSource = new CustomStore({
    key: 'assignmentId',
    loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
    load: () => {
        return fetch('http://localhost:8080/api/viewAssignments')
            .then(handleErrors)
            .then(response => response.json())
            .catch(() => { throw 'Network error' });
    }
});

function renderfunction (){
  return <a href ="http://localhost:3000/editor">click</a>
}


  return (
    <DataGrid
      dataSource={customDataSource}
      showBorders={true}
    >
      <Column dataField="assignmentTitle" />
      
      
        
      <Column
        dataField="activationDate"
        caption="Start Date"
        dataType="number"
        format="currency"
      />
      <Column
        dataField="expirationDate"
        caption="End Date"
        dataType="number"
        format="currency"
      />
      <Column
        dataField="createdAt"
        caption="Create Date"
      />
    </DataGrid>
  );
};

const priorities = [
  { name: "High", value: 4 },
  { name: "Urgent", value: 3 },
  { name: "Normal", value: 2 },
  { name: "Low", value: 1 },
];

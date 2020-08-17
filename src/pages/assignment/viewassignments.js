import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>View Assignments</h2>
    <div className={'content-block'}>
    <DataGrid
      className={'dx-card wide-card'}
    //   dataSource={dataSource}
      showBorders={false}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnAutoWidth={true}
      columnHidingEnabled={true}
    >
      <Paging defaultPageSize={10} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />

      <Column dataField={'ID'} width={90} hidingPriority={2} />
      <Column
        dataField={'Task_Subject'}
        width={190}
        caption={'Assignment Name'}
        hidingPriority={8}
      />
      <Column
        dataField={'Task_Status'}
        caption={'Status'}
        hidingPriority={6}
      />
    
      <Column
        dataField={'Task_Start_Date'}
        caption={'Start Date'}
        dataType={'date'}
        hidingPriority={3}
      />
      <Column
        dataField={'Task_Due_Date'}
        caption={'Due Date'}
        dataType={'date'}
        hidingPriority={4}
      />
       <Column
        dataField={'Task_Due_Date'}
        caption={'Create date'}
        dataType={'date'}
        hidingPriority={4}
      />
      
    </DataGrid>
    </div>
  </React.Fragment>
);

// const dataSource = {
//   store: {
//     type: 'odata',
//     key: 'Task_ID',
//     url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
//   },
//   expand: 'ResponsibleEmployee',
//   select: [
//     'Task_ID',
//     'Task_Subject',
//     'Task_Start_Date',
//     'Task_Due_Date',
//     'Task_Status',
//     'Task_Priority',
//     'Task_Completion',
//     'ResponsibleEmployee/Employee_Full_Name'
//   ]
// };

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];

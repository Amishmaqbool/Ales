export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Assignment',
    icon: 'home',
    items:[
      {
        text: 'Create Assignment',
        path: '/Assignments'
      
      },
      {
        text: 'View Assignments',
        path: '/viewAssignments'
      
      },
      {
        text: 'Student Submissions',
        path: '/viewSubmissions'
      
      }
    ]
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Display Data',
        path: '/display-data'
      }
    ]
  }
  ];

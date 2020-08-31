import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, DisplayDataPage, ProfilePage, Assignments,ViewAssignments,StudentSubmissions} from './pages';
import { Editor } from './pages/editor';

const routes = [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/assignments',
    component: Assignments
  },
  {
    path: '/viewassignments',
    component: ViewAssignments
  },
  {
    path: '/viewSubmissions',
    component: StudentSubmissions
  }  
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});

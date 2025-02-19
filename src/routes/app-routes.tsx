import { HomePage, TasksPage, ProfilePage, ViewNamePage } from "../pages";
import { withNavigationWatcher } from "../contexts/navigation";

const routes = [
  {
    path: "/tasks",
    element: TasksPage,
  },
  {
    path: "/profile",
    element: ProfilePage,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/chat",
    element: HomePage,
  },
  {
    path: "/view-name",
    element: ViewNamePage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});

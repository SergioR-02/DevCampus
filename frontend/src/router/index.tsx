import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CourseCatalog from '../pages/CourseCatalogPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import ErrorMessage from '../shared/components/ErrorMessage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CourseCatalog />,
    errorElement: <ErrorMessage message="Página no encontrada" />,
  },
  {
    path: '/courses/:slug',
    element: <CourseDetailPage />,
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;

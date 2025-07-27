import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CourseCatalog from '../pages/CourseCatalog';
import ErrorMessage from '../shared/components/ErrorMessage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CourseCatalog />,
    errorElement: <ErrorMessage message="Página no encontrada" />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;

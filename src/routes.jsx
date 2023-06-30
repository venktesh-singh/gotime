import userRoutes from 'src/views/users/UserRoutes';

const routes = [
    {
      element: (  
        <AuthGuard>
          <MatxLayout />
        </AuthGuard>
      ),
  
      children: [
        ...userRoutes,
        ],
    },
    ...sessionRoutes,
    { path: '/', element: <Navigate to="dashboard/default" /> },
    { path: '*', element: <NotFound /> },
  ];
  
  export default routes;
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";
  import MainLayout from "./layouts/MainLayout";
  import HomePage from "./pages/HomePage";
  import MoviesPage from "./pages/MoviesPage";
  import MoviePage from "./pages/MoviePage";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Route>
    )
  );
  
  const App = () => {
    return <RouterProvider router={router} />;
  };
  
  export default App;
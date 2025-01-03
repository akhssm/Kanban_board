import{Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from"./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Users from "./Pages/Users";
import Trash from "./Pages/Trash";
import TaskDetails from "./Pages/TaskDetails";
import Toaster from "sonner";

function Layout() {
  const user = "";

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        {/* {<sidebar /> */}
      </div>


    </div>
  ) : (
    <Navigate to ='/log-in' state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6] '>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to='dashboard' />} />
              <Route path='/dashboard >' element={<Dashboard />} />
              <Route path='/tasks >' element={<Tasks />} /> 
              <Route path='/completed/:status >' element={<Tasks />} /> 
              <Route path='/in-progress/:status >' element={<Tasks/>} />
              <Route path='/todo/:status >' element={<Tasks />} /> 
              <Route path='/team >' element={<Users />} /> 
              <Route path='/trashed >' element={<Trash />} /> 
              <Route path='/task/:id >' element={<TaskDetails />} />  
            </Route>

            <Route path='/log-in' element={<Login />} />
          </Routes>

          <Toaster richColors />
        </main>
  );
}

export default App;

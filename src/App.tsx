import { Route, Routes } from 'react-router-dom';
import { Login, Employees, Upload } from './pages';
import { Layout } from './components';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="employees" element={<Employees />} />
          <Route path="upload" element={<Upload />} />
        </ Route>
      </Routes>
    </div>
  )
}

export default App;

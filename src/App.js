import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {RoutesValues} from './Constants/Constants';
console.log(RoutesValues)
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* map all values from constant file */}
          {RoutesValues.map((item,index)=>{
             return <Route key={index} path={item.path} element={<item.component />} />
          })}
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

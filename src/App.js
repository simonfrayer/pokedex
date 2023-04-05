import './App.css';
import { Link, Outlet } from "react-router-dom"


function App() {
return (
    <> 
            <nav>
                <Link to="/" className='linkApp'>Home</Link>
                <Link to="/about" className='linkApp'>About</Link>
            </nav>
            <Outlet />
    </>
  );
}

export default App;

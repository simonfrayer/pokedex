import './App.css';
import { Link, Outlet } from "react-router-dom"


function App() {
return (
    <> 
            <nav>
                <Link to="/" className='linkApp'><button className='navButton'>Home</button></Link>
                <Link to="/about" className='linkApp'><button className='navButton'>About</button></Link>
            </nav>
            <Outlet />
    </>
  );
}

export default App;

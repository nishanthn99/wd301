import { useNavigate } from "react-router-dom";
const Dashboard : React.FC=()=>{
    const navigate=useNavigate();
    const userData=localStorage.getItem('userData');
    const user= userData ? JSON.parse(userData) : null;

    const handleLogout=()=>{
        localStorage.removeItem('userData');
        navigate('/');
    }

    return (
        <div className="min-h-screen p-2">
            <button id="logout-link" onClick={handleLogout} className="px-2 rounded bg-red-600 text-slate-800 hover:bg-red-400">logout-link</button>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <div>
        <h3>{user.name}</h3>
        <h6>{user.email}</h6>
        </div>
    </div>
    )
}

export default Dashboard;
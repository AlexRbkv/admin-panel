import './App.css';
import { MainDash } from './components/MainDash/MainDash.tsx';
import { RightSide } from './components/RIghtSide/RightSide.tsx';
import { Sidebar } from './components/Sidebar/Sidebar.tsx';

function App() {
    return <div className="App">
        <div className="AppGlass">
            <Sidebar />
            <MainDash />
            <RightSide />
        </div>
    </div>;
}

export default App;

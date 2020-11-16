import './App.css';
import logo from './img.jpg';

export function Home() {
    return (
        <div className="container">
            <img className="image" src={logo} alt="Background" />
            <div className="text-block">
                <p className="text-blockName" >Hi,I'm kavin</p>
                <p className="text-blockRole">Full Stack Developer</p>
            </div>
        </div>
    )
}


export default  Home ;
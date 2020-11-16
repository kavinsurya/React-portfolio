import './App.css';
import image from './img.jpg';

export function Home() {
    return (
        <div className="container">
            <img className="image" src={image} alt="Background-image" />
            <div className="text-block">
                <p className="text-blockName" >Hi,I'm kavin</p>
                <p className="text-blockRole">Full Stack Developer</p>
            </div>
        </div>
    )
}


export default  Home ;
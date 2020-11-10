import './App.css';

export function Header() {
    return (
        <div className="header">
            <a href="#default" className="logo">Kavinsurya</a>
            <div className="header-right">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>

            </div>
        </div>
    );
}

export default  Header ;
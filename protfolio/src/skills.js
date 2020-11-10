import './App.css';

export function Skills() {
    return (
        <div className="skillContainer">
            <p className="skillTitle"  >Skills</p>
            <div className="skill">
                <p className="skillName">HTML5</p>
                <div className="skill-bar skill1 ">
                    <span className="skill-count1">95%</span>
                </div>
            </div>
            <div className="skill">
                <p className="skillName">CSS3</p>
                <div className="skill-bar skill2">
                    <span className="skill-count2">90%</span>
                </div>
            </div>
            <div className="skill">
                <p className="skillName">BOOTSTRAP</p>
                <div className="skill-bar skill3">
                    <span className="skill-count3">85%</span>
                </div>
            </div>
            <div className="skill">
                <p className="skillName">JAVASCRIPT</p>
                <div className="skill-bar skill4">
                    <span className="skill-count4">85%</span>
                </div>
            </div>
            <div className="skill">
                <p className="skillName">NODE JS</p>
                <div className="skill-bar skill5">
                    <span className="skill-count5">85%</span>
                </div>
            </div>
            <div className="skill">
                <p className="skillName">MONGO</p>
                <div className="skill-bar skill6">
                    <span className="skill-count6">75%</span>
                </div>
            </div>
        </div>
    )
}

export default Skills ;
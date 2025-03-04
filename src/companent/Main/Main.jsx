import bs from "../../assets/bs.svg"
import learn from "../../assets/learn.png"
import './Main.css'

const Main = () => {
    return (
        <div className="App ">
            <div className="App-menu ">
                <h2 id={"btn"}>Англис тилин үйрөнүүнү жеңилдетүү – биздин миссиябыз!</h2>
                <div className="App-header">
                    <img className={"bs"} src={bs} alt=""/>
                </div>
            </div>
            <div className="App-content">
                <a href="http://localhost:5174/">Башкы бет</a>
                <a href="">Биз жөнүндө</a>
                <a href="">Курстар</a>
                <a href="">Пикирлер</a>
                <a href="">Байланыш номерлери</a>
            </div>
            <div className="App-btn">
                <button id={"App-id"}>Кирүү</button>
                <button id={"app-id"}>Катталуу</button>
            </div>
            <div className="App-p">
                <h3 id={"english"}>Англис тили – бул сиздин келечегиңиздин ачкычы!</h3>
                <p id={"ba"}>Баястан Лингвист менен англис тилин үйрөнүү жеңил, кызыктуу жана жеткиликтүү! Стандарт жана премиум
                    пландарды тандап, тил үйрөнүүдөгү максаттарыңызга жетиңиз.</p>
                {/*<button id={"app"}>Деңгээлиңизди аныктаңыз</button>*/}
                <img className={"learn"} src={learn} alt=""/>
            </div>
        </div>
    );
};

export default Main;
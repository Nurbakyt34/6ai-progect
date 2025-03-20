import bs from "../../assets/bs.svg"
import learn from "../../assets/learn.png"
import strel from "../../assets/strel.svg"
import ramka from "../../assets/ramka.png"
import kurs from "../../assets/kurs.png"
import people from "../../assets/people.png"
import rid from "../../assets/rid.png"
import btf from "../../assets/btf.png"
import dialog from "../../assets/dialog.png"
import './Main.css'

const Main = () => {
    return (
        <div className="App app-container ">
            <div className="App-menu ">
                <h2 id={"btn"}>Облегчение изучения английского языка – наша миссия!</h2>
                <div className="App-header">
                    <img className={"bs"} src={bs} alt=""/>
                </div>
            </div>
            <div className="App-content">
                <a href="">Главная</a>
                <a href="">О нас</a>
                <a href="">Курсы</a>
                <a href="">Отзывы</a>
                <a href="">Контактные номера</a>
            </div>
            <div className="App-btn">
                <button id={"App-id"}>Вход</button>
                <button id={"app-id"}>Регистрация</button>
            </div>
            <div className="App-p">
                <h3 id={"english"}>Английский — это ключ к вашему будущему!</h3>
                <p id={"ba"}>Изучение английского языка с Баястаном Лингвистом — это легко, интересно и доступно!
                    Выберите между стандартным и премиум-планами, чтобы достичь своих языковых целей.</p>
                <div className={"app"}>
                    <button id={"btn"}>Проверьте уровень</button>
                </div>
                <img className={"learn"} src={learn} alt=""/>
            </div>
            <div className="App-main">
                <h6 className={"h6"}></h6>
                <div className={"app-main"}>
                    <h2 id={"nas"}>Насколько хорошо вы знаете английский?</h2>
                    <p id={"uz"}>Узнайте свой уровень и получите рекомендации по подходящему учебному</p>
                    <p id={"plan"}> плану для дальнейшего развития!</p>
                    <div className={"app-btn"}>
                        <button id={"btn"}>Проверьте уровень</button>
                    </div>
                    <div className="app-st">
                        <img src={strel} alt=""/>
                    </div>
                </div>
            </div>
            <h1 id={"br"}>Выберите интересующий вас раздел!</h1>
            <div className={"app-gram"}>
                <div id={"gram"}>
                    <button id={"pnpm"}>Grammar</button>
                    <img className={"ram"} src={ramka} alt=""/>
                    <h3 className={"a1"}>Грамматический урок</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                </div>
                <div id={"gra"}>
                    <button id={"pnpm"}>Vocablary</button>
                    <img className={"ram"} src={kurs} alt=""/>
                    <h3 className={"a3"}>Словари</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                    <div className={"blue"}>
                        <h6></h6>
                    </div>
                </div>
                <div id={"grad"}>
                    <button id={"pnpm"}>Listening</button>
                    <img className={"ram"} src={people} alt=""/>
                    <h3 className={"a3"}>Прослушивание</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                    <div className={"gray"}>
                        <h6></h6>
                    </div>
                </div>
                <div id={"grata"}>
                    <button id={"pnpm"}>Reading</button>
                    <img className={"ram"} src={rid} alt=""/>
                    <h3 className={"a4"}>Урок для чтения</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                </div>
                <div id={"gama"}>
                    <button id={"pnpm"}>Writing</button>
                    <img className={"ram"} src={btf} alt=""/>
                    <h3 className={"a4"}>Урок для письма</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                </div>
                <div id={"people"}>
                    <button id={"pnpm"}>Dialogues</button>
                    <img className={"ram"} src={dialog} alt=""/>
                    <h3 className={"a3"}>Прослушивание</h3>
                    <h3 className={"a2"}>A1, A2, B1, B2, C1</h3>
                    <div className={"app-bat"}>
                        <button id={"btn"}>Перейти к уроку</button>
                    </div>
                    <div className={"white"}>
                        <h6></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
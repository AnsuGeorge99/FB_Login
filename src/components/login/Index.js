import CommonButton from "../CommonButton";
import Card from "./Card";
import InputTextBox from "./InputTextBox";
import './Index.css';
import './InputTextBox.css';
import FbLogo from "./FbLogo";



const Index = () => {
    return (
        <div className="layout">
            <div className="logo">
                <FbLogo/>
            </div>
            <div className="card-layout">
                <Card>
                    <div>
                        <InputTextBox />
                    </div>
                    <div>
                        <CommonButton>Log in</CommonButton>
                    </div>
                    <div className="forgotten-password">
                        <p>Forgotten Password?</p>
                    </div>
                    <hr className="horizontal-line"></hr>
                    <div>
                        <CommonButton >Create new account</CommonButton>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Index;
import './InputTextBox.css';

const InputTextBox = () => {
    return (
       <div>
          <div>
                <input className="col1 input-border" type="text" required={true} placeholder="Email address or phonenumber"  />
            </div>
            <div>
                <input className="col1 input-border" type="text" required={true} placeholder="Password" />
            </div>
       </div>
    );
 }
 
 export default InputTextBox;
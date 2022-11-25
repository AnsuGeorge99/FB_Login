import './CommonButton.css';

const CommonButton = (props) => {
   return (
      <div>
         <button className="login-button">
            {props.children}
         </button>
      </div>
   );
}

export default CommonButton;
import Button from "../Button/Button.js";
import './buttonsection.css';
function ButtonSection({buttons})
{
    const button = buttons.map((value, index) => (
        <div>
          <Button
            key={index}
            type={value.type}
            handleClick={value.handleClick}
            isDisabled={value.isDisabled}
            value={value.value}
          />
        </div>
      ));
    return <div className="input-form-buttons">{button}</div>

}
export default ButtonSection
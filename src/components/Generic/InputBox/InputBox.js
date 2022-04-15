import './InputBox.css'
function InputBox({type,name,placeholder,value,handleInput,className})
{
    return (<input className={className?className:'inputBox'} type={type} name={name} placeholder={placeholder} value={value} onKeyUp={handleInput}  onPaste={handleInput}  onCut={handleInput} onInput={handleInput}  onChange={handleInput} />)
                    

}
export default InputBox;
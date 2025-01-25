import react, {useState} from 'react'
import "./color.css"

function Picker(){

    const [color, setColor] = useState("#51c989");

    function handleColorChange(event){
        setColor(event.target.value);

    }


    return( <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color</p>
                </div>
                <label>Select a color</label>
                <input type="color" value={color} onChange={handleColorChange} />
        
            </div>)
}
export default Picker
import { useRef, useState } from "react";

export  const Reference = () => {

    const[inputField, setInputField] = useState(null)
    const ref = useRef(0);
        // Nested   Functions

        function handleSubmit(e){
            e.preventDefault();
        }

        function hanldeInput(e){
            // setInputField(e.target.value)
            // console.warn("Renders",inputField)
        }

        function handleButton(){
            ref.current += 1;
            console.warn("Reference>>",ref.current);
        }
        // console.warn("Renders outside",inputField)
        return(
        <div>
            <form  onSubmit={handleSubmit}>
                <input  type="text"  name="InputField"  onChange={hanldeInput}  value={ref.current}/>
                <button type="submit">Submit</button>
                <button onClick={handleButton}>{ref.current}</button>
            </form>
        </div>
    )
}


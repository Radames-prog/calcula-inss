import React, {useState} from "react";

const Salario =()=>{
    const [valor, setValor] = useState(0)
    
      return (
        <div>
            <label>Informe o salário</label>
            <input 
            type="text" 
            name="fnome"
            value={valor}
            onChange={(e)=>setValor(e.target.value)}
            />
            <p>Nome digitado:{valor}</p>
        </div>
    )
}

export default Salario;
import Contador from "./components/Contador";
import Salario from "./components/Fsalario";

function Home (){
    return(
        <div>
            <h1>Calculadora de INSS</h1>
            <Contador />
            <Salario />
        </div>
    )
}

export default Home;
import Btn from "../components/buttons/btn/btn";
import InputText from "../components/inputs/input-text/inputText";
import css from "./css.module.css";

function App() {
	return (
		<div className={css.app}>
			<Btn>Enviar</Btn>
			<InputText />
		</div>
	);
}

export default App;

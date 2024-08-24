import Btn from "../components/buttons/Btn/Btn";
import InputNumber from "../components/inputs/InputNumber/InputNumber";
import InputText from "../components/inputs/InputText/InputText";
import css from "./css.module.css";

function App() {
	return (
		<div className={css.app}>
			<Btn>Enviar</Btn>
			<InputText />
			<InputNumber />
		</div>
	);
}

export default App;

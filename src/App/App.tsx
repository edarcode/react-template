import Btn from "../components/buttons/Btn/Btn";
import InputNumber from "../components/inputs/InputNumber/InputNumber";
import InputText from "../components/inputs/InputText/InputText";
import Select from "../components/inputs/Select/Select";
import css from "./css.module.css";

function App() {
	return (
		<div className={css.app}>
			<Btn>Enviar</Btn>
			<InputText />
			<InputNumber />
			<Select
				opt={[
					{ value: 0, display: "0" },
					{ value: 1, display: "1" }
				]}
			></Select>
		</div>
	);
}

export default App;

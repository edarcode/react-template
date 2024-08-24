import { joinClass } from "../utils/joinClass";
import State from "../state/state";
import css from "./css.module.css";

export default function Input(props: Props) {
	const { async, err, loading, success, ...extraProps } = props;

	const finalClassInput = joinClass([
		css.input,
		err && css.input__err,
		async && (err || loading || success) && css.input__state
	]);

	return (
		<label className={css.label}>
			<input
				placeholder="⌨️"
				{...extraProps}
				type="text"
				name="email"
				className={finalClassInput}
			></input>
			<State async={async} err={err} loading={loading} success={success} />
		</label>
	);
}

interface Props {
	async?: boolean;
	err?: string;
	loading?: boolean;
	success?: boolean;
}

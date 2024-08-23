import css from "./css.module.css";
import Err from "./err/err";
import { BTN__KIND } from "./kinds";
import Spinner from "./spinner/spinner";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default function Btn(props: Props) {
	const {
		isVisible = true,
		kind,
		className,
		loading,
		err,
		children,
		...extraProps
	} = props;

	const finalClass = joinClass([
		css.btn,
		err && css.btn__err,
		BTN__KIND[kind ?? "primary"],
		className
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{!loading && children}
			<Spinner loading={loading} />
			<Err err={err} />
		</button>
	);
}

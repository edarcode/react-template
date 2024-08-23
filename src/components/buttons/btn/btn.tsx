import css from "./css.module.css";
import Err from "./err/err";
import Spinner from "./spinner/spinner";
import { joinClass } from "./utils/joinClass";
import { Props } from "./types/types";
import { BTN_KIND } from "./consts/kinds";

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
		BTN_KIND[kind ?? "primary"],
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

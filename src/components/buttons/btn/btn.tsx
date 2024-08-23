import css from "./css.module.css";
import Icon from "./icon/icon";
import { BTN__KIND } from "./kinds";
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
		loading && css.btn__loading,
		err && css.btn__err,
		BTN__KIND[kind ?? "primary"],
		className
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{loading ? "Cargando..." : children}
			<Icon loading={loading} err={err} />
		</button>
	);
}

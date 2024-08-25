import css from "./css.module.css";
import Arrow from "./icons/Arrow.js";
import { joinClass } from "./utils/joinClass.js";

export default function Select(props: Props) {
	const { className, opt, ...extraProps } = props;

	const finalClass = joinClass([css.wrapper_select, className]);

	return (
		<div className={finalClass}>
			<select {...extraProps} className={css.select}>
				{opt.map(item => (
					<option value={item.value}>{item.display}</option>
				))}
			</select>
			<Arrow className={css.arrow} />
		</div>
	);
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	opt: { value: any; display: string }[];
}

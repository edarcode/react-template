import css from "./css.module.css";
import Input from "./input/input";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default function InputText(props: Props) {
	const { className, title, async, err, loading, success, ...extraProps } =
		props;

	const finalClass = joinClass([css.label, className]);

	return (
		<label className={finalClass}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				async={async}
				err={err}
				loading={loading}
				success={success}
			/>

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

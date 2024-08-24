import css from "./css.module.css";
import Input from "./input/input";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default function InputText(props: Props) {
	const { className, title, err, loading, success, async, ...extraProps } =
		props;

	const finalClassName = joinClass([css.label, className]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				err={err}
				async={async}
				loading={loading}
				success={success}
			/>

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

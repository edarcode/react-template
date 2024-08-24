import css from "./css.module.css";
import Err from "./icons/err";
import Loading from "./icons/loading";
import Success from "./icons/success";

type Props = {
	async?: boolean;
	err?: string;
	loading?: boolean;
	success?: boolean;
};

export default function State(props: Props) {
	const { async, err, loading, success } = props;

	const isVisible = async && (err || loading || success);
	console.log(async);
	console.log(isVisible);

	if (!isVisible) return null;
	if (err) return <Err className={css.err} />;
	if (loading) return <Loading className={css.loading} />;

	return <Success className={css.success} />;
}

import Err from "../svg/err";
import Loading from "../svg/loading";
import css from "./css.module.css";

export default function Icon({ loading, err }: Props) {
	if (loading) return <Loading className={css.loading} />;
	if (err) return <Err className={css.err} />;
	return null;
}

type Props = { loading?: boolean; err?: boolean };

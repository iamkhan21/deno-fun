/** @jsx h */
import { h } from '../deps.ts';

type Props = {
	comments: string[];
};

export const Comments = ({ comments }: Props) => {
	return (
		<ul>
			{comments.map((comment: any) => {
				return <li>{comment}</li>;
			})}
		</ul>
	);
};

const QuestionIcon = (props) => (
	<svg
		className={props.className}
		xmlns="http://www.w3.org/2000/svg"
		width="192"
		height="192"
		viewBox="0 0 256 256"
	>
		<rect fill="none"></rect>
		<circle
			cx="128"
			cy="128"
			r="96"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></circle>
		<circle cx="128" cy="180" r="12"></circle>
		<path
			d="M128,144v-8a28,28,0,1,0-28-28"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
	</svg>
);

export default QuestionIcon;

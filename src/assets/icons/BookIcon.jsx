const BookIcon = (props) => {
	return (
		<svg
			className={props.className}
			xmlns="http://www.w3.org/2000/svg"
			width="192"
			height="192"
			viewBox="0 0 256 256"
		>
			<rect fill="none"></rect>
			<path
				d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			></path>
			<line
				x1="144"
				y1="112"
				x2="192"
				y2="112"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			></line>
			<line
				x1="144"
				y1="144"
				x2="192"
				y2="144"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			></line>
			<rect
				x="64"
				y="96"
				width="48"
				height="64"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			></rect>
		</svg>
	);
};

export default BookIcon;

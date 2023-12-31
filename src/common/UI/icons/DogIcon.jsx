const DogIcon = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="192"
			height="192"
			viewBox="0 0 256 256"
		>
			<rect fill="none"></rect>
			<line
				x1="128"
				y1="192"
				x2="128"
				y2="216"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></line>
			<circle cx="92" cy="140" r="12"></circle>
			<circle cx="164" cy="140" r="12"></circle>
			<polyline
				points="144 176 128 192 112 176"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></polyline>
			<path
				d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></path>
			<path
				d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></path>
			<line
				x1="104"
				y1="48"
				x2="152"
				y2="48"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></line>
			<path
				d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="14"
			></path>
		</svg>
	);
};

export default DogIcon;

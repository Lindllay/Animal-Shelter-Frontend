const PeopleIcon = (props) => (
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
			cy="140"
			r="40"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></circle>
		<path
			d="M196,116a59.8,59.8,0,0,1,48,24"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
		<path
			d="M12,140a59.8,59.8,0,0,1,48-24"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
		<path
			d="M70.4,216a64.1,64.1,0,0,1,115.2,0"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
		<path
			d="M60,116A32,32,0,1,1,91.4,78"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
		<path
			d="M164.6,78A32,32,0,1,1,196,116"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		></path>
	</svg>
);

export default PeopleIcon;

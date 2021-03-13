import logo from "../assets/img/512.png";
import img from "../assets/img/girl.png";

const HeaderComp = () => {
	return (
		<>
			<div>
				<header className="z-30 w-full px-2 py-4 bg-amber-200 sm:px-4">
					<div className="container flex items-center justify-between mx-auto">
						<a href="/" className="flex items-center">
							<img src={logo} alt="logo" className="h-10" draggable="false" />
							<strong className="text-gray-600 pl-4 text-lg">
								ReadingList
							</strong>
						</a>
						<div className="flex items-center space-x-1">
							<div className="hidden space-x-1 md:inline-flex">
								<a href="#" className="btn btn-sm btn-link">
									View Code
								</a>
								<a href="#" className="btn btn-sm btn-link">
									@GoldinGuy
								</a>
							</div>
						</div>
					</div>
				</header>
				{/* Remove the div below */}
				<div className="bg-amber-50 text-center">
					<img
						src={img}
						alt="logo"
						className="m-auto  max-h-80"
						draggable="false"
					/>
				</div>
			</div>
		</>
	);
};
export default HeaderComp;

import Image from 'next/image'
import logo from '../../../public/assets/logo.png'

const Welcomescreen = () => {
	return(
		<div className="w-screen h-screen bg-woman_shisha bg-cover bg-no-repeat">
			<div className="w-screen h-screen bg-background opacity-60 absolute"></div>

			<div className="flex flex-row justify-between pl-12 pr-12 pt-12">

				<div className="w-24 h-24 relative"> <Image src={logo}/> </div>

				<div className="flex space-x-32 pr-32 relative">

					<a href="#" className="text-textLight text-2xl font-light">Tabak</a>
					<a href="#" className="text-textLight text-2xl font-light">Cocktail</a>
					<a href="#" className="text-textLight text-2xl font-light">Anfahrt</a>
					<a href="#" className="text-textLight text-2xl font-light">Über uns</a>

				</div>

			</div>

			<div className="flex flex-col relative space-y-8 pt-24 pl-80">
				<h1 className="text-textLight text-6xl tracking-wider">Smoke Mint</h1>

				<h2 className="text-textLight text-3xl tracking-wide"> Täglich frischen Tabak, <br/> Cocktails und Events</h2>

				<a href="#" className="text-textLight text-lg underline font-extralight tracking-wider">Mehr erfahren</a>
			</div>
			<div className="w-full h-3/5 absolute bg-gradient-to-b from-transparent to-background"></div>
		</div>
	);
}


export default Welcomescreen;

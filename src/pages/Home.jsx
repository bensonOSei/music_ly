import { Link } from 'react-router-dom';
import welcomeImg from '../assets/illustrations/sax-player.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/Footer';


export const Home = () => {
	return (
		<div className="h-screen grid w-full place-items-center">
			<div className="flex flex-col items-center w-full max-w-md p-4">
				<h1 className="text-4xl font-bold text-primary-500">
					Your Music Assistant
				</h1>
				<p className="text-lg text-center text-slate-500">
					Looking for the perfect song to match your mood? <br />
					We&apos;ve got you covered.
					
				</p>
                <div className="flex flex-col items-center w-full max-w-sm mt-5">
                    <img src={welcomeImg} alt="Welcome" className="w-full" />
                </div>

                {/* action button */}
                <div className="flex flex-col items-center w-full max-w-sm mt-5">
                    <Link to="/chat" className="px-7 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-slate-50">
                        Start Chatting
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                </div>

                <Footer />
			</div>
		</div>
	);
};

import Input from '../components/input';

export default function Auth() {
    return (
        <div className="relative h-full w-full bg-[url('./images/home-background.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img className="w-48 h-100"  src='./images/logo.jpg' alt="Netflix Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        Sign in
                    </h2>
                    <div className="flex flex-col gap-4">
                        <Input/>
                    </div>

                    </div>

                </div>

            </div>
        
        </div>
    );
    }

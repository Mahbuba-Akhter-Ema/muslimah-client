import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hook/UseTitle';
import signUp from '../../images/signup.gif';

const SignUp = () => {
	useTitle('Sign Up')
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

	const { createUser, providerLogin, loading } = useContext(AuthContext);
	const googleProvider = new GoogleAuthProvider();

	if(!loading) {
        return <div>
            Loading.....
        </div>
    }

	const handleSignUp = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then(result => {
				const user = result.user;
				const currentUser = {
					email: user.email
				}

				fetch('https://muslimah-server.vercel.app/jwt', {
					method: "POST",
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(currentUser)
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("token", data.token)
					})
				navigate(from, { replace: true });
				console.log(user);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handleGoogleSignIn = () => {
		providerLogin(googleProvider)
			.then(result => {
				const user = result.user;
				const currentUser = {
					email: user.email
				}

				fetch('https://muslimah-server.vercel.app/jwt', {
					method: "POST",
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(currentUser)
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("token", data.token)
					})
				navigate(from, { replace: true });
				console.log(user);
			})
			.catch(error =>
				console.error(error)
			);
	}

	return (
		<div className="hero min-h-screen bg-base-200 mt-10 rounded">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<img src={signUp} alt="" srcSet="" />
				</div>
				<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100">
					<h1 className="text-2xl font-bold text-center">Sign Up</h1>
					<form onSubmit={handleSignUp} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
						<div className="space-y-1 text-sm">
							<label htmlFor="username" className="block dark:text-gray-400">Username</label>
							<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400" required />
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="username" className="block dark:text-gray-400">Email</label>
							<input type="text" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400" required />
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="password" className="block text-gray-400">Password</label>
							<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
						</div>
						<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-teal-400 hover:bg-teal-600">Sign Up</button>
					</form>
					<div className="flex items-center pt-4 space-x-1">
						<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
						<p className="px-3 text-sm text-gray-400">SignUp with social account</p>
						<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
					</div>
					<div className="flex justify-center space-x-4">
						<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-9/12 p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-700">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p>Google</p>
						</button>

					</div>
					<p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
						<Link to="/login" className="underline text-gray-100">LogIn</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import "react";

export function AuthenticationPage() {
	return (
		<div className="auth-container">
			<SignedOut>
				<SignIn
					routing="path"
					path="/sign-in"
					fallbackRedirectUrl="/"
					signUpUrl="/sign-up"
				/>
				<SignUp
					routing="path"
					path="/sign-up"
					fallbackRedirectUrl="/"
					signInUrl="/sign-in"
				/>
			</SignedOut>
			<SignedIn>
				<div className="redirect-message">
					<p>You are already signed in.</p>
				</div>
			</SignedIn>
		</div>
	);
}

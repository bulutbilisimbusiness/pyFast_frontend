import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("CLERK KEY:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
console.log("All env vars:", import.meta.env);
if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

export default function ClerkProviderWithRoutes({ children }) {
	return (
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<BrowserRouter>{children}</BrowserRouter>
		</ClerkProvider>
	);
}

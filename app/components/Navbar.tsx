import { authClient } from "../lib/auth-client";
import { NavigationMenuDemo } from "./Navigation";

export function Navbar() {
  async function handleClick() {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/newsletter/inbox",
    });
    if (error) {
      console.log(error);
      return;
    }
  }
  return (
    <div className="h-16 w-full fixed top-6 z-50">
      <div className="w-full flex items-center justify-center">
        <div className="lg:min-w-4xl px-8 hidden lg:flex justify-between bg-neutral-900 rounded-2xl h-16  items-center">
          <img src="https://cdn.simpleicons.org/bluesound/white?viewbox=auto&size=20" />
          <NavigationMenuDemo />
          <button
            onClick={handleClick}
            className="px-4 cursor-pointer hover:opacity-90 py-2 bg-white rounded-md text-black text-sm font-semibold"
          >
            Get started
          </button>
        </div>
      </div>
      <div className="lg:hidden block">hi</div>
    </div>
  );
}

import Link from "next/link";
import { Themetoggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar =async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Take <span className="text-primary">Notes</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <Themetoggle />
          <div className="flex items-center gap-x-5">
          {(await isAuthenticated()) ? (
            <LogoutLink>
            <Button>Logout</Button>
          </LogoutLink>
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

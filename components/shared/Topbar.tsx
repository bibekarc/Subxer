import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/sign-up" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Subxer</p>
      </Link>

      <div className="flex items-center gap-1">
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
        <div className="block md:hidden">
          <Link href='/sign-in'>
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer -scale-x-100">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;

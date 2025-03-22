import { OrganizationList, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
export default function Onboarding() {
  return (
    <div className="flex h-screen flex-col bg-zinc-900">
      {/* Top Navigation */}
      <header>
        <nav className="mx-auto flex h-16  items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              width={12}
              height={12}
              alt="Picture of the author"
            />
            <span className="text-lg font-medium text-white">Rarome</span>
          </div>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonBox: "flex flex-row",
                userButtonOuterIdentifier: "order-1",
                userButtonTrigger: "flex flex-row items-center",
              },
              baseTheme: dark,
            }}
          />
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <OrganizationList
          appearance={{
            baseTheme: dark,
          }}
          hidePersonal={true}
        />
      </div>
    </div>
  );
}

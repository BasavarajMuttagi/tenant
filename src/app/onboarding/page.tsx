import Header from "@/components/Header";
import { OrganizationList } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
export default function Onboarding() {
  return (
    <div className="flex h-screen flex-col bg-zinc-900">
      {/* Top Navigation */}
      <Header />

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

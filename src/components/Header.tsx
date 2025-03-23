import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav className="mx-auto flex h-16  items-center justify-between px-6">
        <OrganizationSwitcher hidePersonal /> <UserButton />
      </nav>
    </header>
  );
};

export default Header;

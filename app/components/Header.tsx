import NavBar from "./NavBar";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">ORGANIZER</h1>
        <UserAvatar />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;

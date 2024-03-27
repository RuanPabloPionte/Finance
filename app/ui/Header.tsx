import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">FINANCE</h1>
        <span className="border-2 bg-slate-200 rounded-full h-10 w-10"></span>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;

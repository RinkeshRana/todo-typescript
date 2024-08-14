import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  return (
    <div className="relative px-3  p-4 bg-zinc-900 rounded-md">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">
        <GiHamburgerMenu />
      </div>
      <h1 className="text-md sm:text-xl font-bold text-center  ">Todo App</h1>
    </div>
  );
}
export default Header;

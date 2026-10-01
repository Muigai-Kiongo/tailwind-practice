export default function Header() {
  return (
    <header className="flex gap-4 items-center bg-gray-600 justify-between p-4 text-white">
      <h1>Portfolio</h1>
      <nav>
        <ul className="flex gap-4 ">
            <li className="hover:text-red-700 cursor-pointer">Home</li>
            <li className="hover:text-red-700 cursor-pointer">About</li>
            <li className="hover:text-red-700 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
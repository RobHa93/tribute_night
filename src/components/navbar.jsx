const navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex justify-end space-x-6">
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Home</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Anreise</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Über uns</li>
        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">Kontakt</li>
      </ul>
    </nav>
  );
};

export default navbar;

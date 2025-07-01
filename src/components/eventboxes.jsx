

const eventboxes = () => {
  return (
    <div className="relative flex justify-center -mt-16 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        {["Card 1", "Card 2", "Card 3"].map((title, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-red-600">Hier ist ein kurzer Beschreibungstext.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default eventboxes;

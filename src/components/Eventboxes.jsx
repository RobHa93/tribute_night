import Band1 from '../assets/img/Band1.PNG'
import Band2 from '../assets/img/Band2.PNG'

const Eventboxes = () => {
    const events = [
      {
        title: "Blues Night",
        image1: Band1,
        image2: Band1,
        date: ["DO", "22", "Jan"],
        description: "Andy Egert",
        description2: "Lucky Wüthrich",
      },
      {
        title: "Rock Night",
        image1: Band1,
        image2: Band2,
        date: ["FR", "23", "Jan"],
        description: "live/wire",
        description2: "Shades of Purple",
      },
      {
        title: "Rock Night",
        image1: Band2,
        image2: Band1,
        date: ["SA", "24", "Jan"],
        description: "CRAZY DIAMOND",
        description2: "WE2 – THE U2 TRIBUTE",
      },
    ];
  
    return (
      <div className=" relative flex justify-center -mt-[350px] z-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-[320px] bg-stone-100 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Bilder  */}
              <div className="flex flex-col h-1/2 p-2">
                <img
                  src={event.image1}
                  alt="Bild 1"
                  className="w-full h-[65%] object-cover mb-2"
                />
                <img
                  src={event.image2}
                  alt="Bild 2"
                  className="w-full h-[65%] object-cover "
                />
              </div>
  
              {/* Datum-Kästchen */}
              <div className="absolute top-2/3 -mt-6 left-1/2 transform -translate-x-1/2 space-x-2 flex">
                {event.date.map((dateItem, dateIndex) => (
                  <div
                    key={dateIndex}
                    className="bg-gray-800 px-3 py-1 rounded-md text-center text-xs text-white"
                  >
                    {dateItem}
                  </div>
                ))}
              </div>
  
              {/* Name */}
              <div className="text-center mt-16 py-2">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-black-600">{event.description}</p>
                <p className="text-black-600">{event.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Eventboxes;

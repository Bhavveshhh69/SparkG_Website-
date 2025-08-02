export default function EventsCarousel() {
  const events = [
    {
      title: "How to Build a Network That Opens Doors and Drives Revenue",
      host: "Sedge Beswick",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Profitable Personal Branding: How to Charge, Measure, and Grow Your Brand Revenue",
      host: "Rachael Marshall, Magic Digits",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Protecting Your Personal Brand Like a Business (Because It Is One)",
      host: "Amelia Sordell & Helen Kypreos",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Automating Your LinkedIn Sales Funnel",
      host: "Amelia Sordell",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "How to Close Clients with Confidence",
      host: "Amelia Sordell", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section className="py-20 bg-klowt-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">EVENT REPLAYS</h2>
        
        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {/* Original events */}
            {events.map((event, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-klowt-blue/30 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-klowt-gray text-sm mb-4">Hosted by {event.host}</p>
                  <button className="text-klowt-pink font-medium hover:underline">
                    WATCH THE REPLAY →
                  </button>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {events.map((event, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 bg-klowt-blue/30 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-klowt-gray text-sm mb-4">Hosted by {event.host}</p>
                  <button className="text-klowt-pink font-medium hover:underline">
                    WATCH THE REPLAY →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

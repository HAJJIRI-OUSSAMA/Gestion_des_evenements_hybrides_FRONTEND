export const HeroSection = ({ onBecomeOrganizerClick }) => {
    return (
      <div className="bg-gradient-to-r bg-black  text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover and Manage  <span className="text-green-400"> Hybrid </span>Events
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join the world of hybrid events. Explore exciting opportunities or host your own event—online or in person.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/events"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 border border-white"

            >
              Explore Events
            </a>
            <button
  onClick={onBecomeOrganizerClick}
  className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200"

>
  Become an Organizer
</button>

          </div>
          
        </div>
      </div>
    );
  };
  

const Header = () => {
  return (
    <> 
    <header class="bg-white shadow-lg">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-extrabold text-black">
      Eventify
    </a>

    <nav class="hidden md:flex space-x-6">
      <a href="/" class="text-gray-600 hover:text-blue-600">Home</a>
      <a href="/events" class="text-gray-600 hover:text-blue-600">Events</a>
      <a href="/signin" class="text-gray-600 hover:text-blue-600">Sign In</a>
      <a href="/signup" class="text-gray-600 hover:text-blue-600">Sign Up</a>
    </nav>

    <div class="relative hidden md:block">
      <input
        type="text"
        placeholder="Search events..."
        class="pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <button class="absolute right-2 top-2 text-gray-500 hover:text-blue-600">
        🔍
      </button>
    </div>

    
    <button
      class="block md:hidden text-gray-600 focus:outline-none"
      id="menu-button"
    >
      ☰
    </button>
  </div>
</header>
    
    </>
  );
};

export default Header;

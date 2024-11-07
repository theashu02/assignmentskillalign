const Input = () => {
  return (
    <div className="relative w-[97%]">
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-black border border-white text-gray-200 px-4 py-2 rounded-sm
                 placeholder-gray-500 focus:outline-none focus:border-gray-500
                 transition-colors duration-200"
      />
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 
                   hover:text-gray-200 transition-colors duration-200"
        aria-label="Submit email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Input;
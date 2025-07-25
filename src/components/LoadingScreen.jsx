const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-b from-violet-900 to-black flex flex-col items-center justify-center z-50 transition-opacity duration-500">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-violet-300 text-xl font-mono tracking-widest animate-pulse">
            Loading...
        </p>
    </div>
);

export default LoadingScreen;

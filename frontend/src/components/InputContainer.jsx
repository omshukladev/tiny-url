const InputContainer = ({ originalUrl, setOriginalUrl, handleShorten }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="url"
        placeholder="Enter your long URL..."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)} //keeps updating the value
        className="input input-bordered input-primary w-full"
      />
      {/* trigger the function made in home page */}
      <button onClick={handleShorten} className="btn btn-primary w-full sm:w-auto"> 
        Shorten
      </button>
    </div>
  );
};

export default InputContainer;
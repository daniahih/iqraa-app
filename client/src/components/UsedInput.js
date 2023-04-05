export const Massage = ({ label, placeholder }) => {
  return (
    <div className="text-sm w-full ">
      <label className=" text-border font-semibold"> {label}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 border border-border rounded bg-main"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
export const Select = ({ label, options, onChange }) => {
  return (
    <>
      <label className=" text-border font-semibold"> {label}</label>
      <select
        className="w-full mt-2 px-6 py-4 text-text border-border border rounded bg-main "
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

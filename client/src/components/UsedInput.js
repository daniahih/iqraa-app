export const Massage = ({ label, placeholder, name, register }) => {
  return (
    <div className="text-sm w-full ">
      <label className=" text-border font-semibold"> {label}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 border border-border rounded bg-main"
        placeholder={placeholder}
        {...register}
        name={name}
      ></textarea>
    </div>
  );
};
export const Select = ({ label, options, name, register }) => {
  return (
    <>
      <label className=" text-border font-semibold"> {label}</label>
      <select
        className="w-full mt-2 px-6 py-4 text-text border-border border rounded bg-main "
        {...register}
        name={name}
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
export const Input = ({
  label,
  placeholder,
  type,
  bg,
  register,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="text-sm w-full ">
      <label className=" text-border font-semibold "> {label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...register}
        type={type}
        placeholder={placeholder}
        className={` w-full h-10 text-sm mt-2 border border-border rounded text-white ${
          bg ? "bg-main" : "bg-dry"
        }`}
      ></input>
    </div>
  );
};

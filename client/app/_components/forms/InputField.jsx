import { useController } from "react-hook-form";

const InputField = ({
  type = "text",
  name,
  label,
  placeholder = "",
  control,
  rules,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  return (
    <div className="col-span-12 md:col-span-6">
      <label className="flex flex-col group">
        <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
          {label}
        </span>
        <input
          type={type}
          {...field}
          placeholder={placeholder}
          className={`w-full rounded-lg px-3 py-3 border ${
            error ? "border-red-500" : "border-[#BCBCBC]"
          } focus:outline-[#222222] text-[#222222] font-semibold text-lg`}
        />
        {error && (
          <span className="text-red-500 text-sm mt-1">{error.message}</span>
        )}
      </label>
    </div>
  );
};

export default InputField;

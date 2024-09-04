import { Controller } from "react-hook-form";

const DateField = ({ name, label, placeholder, control, rules }) => {
  return (
    <label className="col-span-12 md:col-span-6 flex flex-col group">
      <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
        {label}
      </span>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type="date"
              id={name}
              placeholder={placeholder}
              className={`w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222]  text-[#222222] font-semibold text-lg ${
                error ? "border-red-500" : "border-[#BCBCBC]"
              }`}
            />
            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </label>
  );
};

export default DateField;

import { Controller } from "react-hook-form";

const TextAreaField = ({ name, label, placeholder, control, rules }) => {
  return (
    <label className="col-span-12 flex flex-col group">
      <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
        {label}
      </span>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea
              {...field}
              id={name}
              placeholder={placeholder}
              className={`w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222] text-[#222222] font-semibold text-lg ${
                error ? "border-red-500" : "border-[#BCBCBC]"
              }`}
              rows={4}
            />
            {error && (
              <span className="mt-1 text-sm text-red-500">{error.message}</span>
            )}
          </>
        )}
      />
    </label>
  );
};

export default TextAreaField;

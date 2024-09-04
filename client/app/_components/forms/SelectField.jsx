import React from "react";
import { Controller } from "react-hook-form";
import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const SelectField = ({ name, label, placeholder, control, rules, data }) => {
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
            <Select
              {...field}
              id={name}
              placeholder={placeholder}
              data={data}
              radius="md"
              size="lg"
              withCheckIcon={false}
              comboboxProps={{ dropdownPadding: 0, shadow: "lg" }}
              rightSectionPointerEvents="none"
              rightSection={<IconChevronDown stroke={2} />}
              className={`w-full rounded-lg font-semibold ${
                error ? "border border-red-500" : " border border-[#bcbcbc]"
              }`}
              onChange={(value) => field.onChange(value)}
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

export default SelectField;

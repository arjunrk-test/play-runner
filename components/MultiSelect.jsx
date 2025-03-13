"use client"
import React from "react";
import Select from "react-select";

const MultiSelect = ({
  options = [],
  defaultValue = "Select",
  isMulti = true,
  name = "select",
  className = "basic-multi-select w-full",
  classNamePrefix = "select",
  placeholder = "Select options",
  onChange,
  value,
  ...props
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      isMulti={isMulti}
      name={name}
      options={options}
      className={className}
      classNamePrefix={classNamePrefix}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default MultiSelect;

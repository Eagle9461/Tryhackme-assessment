import { IBaseInputFieldProps } from "../../types";

const BaseInputField: React.FC<IBaseInputFieldProps> = ({
  type,
  _id,
  placeholder,
  autoFocus,
  required,
  label,
  register,
  error,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={_id} className="mb-4 text-gray-500 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={_id}
        {...register("title")}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
      />
      {<p className="text-start text-xs italic text-red-500 my-4"> {error}</p>}
    </div>
  );
};

export default BaseInputField;

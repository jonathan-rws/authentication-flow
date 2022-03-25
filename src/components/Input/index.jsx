export function Input({name, type, autoComplete, placeholder, register}) {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        Email
      </label>
      <input
        {...register(name)}
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md mt-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  )
}
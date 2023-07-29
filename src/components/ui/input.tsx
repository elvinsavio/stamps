interface IInputProps {
  placeholder: string;
  className?: string;
}
export const Input = ({ placeholder, className = "" }: IInputProps) => {
  return <input className={`px-5 py-2 outline outline-black outline-1 ${className}`} placeholder={placeholder}></input>;
};

export const TextArea = ({ placeholder, className = "" }: IInputProps) => {
  return (
    <textarea
      rows={3}
      className={`px-5 py-2 outline outline-black outline-1 ${className}`}
      placeholder={placeholder}
    ></textarea>
  );
};

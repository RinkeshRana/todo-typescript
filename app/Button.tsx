function Button({
  name,
  onClick,
}: {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className="px-7 py-2 bg-cyan-500 rounded-full">
      {name}
    </button>
  );
}
export default Button;

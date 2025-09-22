interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="bg-zinc-700 my-2 font-semibold hover:cursor-pointer hover:bg-zinc-600 text-gray-300 font-mono text-sm py-1 px-2 rounded-md"
    >
      {props.title}
    </button>
  );
}

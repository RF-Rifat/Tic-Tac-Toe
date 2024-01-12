export default function Button({ value }) {
  return (
    <button className="bg-white border border-zinc-500 h-20 w-20 m-1 leading-9 text-lg shadow-xl">
      {value}
    </button>
  );
}

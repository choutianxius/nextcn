import Counter from "@/components/counter";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="mb-2">Next.js + TailwindCSS</p>
      <Counter />
    </div>
  );
}

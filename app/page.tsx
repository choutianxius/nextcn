import Link from "next/link";

import Counter from "@/components/counter";
import packageJson from "@/package.json";

const NEXT_JS_LINK = "https://nextjs.org/";
const TAILWIND_CSS_LINK = "https://tailwindcss.com/";
const SHADCN_UI_LINK = "https://ui.shadcn.com/";

function getMajorVersionString(version?: string): string {
  if (!version) return "";
  return " v" + version.replace("^", "").split(".")[0];
}

export default function Page() {
  const nextVersionString = getMajorVersionString(
    packageJson.dependencies.next,
  );
  const tailwindVersionString = getMajorVersionString(
    packageJson.devDependencies.tailwindcss,
  );

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="mb-2">
        <Link
          href={NEXT_JS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sky-400 hover:text-sky-500"
        >
          Next.js{nextVersionString}
        </Link>
        {" + "}
        <Link
          href={TAILWIND_CSS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sky-400 hover:text-sky-500"
        >
          TailwindCSS{tailwindVersionString}
        </Link>
        {" + "}
        <Link
          href={SHADCN_UI_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sky-400 hover:text-sky-500"
        >
          Shadcn UI
        </Link>
      </p>
      <Counter />
    </div>
  );
}

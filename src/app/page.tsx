import { Button } from "@/components/ui/button";
import Link from "next/link";

const shorts = [
  {
    path: "/nextjs-file-structure",
    label: "Next.js File Structure",
    description: "building a nextjs app with a file structure that is easy to understand and navigate",
  },


]

const threads = [
  {
    path: "/figma-esque",
    label: "figma-esque",
    description: "replicating the intrastructure of figma",
    // icon: <Fa />,
  },
  {
    path: '/meta',
    label: 'meta',
    description: 'details of how the documentation was constructed',
    // icon: <Fa />,
  }
];

const Page = () => {
  return (
    <div className="grid grid-cols-[min-content_1fr] gap-2">
      <h1 className="text-2xl font-bold col-span-2">Threads</h1>
      {threads.map((route) => (
        <div key={route.path} className="grid grid-cols-subgrid col-span-2 gap-2">
          <Link href={route.path} passHref>
            <Button variant='ghost' className="w-fit h-fit p-0 m-0">{route.label}</Button>
          </Link>
          <p>{route.description}</p>
        </div>
      ))}
      <h1 className="text-2xl font-bold col-span-2">Shorts</h1>
      {shorts.map((route) => (
        <div key={route.path} className="grid grid-cols-subgrid col-span-2 gap-2">
          <Link href={route.path} passHref>
            <Button variant='ghost' className="w-fit h-fit p-0 m-0">{route.label}</Button>
          </Link>
          <p>{route.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;

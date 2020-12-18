import { motion } from "framer-motion";
import Card from "./Card";
import BookList from "./BookList";
const cards = [
  {
    title: "Free Content",
    content: "Educational content available for commercial use.",
  },
  {
    title: "next-mdx-books",
    content: "An NPM package to build books with NextJS and MDX.",
  },
  {
    title: "react-run-code",
    content: "An embeddable JavaScript and TypeScript code runner.",
  },
];
const books = [
  {
    title: "Guide to Functional Programming",
    author: "Mostly Adequate",
    authorLink: "https://github.com/MostlyAdequate",
    bookLink: "MatthewCaseres/mostly-adequate-guide/ch01.md",
  },
  {
    title: "TypeScript Deep Dive",
    author: "Basarat Ali Syed",
    authorLink: "https://github.com/basarat",
    bookLink: "basarat/typescript-book/docs/getting-started.md",
  },
  {
    title: "javascript",
    author: "GitbookIo",
    authorLink: "https://github.com/GitbookIO",
    bookLink: "GitbookIO/javascript/basics/README.md",
  },
];
export default function Home() {
  return (
    <div>
      <div className="prose dark:prose-dark max-w-none text-center flex-row flex justify-center">
        <h1 style={{ fontSize: 50 }}>Knowledge Unlocked </h1>
        <div className="relative hidden sm:block">
          <motion.div
            className="absolute z-20"
            animate={{ y: [-180, -180, 30, 0] }}
            transition={{
              ease: ["circIn", "circIn", "easeInOut"],
              duration: 4,
              times: [0, 0.25, 0.5, 0.6],
            }}
          >
            <h1 style={{ fontSize: 70 }}>🔑</h1>
          </motion.div>
          <motion.div
            className="absolute"
            animate={{
              y: [0, 400, 400],
              rotate: [0, 720, 720],
              opacity: [1, 1, 0],
            }}
            transition={{
              ease: "circOut",
              duration: 4,
              times: [0.5, 0.75, 1],
            }}
          >
            <h1 style={{ fontSize: 70 }}>🔒</h1>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="prose dark:prose-dark max-w-md md:max-w-xl xl:max-w-2xl m-auto px-2 text-center">
          <h1>Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-3xl m-auto px-2 my-8">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
      <div className="prose dark:prose-dark max-w-md md:max-w-xl xl:max-w-2xl m-auto px-2">
        <h1 className="text-center">Books</h1>
        <BookList books={books} />
        <div>
          These books are hosted to demonstrate the next-mdx-books package. They are also hosted on 
          GitBook, our software is compatible with GitBook. Some GitBook plugins are likely broken in these books.
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { MdArrowBackIosNew } from "react-icons/md";

export interface IProjectCard {
  //These are optional
  bodyDivKey?: string;
  headerDivKey?: string;
  descriptionKey?: string;

  // These must be filled
  header: string;
  description: string;
  links: ILinksInfo[];
}

interface ILinksInfo {
  linkText: string;
  link: string;
}

const ProjectCard = (props: IProjectCard) => {
  const mapLinks = () => {
    return props.links.map((items, i) => {
      return (
        <motion.a
          whileHover={{ opacity: 0.5, textDecoration: "underline" }}
          className="flex text-base w-36 items-center gap-4 cursor-pointer"
          target="_blank"
          href={items.link}
        >
          {items.linkText}
          <MdArrowBackIosNew className="rotate-180 text-lg" />
        </motion.a>
      );
    });
  };
  return (
    <motion.div key={props.bodyDivKey} className="w-full px-12 md:px-16 lg:px-24 py-6">
      <motion.h1 key={props.headerDivKey} className="text-start text-xl">
        {props.header}
      </motion.h1>
      <div className="flex w-full flex-col ">
        <p
          key={props.descriptionKey}
          className="text-sm opacity-60 font-mono  text-start font-normal"
        >
          {props.description}
        </p>
        {props.links.length > 0 && (
          <motion.div className="flex gap-4">{mapLinks()}</motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import {
  motion,
  Variants,
  AnimatePresence,
  useAnimationControls,
} from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard, { IProjectCard } from "./ProjectCard";
import projects from "../projects";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaMailBulk,
} from "react-icons/fa";
import SocialCard from "./SocialCard";

type CarouselDirection = "left" | "right";
type PageDirection = "up" | "down";

const carouselVar: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  exit: {
    scale: 0.9,
    filter: "blur(10px)",
    opacity: 0,
  },
  animate: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
  },
};

const projectsParentDiv: Variants = {
  initial: {
    transition: {
      when: "afterChildren",
    },
  },

  animate: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },

  exit: {},
};

// Socials Page Parent Element Animation Variants. For orchestration.
const socialsVar: Variants = {
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
  initial: {
    transition: {
      when: "afterChildren",
    },
  },
};

const Header = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [carouselDirection, setCarouselDirection] =
    useState<CarouselDirection>("left");
  const [pageDirection, setPageDirection] = useState<PageDirection>("down");

  const spanParent: Variants = {
    visible: {
      scale: .9,
      y: -20,
      filter: ["blur(5px)", "blur(0px)"],
      transition: {
        y: {
          delay: 0.5,
        },
        when: "afterChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      scale: 0.6,
      y: 120,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const slides = Array(3);

  // Attach this to the button so that potential employers can download my resume
  const downloadResume = () => {
    const resumePath = "../src/resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "oguzBatur_resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pageVariants: Variants = {
    initial: { scale: 0.8, borderRadius: 25 },
    animate: {
      scale: [0.8, 0.8, 0.8, 1],
      y: 0,
      filter: ["blur(0px)", "blur(5px)", "blur(0px)", "blur(0px)"],
    },
    exit: { y: "100vh", scale: 0.8 },

    pageExit: {
      transition: {
        type: "tween",
      },
      y: -200,
      filter: "blur(15px)",
      opacity: 0,
      // scale: [null, 0.8, 0.8, 0.8],
      scale: 0.8,
    },
    pageInitial: {
      // transition: {
      //   type: "tween",
      //   duration: .7
      // },
      y: -200,
      scale: 0.8,
      filter: "blur(13px)",
    },
  };

  const spanChild: Variants = {
    visible: {
      opacity: 1,
      transition: {
        type: "just",
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const svgParent: Variants = {
    visible: {
      transition: {
        when: "beforeChildren",
        duration: 2.33,
      },
      right: [
        "91%",
        "85%",
        "79%",
        "73%",
        "68%",
        "63%",
        "58%",
        "53%",
        "48%",
        "43%",
        "38%",
        "33%",
        "28%",
        "23%",
        "18%",
        "13%",
        "8%",
        "3%",
        "0%",
      ],
    },
    hidden: {
      right: "91%",
      transition: {
        when: "beforeChildren",
      },
    },
    exit: {
      y: -400,
    },
  };

  const svgRect: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        repeat: Infinity,
        repeatDelay: 0.5,
        type: "tween",
        ease: "linear",
        repeatType: "reverse",
      },
      opacity: [1, 0],
    },
  };

  useEffect(() => {
    console.log("Rendered...");
  });

  const mapToSpan = (spanText: string) => {
    const characters = spanText.split("");
    const finalSpan = characters.map((char, i) => {
      return (
        <motion.span key={i} variants={spanChild}>
          {char}
        </motion.span>
      );
    });

    return finalSpan;
  };

  const mapProject = (project: IProjectCard) => {
    const {
      description,
      header,
      bodyDivKey,
      descriptionKey,
      headerDivKey,
      links,
    } = project;
    return (
      <motion.div
        key={`${header}-${carouselIndex}`}
        variants={carouselVar}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragPropagation
        dragConstraints={{ left: 20, right: 20 }}
        dragSnapToOrigin
        className="flex items-center w-full h-full justify-center gap-2"
      >
        <ProjectCard
          key={`${header}-project-card`}
          description={description}
          header={header}
          bodyDivKey={bodyDivKey}
          descriptionKey={descriptionKey}
          headerDivKey={headerDivKey}
          links={links}
        />
      </motion.div>
    );
  };

  const navVar: Variants = {
    initial: {
      opacity: 0,
      y: -50,
      filter: "blur(5px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      filter: "blur(5px)",
      y: -50,
    },
  };

  const navExitControls = useAnimationControls();

  useEffect(() => {
    navExitControls.start("exit").then(() => navExitControls.start("animate"));
  });

  return (
    <motion.div
      key={"main-body"}
      className="text-4xl text-white pt-28   font-semibold h-screen  min-h-screen"
    >
      <motion.nav
        className="w-full flex fixed top-0 z-20 backdrop-blur-sm  h-20 text-lg font-light self-start items-center justify-center gap-12 lg:gap-24 "
        variants={navVar}
        initial="initial"
        animate={navExitControls}
        exit="exit"
      >
        <a
          onClick={() => {
            setPageDirection("down");
            setPageIndex(0);
          }}
          className="cursor-pointer z-10"
          href="#"
        >
          Home
        </a>
        <a
          onClick={() => {
            setPageDirection("up");
            setPageIndex(1);
          }}
          className="cursor-pointer z-10"
          href="#projects"
        >
          Projects
        </a>
        <a
          onClick={() => {
            setPageDirection("up");
            setPageIndex(2);
          }}
          className="cursor-pointer z-10"
          href="#socials"
        >
          Contact
        </a>
      </motion.nav>
      <AnimatePresence
        custom={pageDirection}
        mode="wait"
        key={"exit-anim-element"}
      >
        {pageIndex === 0 && (
          <motion.div
            key={"header"}
            variants={pageVariants}
            custom={pageDirection}
            initial={"pageInitial"}
            animate={"animate"}
            exit={"pageExit"}
            className="flex flex-col h-2/3 items-center justify-center gap-2"
          >
            <motion.div
              key={"general-desc-div"}
              variants={spanParent}
              initial="hidden"
              animate="visible"
              className="relative lg:scale-110 scale-50 font-bold flex gap-4 items-center justify-center "
            >
              <motion.span
                key={"first-name-span"}
                className="flex items-center justify-center "
              >
                {mapToSpan("Oğuz")}
              </motion.span>
              <motion.span
                key={"second-name-span"}
                className="flex  items-center justify-center "
              >
                {mapToSpan("Batur")}
              </motion.span>
              <motion.span
                key={"last-name-span"}
                className="flex mr-8 items-center justify-center "
              >
                {mapToSpan("Sarıöz")}
              </motion.span>
              <motion.svg
                key={"cursor-rect-svg"}
                className={"absolute z-10    right-0 -top-1 "}
                variants={svgParent}
                animate="visible"
                initial="hidden"
                width={20}
                height={40}
              >
                <motion.rect
                  key={"cursor-rect"}
                  width={20}
                  height={40}
                  variants={svgRect}
                  fill={"white"}
                />
              </motion.svg>
            </motion.div>
            <motion.div
              key={"introduction-div"}
              className="text-lg  w-[15rem] md:w-[25rem]  text-center  font-semibold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  delay: 3.3,
                },
              }}
            >
              <h2 key={"introduction-header"} className="opacity-60 text-xs md:text-base">
                Welcome to my website! It's a pleasure to have you here. I'm
                Batur, a passionate creator of games and websites. Over the past
                two years, I've honed my skills as both a hobbyist and a
                freelancer in the field of game development and web design. Feel
                free to explore my portfolio to get a glimpse of my work.
              </h2>
              <button
                onClick={downloadResume}
                className="flex bg-[#FBCACC] text-black relative px-12 top-8 py-2 m-auto text-base items-center justify-center "
              >
                Resume
                <FaFileDownload className="absolute right-2" />
              </button>
            </motion.div>
          </motion.div>
        )}
        {pageIndex === 1 && (
          <motion.div
            id="projects"
            className="w-full overflow-x-hidden"
            key={"projects-div"}
            initial="pageInitial"
            animate="animate"
            exit="pageExit"
            custom={pageDirection}
            variants={pageVariants}
          >
            <h1 className="text-end pr-12 text-4xl">My Projects.</h1>
            <motion.div
              variants={projectsParentDiv}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {mapProject(projects[0])}
              {mapProject(projects[1])}
              {mapProject(projects[2])}
              {mapProject(projects[3])}
              {mapProject(projects[4])}
            </motion.div>
          </motion.div>
        )}
        {pageIndex === 2 && (
          <motion.div
            key={"contact"}
            variants={pageVariants}
            custom={pageDirection}
            initial={"pageInitial"}
            animate={"animate"}
            exit={"pageExit"}
            className="flex w-full absolute overflow-hidden h-2/3  items-center justify-center gap-2"
          >
            <motion.div className=" relative h-full w-full">
              <h2 className=" absolute z-10 right-20 top-8 font-bold">
                Contact me.
              </h2>
              <motion.div
                variants={socialsVar}
                animate="animate"
                initial="initial"
                className="flex lg:flex-row flex-col md:flex-wrap items-center justify-center pt-20 lg:gap-40  w-full h-full text-8xl"
                whileDrag={{ scale: 0.8 }}
                drag="y"
                dragConstraints={{ bottom: 40, top: 0 }}
                dragSnapToOrigin
              >
                <SocialCard
                  SocialsIcon={FaGithub}
                  shortenedUrl="/oguzBatur"
                  url="https://www.github.com/oguzBatur"
                  blank
                />
                <SocialCard
                  SocialsIcon={FaLinkedin}
                  shortenedUrl="in/oguzBatur"
                  url="https://www.linkedin.com/in/oguzbatur/"
                  blank
                />
                <SocialCard
                  SocialsIcon={FaMailBulk}
                  shortenedUrl="sariozbatur@gmail.com"
                  url="mailto:sariozbatur@gmail.com"
                  blank
                />
                <SocialCard
                  SocialsIcon={FaFileDownload}
                  shortenedUrl="My Resume"
                  blank={false}
                  url=""
                  func={downloadResume}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
//MdKeyboardArrowDown

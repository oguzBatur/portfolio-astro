import { Transition, Variants, motion } from "framer-motion";
import type { IconType } from "react-icons/lib";

interface ISocialCard {
  SocialsIcon: IconType;
  url?: string;
  shortenedUrl: string;
  className?: string;
  blank?: boolean;
  func?: () => void;
}

const socialsVar: Variants = {
  initial: {
    y: 200,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    scale: 1.5,
  },

  exit: {
    y: -200,
    opacity: 0,
    scale: 1,
  },
};

const transition: Transition = {};

const SocialCard = (socials: ISocialCard) => {
  if (socials.func !== undefined) {
    return (
      <motion.button
        variants={socialsVar}
        onClick={() => socials.func()}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        className={
          "lg:w-52 md:w-48 w-32 flex lg:text-8xl md:text-4xl text-base  lg:scale-150 items-center justify-center h-52 flex-col " +
          socials.className
        }
      >
        <socials.SocialsIcon className="w-full mt-2 mb-4" />
        <span className=" lg:text-base md:text-sm text-xs text-center w-full ">
          {socials.shortenedUrl}
        </span>
      </motion.button>
    );
  } else {
    return (
      <motion.a
        variants={socialsVar}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        className={
          "lg:w-52 md:w-48 w-32 flex lg:text-8xl md:text-4xl text-base  lg:scale-150 items-center justify-center h-52 flex-col " +
          socials.className
        }
        target={socials.blank === true ? "_blank" : "_top"}
        href={socials.url}
      >
        <socials.SocialsIcon className="w-full mt-2 mb-4" />
        <span className=" lg:text-base md:text-sm text-xs text-center w-full ">
          {socials.shortenedUrl}
        </span>
      </motion.a>
    );
  }
};

export default SocialCard;

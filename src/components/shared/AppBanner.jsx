import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi, I'm Saad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Front End Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:flex-row items-center gap-5 mt-8"
        >
          <a
            download="SaadShaikh-Resume.pdf"
            href="/files/SaadShaikh-Resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48  text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
          <div className="font-general-medium w-36 sm:w-48 px-4 py-2.5 sm:py-3 text-lg text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 h-full focus:ring-indigo-900 rounded-lg duration-500">
            <a
              href="mailto:iamsaadtshaikh@gmail.com"
              title="Send Message"
              aria-label="Send Message"
              className="flex justify-center items-center"
            >
              <FaPhoneAlt className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100 rotate-6"></FaPhoneAlt>
              <span className="text-sm sm:text-lg font-general-medium duration-100">
                Contact
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;

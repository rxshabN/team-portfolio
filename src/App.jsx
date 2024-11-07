import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideInVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideInRightVariants = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function App() {
  const memberRefs = useRef([]);
  const section3Ref = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleScrollToFooter = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const handleScrollToMember = (index) => {
    const element = memberRefs.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="background">
      <main>
        <section className="section1 h-[100vh] w-full">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="text-center justify-center flex flex-col gap-[4vh] h-[40vh] pt-5"
          >
            <span className="text-8xl title">Team Meow Meow</span>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
            >
              <span className="info text-2xl">
                We are team meow meow, Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cum maiores, eligendi adipisci minus,
                consectetur pariatur assumenda tempore, et totam rerum quibusdam
                esse nostrum expedita ipsum fuga quisquam omnis. Quos illum
                quisquam dolorum.
              </span>
            </motion.div>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.8 }}
              className="cursor-pointer"
              onClick={handleScrollToFooter}
            >
              <span className="text-xl connect">
                <u>Connect with us</u>
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 2.8 }}
            className="artistic-line-break1"
          >
            <span className="line"></span>
            <span className="line1"></span>
          </motion.div>

          <div className="h-[45vh]">
            <div className="pictures h-[45vh] w-full grid grid-cols-5">
              <motion.div
                key={0}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 3.4,
                }}
                className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                onClick={() => handleScrollToMember(0)}
              >
                <motion.div
                  className="h-[25vh] ml-5 mr-5 mt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <img
                    src="logo-rn.png"
                    alt="image of rishab logo"
                    className="object-cover"
                  />
                </motion.div>
                <span className="text-3xl">Rishab Nagwani</span>
              </motion.div>
              <motion.div
                key={1}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 3.9,
                }}
                className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                onClick={() => handleScrollToMember(1)}
              >
                <motion.div
                  className="bg-red-400 h-[25vh] ml-5 mr-5 mt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                ></motion.div>
                <span className="text-3xl">Member 2</span>
              </motion.div>
              <motion.div
                key={2}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 4.4,
                }}
                className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                onClick={() => handleScrollToMember(2)}
              >
                <motion.div
                  className="bg-red-400 h-[25vh] ml-5 mr-5 mt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                ></motion.div>
                <span className="text-3xl">Member 3</span>
              </motion.div>
              <motion.div
                key={3}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 4.9,
                }}
                className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                onClick={() => handleScrollToMember(3)}
              >
                <motion.div
                  className="bg-red-400 h-[25vh] ml-5 mr-5 mt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                ></motion.div>
                <span className="text-3xl">Member 4</span>
              </motion.div>
              <motion.div
                key={4}
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 5.4,
                }}
                className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                onClick={() => handleScrollToMember(4)}
              >
                <motion.div
                  className="bg-red-400 h-[25vh] ml-5 mr-5 mt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                ></motion.div>
                <span className="text-3xl">Member 5</span>
              </motion.div>
            </div>

            <div className="artistic-line-break">
              <span className="line"></span>
              <span className="line1"></span>
            </div>
          </div>
        </section>

        <section className="section2 w-full">
          <div
            ref={(el) => (memberRefs.current[0] = el)}
            id="member1"
            className="min-h-screen text-white text-5xl grid grid-cols-2"
          >
            <div className="w-full h-full" ref={ref}>
              <motion.div
                variants={slideInVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="w-full h-1/2 flex justify-center items-center">
                  <div className="circular-image-container">
                    <img
                      src="rishab.jpg"
                      alt="image of rishab"
                      width={300}
                      className="circular-image"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="w-full h-1/2 text-lg p-7">
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 1.0,
                  }}
                >
                  🎮 Hobbies: When I'm not coding, you can find me playing
                  Valorant or exploring news about upcoming tech in the world of
                  web dev, app dev, AI/ML, etc. <br />
                </motion.div>
                <br />
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  🌱 Learning: Currently diving deep into full stack web
                  development, learning advanced concepts such as Three.js,
                  Prometheus/Grafana, Redis, Websockets, RESTful APIs, etc. I'm
                  also fine tuning my expertise in MERN stack. <br />
                </motion.div>
                <br />
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 2.0,
                  }}
                >
                  🌍 Exploring: I love hanging out with friends and exploring
                  the outdoors whenever I get the chance. <br />
                </motion.div>
                <br />
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                >
                  🎸 Music: I'm also learning how to play the guitar to calm
                  myself down during brain blocks, (every dev out there can
                  relate with this 💀).
                </motion.div>
              </div>
            </div>

            <div className="w-full h-full text-lg p-5" ref={ref}>
              <motion.div
                className="overflow-y-hidden"
                variants={slideInRightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 2.9,
                }}
              >
                I’m Rishab Nagwani, currently in my 2nd year pursuing B.Tech in
                Computer Science with specialization in AI & ML at Vellore
                Institute of Technology (VIT), Tamil Nadu. My journey with
                technology began at a young age when I first operated a
                computer, and I've been captivated by its logic and potential
                ever since. Born and raised in Mumbai, I’ve had numerous
                opportunities to immerse myself in the world of tech, refining
                my skills and expanding my knowledge. <br />
              </motion.div>
              <br />
              <motion.div
                className="overflow-y-hidden"
                variants={slideInRightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 3.6,
                }}
              >
                At VIT, my goal has been to challenge myself by exploring new
                areas of the tech industry, and this passion has driven me to
                continually grow and adapt. Today, I specialize in Web
                Development, with a strong command of the MERN stack and
                expertise in automated deployment and testing. I’m proficient in
                programming languages like Python, C/C++, and Java, and I’m
                committed to deepening my knowledge of MERN full stack
                development, DevOps, and Data Structures & Algorithms. <br />
              </motion.div>
              <br />
              <motion.div
                className="overflow-y-hidden"
                variants={slideInRightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 4.3,
                }}
              >
                I’ve developed a wide range of web applications, from simple
                static SPAs to dynamic full-stack applications with complex CRUD
                operations using ReactJS and NextJS. Currently, I’m focused on
                expanding my expertise in full-stack development and DevOps
                while keeping an eye on advancements in AI/ML, app development,
                and software engineering. <br />
              </motion.div>
              <br />
              <motion.div
                className="overflow-y-hidden"
                variants={slideInRightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 5.0,
                }}
              >
                My goal is to not just learn but to leverage my technical skills
                to solve real-world problems and contribute meaningful
                solutions. I’m also passionate about networking with industry
                professionals, gaining insights from their experiences, and
                using that knowledge to give back to society.
              </motion.div>
            </div>
          </div>
          <div className="artistic-line-break">
            <span className="line"></span>
            <span className="line1"></span>
          </div>

          <div
            ref={(el) => (memberRefs.current[1] = el)}
            id="member2"
            className="min-h-screen flex items-center justify-center text-white text-5xl"
          >
            Member 2
          </div>
          <div className="artistic-line-break">
            <span className="line"></span>
            <span className="line1"></span>
          </div>

          <div
            ref={(el) => (memberRefs.current[2] = el)}
            id="member3"
            className="min-h-screen flex items-center justify-center text-white text-5xl"
          >
            Member 3
          </div>
          <div className="artistic-line-break">
            <span className="line"></span>
            <span className="line1"></span>
          </div>

          <div
            ref={(el) => (memberRefs.current[3] = el)}
            id="member4"
            className="min-h-screen flex items-center justify-center text-white text-5xl"
          >
            Member 4
          </div>
          <div className="artistic-line-break">
            <span className="line"></span>
            <span className="line1"></span>
          </div>

          <div
            ref={(el) => (memberRefs.current[4] = el)}
            id="member5"
            className="min-h-screen flex items-center justify-center text-white text-5xl"
          >
            Member 5
          </div>
          <div className="artistic-line-break">
            <span className="line"></span>
            <span className="line1"></span>
          </div>
        </section>
        <div className="text-center text-4xl mt-7 info1">
          To connect with us, you can reach out on the following...
        </div>
        <section
          ref={section3Ref}
          className="section3 w-full h-[30vh] grid grid-cols-5 pl-5 pr-5 mt-10 mb-10"
        >
          <div className="p-3">
            <div className="w-full h-full flex flex-col gap-7 items-center">
              <span className="text-2xl font-bold">Rishab Nagwani</span>
              <a href="https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg==">
                <span className="text-lg cursor-pointer flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.5078 6.5L17.4988 6.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Instagram
                </span>
              </a>

              <a href="http://www.linkedin.com/in/rishab-nagwani-53a37628a">
                <span className="text-lg cursor-pointer flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M7 10V17"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00801 7L6.99902 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  LinkedIn
                </span>
              </a>
              <a href="https://github.com/rxshabN">
                <span className="text-lg cursor-pointer flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="p-3">
            <div className="w-full h-full flex flex-col gap-3 items-center">
              <span className="text-2xl font-bold">Member 2</span>
            </div>
          </div>
          <div className="p-3">
            <div className="w-full h-full flex flex-col gap-3 items-center">
              <span className="text-2xl font-bold">Member 3</span>
            </div>
          </div>
          <div className="p-3">
            <div className="w-full h-full flex flex-col gap-3 items-center">
              <span className="text-2xl font-bold">Member 4</span>
            </div>
          </div>
          <div className="p-3">
            <div className="w-full h-full flex flex-col gap-3 items-center">
              <span className="text-2xl font-bold">Member 5</span>
            </div>
          </div>
        </section>

        <div className="rights text-center mb-3">
          <b>
            Copyright © Team Meow Meow {new Date().getFullYear()}. All rights
            reserved.
          </b>
        </div>
      </main>
    </div>
  );
}

export default App;

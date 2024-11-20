import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import "./App.css";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const memberRefs = useRef([]);
  const section3Ref = useRef(null);
  const backgroundRef = useRef(null);
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

  useEffect(() => {
    const background = backgroundRef.current;
    let frameId;
    let svgColor;
    let svgFillColor = "none";
    function updateTextColor() {
      const currentPosition = parseInt(
        window
          .getComputedStyle(background)
          .getPropertyValue("background-position")
          .split(" ")[0]
      );
      if (currentPosition >= 45 && currentPosition <= 100) {
        document.body.style.color = "white";
        svgColor = "white";
        document.documentElement.style.setProperty(
          "--underline-color",
          "white"
        );
      } else {
        document.body.style.color = "black";
        svgColor = "black";
        document.documentElement.style.setProperty(
          "--underline-color",
          "black"
        );
      }
      const svgs = document.querySelectorAll("svg"); // Select all SVG elements
      svgs.forEach((svg) => {
        svg.style.color = svgColor;
        svg.style.fill = svgFillColor; // Update the fill color
      });
      frameId = requestAnimationFrame(updateTextColor);
    }
    frameId = requestAnimationFrame(updateTextColor);
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="background" ref={backgroundRef}>
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
                  We are team meow meow, a temporary team formed primarily for
                  the sole purpose of this task (and for being too good at
                  meowing). To connect with us,{" "}
                  <span
                    onClick={handleScrollToFooter}
                    className="cursor-pointer"
                  >
                    <u>click here</u>
                  </span>
                  .
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
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
                    delay: 2.8,
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
                    delay: 3.4,
                  }}
                  className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                  onClick={() => handleScrollToMember(1)}
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
                      src="pritha-logo.jpg"
                      alt="image of pritha"
                      className="object-cover w-full h-[185px]"
                    />
                  </motion.div>
                  <span className="text-3xl">Pritha Nagpal</span>
                </motion.div>
                <motion.div
                  key={2}
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 3.9,
                  }}
                  className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                  onClick={() => handleScrollToMember(2)}
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
                      src="image.png"
                      alt="image of amlan"
                      className="object-cover w-full h-[185px]"
                    />
                  </motion.div>
                  <span className="text-3xl">Amlan Pal</span>
                </motion.div>
                <motion.div
                  key={3}
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 4.4,
                  }}
                  className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                  onClick={() => handleScrollToMember(3)}
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
                      src="image copy 2.png"
                      alt="image of suhani"
                      className="object-cover w-full h-[185px]"
                    />
                  </motion.div>
                  <span className="text-3xl">Suhani Singh</span>
                </motion.div>
                <motion.div
                  key={4}
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 4.9,
                  }}
                  className="cell border-gray-300 text-center flex flex-col gap-[6vh]"
                  onClick={() => handleScrollToMember(4)}
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
                      src="pkphoto.jpeg"
                      alt="image of priyanshu"
                      className="object-cover w-full h-[185px]"
                    />
                  </motion.div>
                  <span className="text-3xl">Priyanshu Kumar</span>
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
              id="rishab"
              className="min-h-screen text-5xl grid grid-cols-2"
            >
              <div className="w-full h-full">
                <div>
                  <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="circular-image-container mt-10">
                      <img
                        src="rishab.jpg"
                        alt="image of rishab"
                        width={250}
                        className="circular-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/2 text-lg p-7">
                  <div>
                    🎮 Hobbies: When I'm not coding, you can find me playing
                    Valorant or exploring news about upcoming tech in the world
                    of web dev, app dev, AI/ML, etc. <br />
                  </div>
                  <br />
                  <div>
                    🌱 Learning: Currently diving deep into full stack web
                    development, learning advanced concepts such as Three.js,
                    Prometheus/Grafana, Redis, Websockets, RESTful APIs, etc.
                    I'm also fine tuning my expertise in MERN stack. <br />
                  </div>
                  <br />
                  <div>
                    🌍 Exploring: I love hanging out with friends and exploring
                    the outdoors whenever I get the chance. <br />
                  </div>
                  <br />
                  <div>
                    🎸 Music: I'm also learning how to play the guitar to calm
                    myself down during brain blocks, (every dev out there can
                    relate with this 💀).
                  </div>
                </div>
              </div>

              <div className="w-full h-full text-lg p-5">
                <div>
                  I’m Rishab Nagwani, currently in my 2nd year pursuing B.Tech
                  in Computer Science with specialization in AI & ML at Vellore
                  Institute of Technology (VIT), Tamil Nadu. My journey with
                  technology began at a young age when I first operated a
                  computer, and I've been captivated by its logic and potential
                  ever since. Born and raised in Mumbai, I’ve had numerous
                  opportunities to immerse myself in the world of tech, refining
                  my skills and expanding my knowledge. <br />
                </div>
                <br />
                <div>
                  At VIT, my goal has been to challenge myself by exploring new
                  areas of the tech industry, and this passion has driven me to
                  continually grow and adapt. Today, I specialize in Web
                  Development, with a strong command of the MERN stack and
                  expertise in automated deployment and testing. I’m proficient
                  in programming languages like Python, C/C++, and Java, and I’m
                  committed to deepening my knowledge of MERN full stack
                  development, DevOps, and Data Structures & Algorithms. <br />
                </div>
                <br />
                <div>
                  I’ve developed a wide range of web applications, from simple
                  static SPAs to dynamic full-stack applications with complex
                  CRUD operations using ReactJS and NextJS. Currently, I’m
                  focused on expanding my expertise in full-stack development
                  and DevOps while keeping an eye on advancements in AI/ML, app
                  development, and software engineering. <br />
                </div>
                <br />
                <div>
                  My goal is to not just learn but to leverage my technical
                  skills to solve real-world problems and contribute meaningful
                  solutions. I’m also passionate about networking with industry
                  professionals, gaining insights from their experiences, and
                  using that knowledge to give back to society.
                </div>
              </div>
            </div>
            <div className="artistic-line-break">
              <span className="line"></span>
              <span className="line1"></span>
            </div>

            <div
              ref={(el) => (memberRefs.current[1] = el)}
              id="pritha"
              className="min-h-screen flex items-center justify-center text-5xl"
            >
              <div className="w-full h-full">
                <div>
                  <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="circular-image-container">
                      <img
                        src="pritha.jpg"
                        alt="image of pritha"
                        width={250}
                        className="circular-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/2 text-lg p-7">
                  <div>
                    🎶 Hobbies: I love to sketch just for fun, and it’s one of
                    my ways of releasing stress. I’ve also learned acoustic
                    guitar—just for fun!
                    <br />
                  </div>
                  <br />
                  <div>
                    💻 Learning: Since I'm going to enter the tech industry, I'm
                    currently learning web development and will soon dive into
                    the prerequisites of data science. <br />
                  </div>
                  <br />
                  <div>
                    🌍 Exploring: I am absolutely in love with the world; not to
                    sound cliché, but I want to travel the world so badly, and I
                    wouldn’t mind going to the same destination more than once.{" "}
                    <br />
                  </div>
                  <br />
                  <div>
                    💃 Dance: I love dancing a LOT! Whether I’m studying or
                    walking, I'm always up for a dance sesh.
                  </div>
                </div>
              </div>

              <div className="w-[97%] h-[100vh] text-lg p-5 pt-10">
                <div>
                  I'm Pritha Nagpal, studying BTech in Computer Science and
                  Engineering with specialization in Data Science from Vellore
                  Institute of Technology in Vellore.
                  <br />
                </div>
                <br />
                <div>
                  I'll admit, my journey with technology started very late but
                  ever since i've started, I love it. I want to master my tech
                  skills in data science and work somewhere outside of India.{" "}
                  <br />
                </div>
                <br />
                <div>
                  I'm still in my second year and plan on upgrading my skills. I
                  also want to apply for an internship to get more job
                  experience. I plan on doing masters from abroad and work there
                  and enjoy life. <br />
                </div>
                <br />
              </div>
            </div>
            <div className="artistic-line-break">
              <span className="line"></span>
              <span className="line1"></span>
            </div>

            <div
              ref={(el) => (memberRefs.current[2] = el)}
              id="amlan"
              className="min-h-screen flex items-center justify-center text-5xl"
            >
              <div className="w-full h-full">
                <div>
                  <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="circular-image-container">
                      <img
                        src="omlan.jpeg"
                        alt="image of amlan"
                        width={250}
                        className="circular-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/2 text-lg p-7">
                  <div>
                    🎶 Hobbies: I love photography,solving riddles,and playing
                    the violin sometimes.
                    <br />
                  </div>
                  <br />
                  <div>
                    💻 Learning: Since I'm enthusiastic about tech, I'm
                    currently learning regression and ai related topics and
                    delve deep into AI and ML.I am also interested in quantum
                    computing.
                    <br />
                  </div>
                  <br />
                  <div>
                    🌍 Exploring: I love visiting various hill stations and
                    historical places a lot,places with a lot of heritage.{" "}
                    <br />
                  </div>
                  <br />
                </div>
              </div>

              <div className="w-[97%] h-[100vh] text-lg p-5 pt-10">
                <div>
                  I'm Amlan Pal, studying BTech in Computer Science and
                  Engineering from Vellore Institute of Technology in Vellore.
                  <br />
                </div>
                <br />
                <div>
                  I have been greatly into maths since childhood and I want to
                  master my tech skills which includes the juncture of maths and
                  computing, wanna pursue my masters abroad
                  <br />
                </div>
                <br />
                <div>
                  I'm in my second year and plan on upgrading my skills. I also
                  want to apply for an internship to get more job experience. I
                  plan on doing masters from abroad. <br />
                </div>
                <br />
              </div>
            </div>
            <div className="artistic-line-break">
              <span className="line"></span>
              <span className="line1"></span>
            </div>

            <div
              ref={(el) => (memberRefs.current[3] = el)}
              id="suhani"
              className="min-h-screen flex items-center justify-center text-5xl"
            >
              <div className="w-full h-full">
                <div>
                  <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="circular-image-container mt-10">
                      <img
                        src="image copy.png"
                        alt="image of suhani"
                        width={250}
                        className="circular-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/2 text-lg p-7">
                  <div>
                    👩🏻‍🎨 Hobbies: I absolutely love sketching, listening to music
                    and binge-watching blend which provides me relaxation and
                    entertainment. Sketching allows me to self-express while
                    music offers me a calming escape and binge-watching provides
                    engaging stories to unwind.
                    <br />
                  </div>
                  <br />
                  <div>
                    💻 Learning: I'm excited to dive into web development and
                    design, learning HTML, CSS, and JavaScript alongside
                    essential design principles. My goal is to create visually
                    appealing, user-friendly websites and grow in this dynamic
                    field. <br />
                  </div>
                  <br />
                  <div>
                    🌍 Exploring: If given the chance, I’d love to explore
                    space, experience the universe’s vastness, and discover new
                    worlds. The idea of seeing the cosmos up close excites me.
                    <br />
                  </div>
                  <br />
                  <div>
                    📚 Reading: I love reading books as it allows me to escape
                    into different worlds, learn new things, and expand my
                    imagination. Each book offers a unique experience that keeps
                    me engaged and curious.
                  </div>
                </div>
              </div>

              <div className="w-[97%] h-[100vh] text-lg px-5">
                <div>
                  I'm Suhani Singh, a passionate B.Tech student specialising in
                  Electronics and Communication at Vellore Institute Of
                  Technology, Vellore. I'm excited to dive deep into the world
                  of technology and innovation as I embark on this academic
                  journey!
                  <br />
                </div>
                <br />
                <div>
                  I'm a passionate and curious individual with a love for
                  learning, creativity, and adventure. Whether I’m diving into a
                  new hobby, tackling a challenging project, or simply exploring
                  new ideas, I enjoy immersing myself in whatever I do. I
                  believe that every experience has something valuable to teach,
                  and I'm always eager to grow.
                  <br />
                </div>
                <br />
                <div>
                  My interests range widely—from sketching and binge-watching
                  shows to exploring the world of web development and design.
                  I’m a bit of a tech enthusiast, especially drawn to projects
                  that merge creativity with practical problem-solving. I'm
                  currently getting more into web development, and I’m excited
                  to see where that journey leads!
                  <br />
                </div>
                <br />
                <div>
                  I also love unwinding with a good book or exploring new music.
                  Space exploration fascinates me too—I’d jump at any chance to
                  learn about or be a part of projects that explore the unknown.
                  These hobbies fuel my imagination and bring fresh perspectives
                  to my work and personal projects.
                  <br />
                </div>
                <br />
                <div>
                  Overall, I’d describe myself as someone who thrives on
                  curiosity and connection. I enjoy meeting new people, sharing
                  ideas, and learning from others. Whether it's about
                  creativity, tech, or just having fun, I’m always open to great
                  conversations and new experiences!
                  <br />
                </div>
                <br />
              </div>
            </div>
            <div className="artistic-line-break">
              <span className="line"></span>
              <span className="line1"></span>
            </div>

            <div
              ref={(el) => (memberRefs.current[4] = el)}
              id="priyanshu"
              className="min-h-screen flex items-center justify-center text-5xl"
            >
              <div className="w-full h-full">
                <div>
                  <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="circular-image-container mt-10">
                      <img
                        src="pkphoto2.jpeg"
                        alt="image of pk"
                        width={250}
                        className="circular-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/2 text-lg p-7">
                  <div>
                    👩🏻‍🎨 Hobbies: I love playing cricket, it is more than just a
                    sport to me it's a passion that brings joy, excitement and
                    the emotions tied to each moment make it truly special. If
                    not in the field you will find me coding or exploring
                    mechanical stuffs.
                    <br />
                  </div>
                  <br />
                  <div>
                    💻 Learning: I am currently learning full stack web
                    development and Quantitative finance with an attempt to
                    apply my coding language in quantitative finance. <br />
                  </div>
                  <br />
                  <div>
                    🌍 Exploring: I would like to explore the vastness of oceans
                    once in my life. The fact that humans only know about 5% of
                    the oceans make me curious to know what's present in the
                    depths of ocean.
                    <br />
                  </div>
                  <br />
                  <div>
                    🎵 Singing: I love singing old songs whether studying or
                    doing anything else.
                  </div>
                </div>
              </div>

              <div className="w-[97%] h-[100vh] text-lg px-5 pt-5">
                <div>
                  I'm Priyanshu Kumar, a passionate B.Tech student specialising
                  in Electronics and Communication at Vellore Institute Of
                  Technology, Vellore. I'm excited to dive deep into the world
                  of technology and innovation as I embark on this academic
                  journey!
                  <br />
                </div>
                <br />
                <div>
                  I'm a passionate and curious individual with a love for
                  learning, creativity, and adventure. Whether I’m diving into a
                  new hobby, tackling a challenging project, or simply exploring
                  new ideas, I enjoy immersing myself in whatever I do. I
                  believe that every experience has something valuable to teach,
                  and I'm always eager to grow.
                  <br />
                </div>
                <br />
                <div>
                  My interests range widely—from cricket and Singing to
                  exploring the world of Technology and Finance.
                  <br />
                </div>
                <br />
                <div>
                  I also love unwinding with a good book or exploring new music.
                  Space exploration fascinates me too—I’d jump at any chance to
                  learn about or be a part of projects that explore the unknown.
                  These hobbies fuel my imagination and bring fresh perspectives
                  to my work and personal projects.
                  <br />
                </div>
                <br />
                <div>
                  I will summarise my self as someone full of confidence , big
                  goals and a person who challenges himself to go beyond his own
                  limits.
                  <br />
                </div>
                <br />
              </div>
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
                <a href="https://www.instagram.com/ri_shab.n">
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
                    <span className="hover-underline-animation">Instagram</span>
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
                    <span className="hover-underline-animation">LinkedIn</span>
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
                    <span className="hover-underline-animation">GitHub</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="w-full h-full flex flex-col gap-7 items-center">
                <span className="text-2xl font-bold">Pritha Nagpal</span>
                <a href="https://www.instagram.com/pritha_nagpal">
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
                    <span className="hover-underline-animation">
                      Professional Account
                    </span>
                  </span>
                </a>
                <a href="https://www.instagram.com/prithaazz">
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
                    <span className="hover-underline-animation">
                      Personal Account
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="w-full h-full flex flex-col gap-7 items-center">
                <span className="text-2xl font-bold">Amlan Pal</span>
                <a href="https://www.instagram.com/amlan.22000055">
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
                    <span className="hover-underline-animation">Instagram</span>
                  </span>
                </a>

                <a href="https://www.linkedin.com/in/amlan-pal-2b1a942b5/">
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
                    <span className="hover-underline-animation">LinkedIn</span>
                  </span>
                </a>
                <a href="https://github.com/Amlan2005ED">
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
                    <span className="hover-underline-animation">GitHub</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="w-full h-full flex flex-col gap-7 items-center">
                <span className="text-2xl font-bold">Suhani Singh</span>
                <a href="https://www.instagram.com/suhani.si.ek.ladkiii">
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
                    <span className="hover-underline-animation">Instagram</span>
                  </span>
                </a>
                <a href="https://github.com/singhsuhanibaghel">
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
                    <span className="hover-underline-animation">GitHub</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="w-full h-full flex flex-col gap-7 items-center">
                <span className="text-2xl font-bold">Priyanshu Kumar</span>
                <a href="https://www.instagram.com/priy_anshupk12">
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
                    <span className="hover-underline-animation">Instagram</span>
                  </span>
                </a>
                <a href="https://github.com/PriyanshuPk12">
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
                    <span className="hover-underline-animation">GitHub</span>
                  </span>
                </a>
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
    </>
  );
}

export default App;

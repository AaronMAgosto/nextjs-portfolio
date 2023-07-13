export default function Hero() {

  const profileUrl =
    "https://www.bocacode.com/candidates/software-engineer/aaron-agosto";

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="../../images/aaron1.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {" "}
            Aaron Agosto <br /> Software Engineer
            <br className="hidden lg:inline-block" readymade gluten />
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            As an enthusiastic and motivated software engineer, I am driven by
            continuous learning and exploring various aspects of software
            development. I have a particular interest in front-end and back-end
            development, Cloud Computing, DevSecOps, and project management.
            Currently seeking new opportunities to gain valuable experience and
            contribute to the field of software engineering.
          </p>
          <div className="flex justify-center">
            {/* <a
              href={profileUrl}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Boca Code Portfolio
            </a> */}

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >See Resume </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


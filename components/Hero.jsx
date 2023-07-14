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
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                See Resume{" "}
              </button>
            </a>

            <a href="https://www.linkedin.com/in/aaronagosto/" target="_blank">
              <button class="ml-4 inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Connect on LinkedIn
              </button>
            </a>
          </div>
          <br />
          <div className="mt-5">
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                
                <a href="https://github.com/aaronmagosto" className="ml-3 text-titanium-500" rel="noopener noreferrer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  </a>
                <a href="https://soflohoneyholes.com/" className="ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/link.png" height="30" width="30" alt="link to project" /></a>
                <a href="mailto:aaronagostodev@gmail.com"  className="ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/mail.png" height="30" width="30" alt="email" /></a>
              </span>
            </div>
        </div>
      </div>
    </section>
  );
}

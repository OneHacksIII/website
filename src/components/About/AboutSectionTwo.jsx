

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 px-[30] md:pt-20 lg:pt-28">
      <div className=" grid grid-cols-1  gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        <div className="container max-w-xl hover:scale-125 transform transition">
          <a
            class="block rounded-xl border  bg-[#ffffff14] p-4 shadow-xl sm:p-6 lg:p-8"
            href="https://docs.google.com/document/d/19mmc8KSx6j59OjGDTgRBVdjzgTHDJPhjgbkr963IrAY/edit?usp=sharing\"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>


            <h3 class="mt-3 text-lg grad-text font-bold sm:text-xl">
              The Hackers Guide
            </h3>

            <p class="mt-4 text-sm text-body-color">
              The Hacker's Guide can be used to guide your projects. This includes a grading rubric for your projects and a schedule for the event.
            </p>
          </a>

        </div>
        <div className="container max-w-xl hover:scale-125 transform transition">
          <a
            class="block rounded-xl border  bg-[#ffffff14] p-4 shadow-xl sm:p-6 lg:p-8"
            href="https://docs.google.com/document/d/1Lg8toVmoMXFa1zIjU5unczfWgWYMY8wKqZtm4j33_lc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>


            <h3 class="mt-3 text-lg grad-text font-bold sm:text-xl">
              Rules
            </h3>

            <p class="mt-4 text-sm text-body-color">
              Here are the rules to check your eligibility for this hackathon. Visit our devpost page for more information about our event.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

const prizes = [
  {
    title: "1st Place",
    details: [
      "$120 in Cash",
      "1 AoPS coupon for each winner",
      "1-year subscriptions to NordVPN, NordPass, Saily, and Incogni",
      "2-year VIP CodeCrafters membership",
      "Includes all participant gifts"
    ],
    gradient: true
  },
  {
    title: "2nd Place",
    details: [
      "$90 in Cash",
      "1-year subscriptions to NordVPN, NordPass, Saily, and Incogni",
      "1-year VIP CodeCrafters membership",
      "Includes all participant gifts"
    ],
    gradient: true
  },
  {
    title: "3rd Place",
    details: [
      "$60 in Cash",
      "6-month VIP CodeCrafters membership",
      "Includes all participant gifts"
    ],
    gradient: true
  },
  {
    title: "Best Beginner",
    details: [
      "$30 in Cash",
      "Includes all participant gifts"
    ]
  },
  {
    title: "Most Impactful",
    details: [
      "$30 in Cash",
      "Includes all participant gifts"
    ]
  },
  {
    title: "Most Creative",
    details: [
      "$30 in Cash",
      "Includes all participant gifts"
    ]
  },
  {
    title: "Raffle",
    details: [
      "Desmos swag pack",
      "60 certificates for InterviewCake"
    ]
  },
  {
    title: "Wolfram Award",
    details: [
      "1 year of Wolfram|One",
      "This is an opt-in prize.",
      "Although students aren’t required to use Wolfram tech in their project to be eligible for this award, any student who submits a project utilizing the Wolfram API is eligible for a $500 scholarship to one of Wolfram’s summer programs if they apply and are accepted.",
      "An email will be sent out at the start of the hackathon with more details on this award. Students may reach out for additional details."
    ]
  },
  {
    title: "Participant Gifts (Swag)",
    details: [
      "6 months of Wolfram|One",
      "60 day Balsamiq trial",
      "30 day Voiceflow Pro trial"
    ]
  }
];


const PrizeCard = ({ title, details, gradient }) => (
  <div className={`${
    gradient
      ? "bg-gradient-to-br from-[#BDB8E9] to-[#EBD7FD] text-black"
      : "bg-[#1D1D21] text-white"
  } rounded-[40px] p-6 m-4 max-w-sm shadow-lg hover:scale-[105%] transition-transform`}>
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <ul className="space-y-2">
      {details.map((item, index) => (
        <li key={index} className="text-sm flex items-start">
          <div className="w-3 h-3 mr-2 mt-1 flex-shrink-0"> {/* <-- smaller arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-full h-full ${gradient ? "text-black" : "text-white"}`}
            >
              <path
                fillRule="evenodd"
                d="M4.5 3.75a.75.75 0 01.75-.75h.518a.75.75 0 01.53.22l11.22 11.22a.75.75 0 010 1.06L6.298 22.72a.75.75 0 01-1.28-.53V3.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className={`${item.includes("Includes all participant gifts") || item.includes("Based on workshop attendance") ? "" : "font-bold"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);


const Pricing = () => {
  return (
    <section className="pt-16">
      <div className="py-8">
        <h1 className="text-6xl font-bold text-center text-white">PRIZES</h1>
        <div className="grid place-items-center py-8">
          <hr className="w-3/5 h-1 border-none bg-gradient-to-r from-[#FEB0CB] to-[#EBD7FD] rounded" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {prizes.map((prize, idx) => (
          <PrizeCard key={idx} title={prize.title} details={prize.details} gradient={prize.gradient} />
        ))}
      </div>

      <div className="pr-[20%]">
        <h3 className="text-white text-right">*Prizes may be subject to change</h3>
      </div>
    </section>
  );
};

export default Pricing;
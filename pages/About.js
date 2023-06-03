export default function About() {
  return (
    <div
      id="about"
      className="relative px-6 pt-16 pb-12 overflow-hidden bg-white isolate sm:py-16 lg:overflow-visible lg:px-0"
    >
      <div className="flex flex-col items-center mx-auto gap-y-10">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h1>

        <div className="max-w-5xl text-base leading-7 text-justify text-gray-700">
          <p>
            Welcome to ZOLVEBIZ, a business consultancy firm dedicated to
            helping businesses of all sizes thrive and succeed. Our team of
            expert consultants brings a wealth of knowledge and experience to
            every project, working closely with our clients to understand their
            unique needs and challenges. Our professional services range from
            taxation and regulatory compliance to growth management consulting,
            risk management consulting, and financial accounting for both
            corporate and non-corporate clients. Our goal is to provide
            practical, actionable solutions that deliver measurable results and
            drive growth.
          </p>

          <p className="mt-4">
            At ZOLVEBIZ, we believe that every business has the potential to
            succeed. Our approach is grounded in collaboration and partnership,
            working alongside our clients to develop strategies that align with
            their vision and goals. We take pride in our commitment to
            excellence, delivering high-quality services that are tailored to
            meet the specific needs of each client.
          </p>
        </div>
      </div>
    </div>
  );
}

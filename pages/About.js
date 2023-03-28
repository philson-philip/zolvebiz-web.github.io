export default function About() {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto flex flex-col gap-y-10 items-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h1>

        <div className="max-w-4xl text-base leading-7 text-gray-700 text-center">
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

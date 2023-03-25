import {
  AcademicCapIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are passionate about our business and proud of our longstanding
            expertise and pleasing number of satisfied clients. We guarantee
            every client an efficient service that exceeds their expectation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <AcademicCapIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Management Consultancy
              </dt>
              <ul className="mt-2 text-base leading-7 text-gray-600 list-disc ml-4">
                <li>Management Accounting Services</li>
                <li>Franchise Business Strategy</li>
                <li>Business Project Report</li>
                <li>Virtual CFO</li>
              </ul>
              <p className="mt-3">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <ClipboardDocumentCheckIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Tax & Regulation
              </dt>
              <ul className="mt-2 text-base leading-7 text-gray-600 list-disc ml-4">
                <li>Tax Compliance</li>
                <li>Income tax & GST Advisory</li>
                <li>SEZ Compliance</li>
                <li>Foreign Exchange & RBI</li>
                <li>Compliance</li>
              </ul>
              <p className="mt-3">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <BanknotesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Financial & Accounting
              </dt>
              <ul className="mt-2 text-base leading-7 text-gray-600 list-disc ml-4">
                <li>Internal Audit</li>
                <li>Audit Support Services</li>
                <li>Accounting Advisory Services</li>
                <li>Book-keeping Services</li>
                <li>Payroll Management</li>
                <li>Business Valuation</li>
              </ul>
              <p className="mt-3">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <GlobeAltIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Incorporation & Startup Services
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Incorporation creates a separate legal entity and limits the
                liability of business owners. Startup services provide
                assistance to entrepreneurs in launching and growing their
                businesses, covering everything from planning and branding to
                marketing and advertising.
              </dd>
              <p className="mt-3">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

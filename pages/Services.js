import ManagementServicesImg from "../public/images/management.svg";
import TaxImg from "../public/images/tax.svg";
import FinanceImg from "../public/images/finance.svg";
import StartupImg from "../public/images/startup.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white py-12 sm:py-16" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are passionate about our business and proud of our longstanding
            expertise and pleasing number of satisfied clients. We guarantee
            every client an efficient service that exceeds their expectation. We
            are open and honest and strive to provide pro-active business advice
            that helps businesses and individuals meet their commercial
            obligations and help to take decision for proper investment on time
          </p>
        </div>
        <div className="flex flex-col mt-14 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-x-10 items-center max-w-5xl mx-auto">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight sm:text-2xl">
                Management Consultancy
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                Management consultancy involves providing expert advice and
                guidance to businesses and organizations on improving their
                operations, efficiency, and overall performance. Consultants use
                their knowledge and experience to identify problems, develop
                solutions, and implement strategies to help clients achieve
                their goals.
              </p>
              <p className="mt-6">
                <a
                  href={`/services/management-consultancy`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="mt-6 w-full sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={ManagementServicesImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row-reverse justify-between w-full gap-x-10 items-center max-w-5xl mx-auto">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight sm:text-2xl">
                Tax & Regulation
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                Tax & regulation are important factors that affect businesses
                and individuals, as they determine the amount of taxes to be
                paid and the rules that must be followed to avoid penalties and
                legal issues. Consulting services in this area can help navigate
                the complexities of tax and regulatory compliance, reducing
                risks and maximizing benefits.
              </p>
              <p className="mt-6">
                <a
                  href={`/services/tax-regulation`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="mt-6 w-full sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={TaxImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between w-full gap-x-10 items-center max-w-5xl mx-auto">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight sm:text-2xl">
                Financial & Accounting
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                Financial & accounting services involve the management of
                financial information, including financial reporting,
                bookkeeping, and tax preparation. These services are critical to
                ensuring that businesses maintain accurate financial records and
                comply with relevant regulations.
              </p>
              <p className="mt-6">
                <a
                  href={`/services/financial-accounting`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="mt-6 w-full sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={FinanceImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row-reverse justify-between w-full gap-x-10 items-center max-w-5xl mx-auto">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight sm:text-2xl">
                Incorporation & Startup Services
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                Incorporation creates a separate legal entity and limits the
                liability of business owners. Startup services provide
                assistance to entrepreneurs in launching and growing their
                businesses, covering everything from planning and branding to
                marketing and advertising.
              </p>
              <p className="mt-6">
                <a
                  href={`/services/incorporation-startup-services`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="mt-6 w-full sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={StartupImg}
                alt="Management Services"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

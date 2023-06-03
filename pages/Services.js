import ManagementServicesImg from "../public/images/management.svg";
import TaxImg from "../public/images/tax.svg";
import FinanceImg from "../public/images/finance.svg";
import StartupImg from "../public/images/startup.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div className="py-12 bg-white sm:py-16" id="services">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-5xl mx-auto lg:text-center">
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
        <div className="flex flex-col space-y-8 mt-14">
          <div className="flex flex-col items-center justify-between w-full max-w-5xl mx-auto sm:flex-row gap-x-10">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Management Consultancy
              </h3>
              <ul className="mt-3 ml-4 text-base font-light leading-relaxed text-gray-600 list-disc">
                <li>Business Project Report</li>
                <li>Business Valuation</li>
                <li>Franchise Business Strategy</li>
                <li>Management Accounting Services</li>
                <li>Virtual CFO</li>
              </ul>
              <p className="mt-6">
                <a
                  href={`/services/management-consultancy`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="w-full mt-6 sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={ManagementServicesImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full max-w-5xl mx-auto sm:flex-row-reverse gap-x-10">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Tax & Regulation
              </h3>
              <ul className="mt-3 ml-4 text-base font-light leading-relaxed text-gray-600 list-disc">
                <li>Foreign Exchange and RBI Compliance</li>
                <li>Income Tax and GST Advisory</li>
                <li>SEZ Compliance</li>
                <li>Tax Compliance</li>
              </ul>
              <p className="mt-6">
                <a
                  href={`/services/tax-regulation`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="w-full mt-6 sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={TaxImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full max-w-5xl mx-auto sm:flex-row gap-x-10">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Financial & Accounting
              </h3>
              <ul className="mt-3 ml-4 text-base font-light leading-relaxed text-gray-600 list-disc">
                <li>Accounting Advisory Services</li>
                <li>Audit Support Services</li>
                <li>Bookkeeping Services</li>
                <li>Internal Audit</li>
                <li>Payroll Management</li>
              </ul>
              <p className="mt-6">
                <a
                  href={`/services/financial-accounting`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="w-full mt-6 sm:w-1/2">
              <Image
                className="w-4/5 mx-auto"
                src={FinanceImg}
                alt="Management Services"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full max-w-5xl mx-auto sm:flex-row-reverse gap-x-10">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Incorporation & Startup Services
              </h3>
              <ul className="mt-3 ml-4 text-base font-light leading-relaxed text-gray-600 list-disc">
                <li>Corporate Secretarial Services</li>
                <li>Incorporation Services</li>
                <li>Registration Services</li>
              </ul>
              <p className="mt-6">
                <a
                  href={`/services/incorporation-startup-services`}
                  className="text-base font-medium leading-6 text-indigo-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
            <div className="w-full mt-6 sm:w-1/2">
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

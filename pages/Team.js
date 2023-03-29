import Image from "next/image";
import BibinImage from "../public/images/bibin.png";
import JoyalImage from "../public/images/joyal.png";
import ThomasImage from "../public/images/thomas.png";
import AlinaImage from "../public/images/alina.png";

const people = [
  {
    name: "Bibin Jacob",
    role: "Business Advisory lead",
    imageUrl: BibinImage,
    phone: "+91 6282-800328",
    email: "bibin.jacob@zolvebiz.com",
  },
  {
    name: "Joyal John",
    role: "Service Delivery lead",
    imageUrl: JoyalImage,
    phone: "+91 98464 05795",
    email: "joyal.john@zolvebiz.com",
  },
  {
    name: "Thomas George",
    role: "Risk Advisory lead",
    imageUrl: ThomasImage,
    phone: "+91 97453 80701",
    email: "thomas.george@zolvebiz.com",
  },
  {
    name: "Alina Joy",
    role: "Financial Planning lead",
    imageUrl: AlinaImage,
    phone: "+91 90377 09924",
    email: "alina.joy@zolvebiz.com",
  },
];

export default function Example() {
  return (
    <div className="bg-white pt-16 pb-24" id="team">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            At our business consulting firm, we pride ourselves on having a team
            of highly skilled and experienced professionals. Our consultants
            come from diverse backgrounds and possess a wide range of expertise,
            enabling us to provide comprehensive solutions to our clients&apos;
            unique business challenges.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-56 w-56 rounded-full"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <p className="text-sm leading-6 text-gray-600">{person.phone}</p>
              <p className="text-sm leading-6 text-gray-600">{person.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

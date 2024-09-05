import { describe } from "node:test";

const Card = ({ data }: any) => {
  const card = [
    {
      name: "Secured by AVS",
      description:
        "EtherScale's modular design seamlessly integrates diverse components and services, tailored to developers' needs, supporting a wide range of applications  and adapting to evolving blockchain technologies.",
      icon: "",
    },
    {
      name: "chain agnostic",
      description: "",
    },
  ];
  return (
    <div>
      <div className="w-[800px] h-[500px] px-5 py-3 bg-blue-700 rounded-lg  mt-10 shadow-2xl">
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default Card;

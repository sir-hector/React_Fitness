import { ClassTypes, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image1.png";
import image3 from "@/assets/image1.png";
import image4 from "@/assets/image1.png";
import image5 from "@/assets/image1.png";
import image6 from "@/assets/image1.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassTypes> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non fugit? Voluptates veniam in hic repellendus pariatur nam minus delectus mollitia sint, earum facere quibusdam blanditiis temporibus deleniti quam soluta.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non fugit? Voluptates veniam in hic repellendus pariatur nam minus delectus mollitia sint, earum facere quibusdam blanditiis temporibus deleniti quam soluta.",
    image: image3,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non fugit? Voluptates veniam in hic repellendus pariatur nam minus delectus mollitia sint, earum facere quibusdam blanditiis temporibus deleniti quam soluta.",
    image: image4,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non fugit? Voluptates veniam in hic repellendus pariatur nam minus delectus mollitia sint, earum facere quibusdam blanditiis temporibus deleniti quam soluta.",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non fugit? Voluptates veniam in hic repellendus pariatur nam minus delectus mollitia sint, earum facere quibusdam blanditiis temporibus deleniti quam soluta.",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasees)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              sapiente! Voluptatem, nemo maiores? Beatae accusamus nesciunt
              explicabo. Facilis odio eligendi quis ea nostrum. Doloribus, nisi?
              Iste consequatur recusandae dolor asperiores!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item) => (
              <Class
                key={`${item.name} - ${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default index;

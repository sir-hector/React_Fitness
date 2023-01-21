import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/** HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            deleniti incidunt pariatur, repellat corporis commodi? Et laborum
            voluptate aspernatur asperiores numquam dolore tenetur odio
            obcaecati. Magnam fugiat voluptate iure laboriosam.
          </p>
        </div>
        {/** BENEFITS */}
        <div className="md:flex">

        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, id quisquam. Animi eos aliquid voluptatibus magnam
            dolores ipsam officia? Odio fuga ullam est quaerat autem dolores
            accusantium quas iusto natus!
          </p>
          <p>
            © Evogym All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci sentectus</p>
            <p className="my-5">Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact us</h4>
            <p className="my-5">Massa orci sentectus</p>
            <p className="my-5">Et gravida id et etiam</p>
            <p>(333)425-3825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

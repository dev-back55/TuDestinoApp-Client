import data from "../utils/dataFooter.js";
import Footer from "../components/footer/Footer.jsx";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar/navBar.jsx";

const FooterPageInformation = () => {
  const { idPage } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <div className="fixed mt-0 py-3 w-full flex justify-center bg-[#ebebeb]">
          <div className=" container">
            <NavBar />
          </div>
        </div>
        <div className="mt-32">
          {data
            .filter((item) => item.title === idPage)
            .map((item) => (
              <div
                key={item.title}
                className="container mx-auto px-4 bg-[#ebebeb]"
              >
                <h2 className="text-2xl w-full text-slate-900 mt-10">
                  {item.title}
                </h2>
                <p className="mt-7 text-slate-600 text-justify mb-10">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FooterPageInformation;

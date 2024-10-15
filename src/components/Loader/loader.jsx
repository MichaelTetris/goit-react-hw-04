import { Blocks } from "react-loader-spinner";
import css from "./loader.module.css"

const Loader = () => {
  return (
    <div className= {css.loaderContainer}>
      <Blocks
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loader;

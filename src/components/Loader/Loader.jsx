import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height="100"
        width="100"
        color="#d17deb"
        ariaLabel="loading-indicator"
        strokeWidth="3"
        secondaryColor="#98a3e0"
      />
    </LoaderWrapper>
  );
};

export default Loader;

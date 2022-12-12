import { useState } from 'react';
import { useRouter } from 'next/router';
import Loader from './Loader';

type Props = {
  buttonColor: string;
  loaderColor: string;
};

const OrderButton: React.FC<Props> = ({ buttonColor, loaderColor }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const haydlerOrderButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, 1000);  
  }

  return (
    <button
      aria-label="order"
      type="button"
      className={`order_button order_button${buttonColor}`}
      onClick={haydlerOrderButtonClick}
    >
      {isLoading 
        ? <Loader color={loaderColor}/>
        :  <span>Замовити</span> 
      }

    </button>
  );
};

export default OrderButton;

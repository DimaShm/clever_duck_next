import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  buttonColor: string;
  currentTariff: string;
};

const OrderButton: React.FC<Props> = ({ buttonColor, currentTariff }) => {
  const router = useRouter();
  let isUserProfileOpen: string;

  useEffect(() => {
    if (window !== undefined) {
      isUserProfileOpen = localStorage.getItem('isUserProfileOpen') || '';
    }
  }, []);

  return (
    <button
      aria-label="замовити"
      type="button"
      className={`order_button order_button${buttonColor}`}
      onClick={() => {
        console.log(isUserProfileOpen);

        localStorage.setItem('currentTariff', JSON.stringify(currentTariff));
        isUserProfileOpen === 'true'
          ? router.push('/Profile')
          : router.push('/Payment')
      }}
    >
      Замовити
    </button>
  );
};

export default OrderButton;

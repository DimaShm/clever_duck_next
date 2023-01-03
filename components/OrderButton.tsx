import { useRouter } from 'next/router';

type Props = {
  buttonColor: string;
};

const OrderButton: React.FC<Props> = ({ buttonColor }) => {
  const router = useRouter();

  return (
    <button
      aria-label="замовити"
      type="button"
      className={`order_button order_button${buttonColor}`}
      onClick={() => router.push('/Payment')}
    >
      Замовити
    </button>
  );
};

export default OrderButton;

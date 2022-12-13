
type Props = {
  color: string;
};

const Loader: React.FC<Props> = ({ color }) => {

  return (
    <div
      aria-label="заказ зроблен, чекайте хвилинку"
      className="loader"
    >
      <div 
        className={`loader__content loader__content${color}`} 
      />
    </div>
  );
};

export default Loader;

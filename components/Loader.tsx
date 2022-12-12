
type Props = {
  color: string;
};

const Loader: React.FC<Props> = ({ color }) => {

  return (
    <div className="loader">
      <div 
        className={`loader__content loader__content${color}`} 
      />
    </div>
  );
};

export default Loader;

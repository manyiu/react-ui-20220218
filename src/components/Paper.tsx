interface PaperProps {}

const Paper: React.FC<PaperProps> = (props) => {
  return (
    <div>
      <h1>Paper</h1>
      {props.children}
    </div>
  );
};

export default Paper;

interface HelloProps {
  id: string;
  name: string;
  color?: string;
}

const Hello = (props: HelloProps) => {
  const { id, name, color } = props;

  const style = {
    color: color || "red",
  };

  return (
    <div id={id} style={style}>
      Hello, {name}.
    </div>
  );
};

export default Hello;

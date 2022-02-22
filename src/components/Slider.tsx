import { Slider as MuiSlider } from "@mui/material";

const Slider = () => {
  return (
    <div>
      <MuiSlider defaultValue={30} />
      <MuiSlider
        defaultValue={30}
        className="text-teal-600"
        componentsProps={{ thumb: { className: "rounded-sm" } }}
      />
    </div>
  );
};

export default Slider;

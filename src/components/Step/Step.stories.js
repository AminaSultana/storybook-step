import Step from "./Step";

export default {
  title: "Step",
  component: Step,
  argTypes: {},
};

const Template = (args) => <Step {...args} />;

export const StepVertical = Template.bind({});

StepVertical.args = {
  orientation: "vertical",
  label: "Step",
  position: "middle",
  description: "hi this is description of step no 2",
};

export const StepHorizontal = Template.bind({});

StepHorizontal.args = {
  orientation: "horizontal",
  label: "Step",
  position: "middle",
  status: "success",
  description: "hi this is description of step no 2",
};

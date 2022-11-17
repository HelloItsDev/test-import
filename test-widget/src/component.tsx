import { h, VNode } from "preact";
import { useForm, FormProvider } from "react-hook-form";
import "./style.css";

interface Props {
  color?: string;
}

const App = (props: Props): VNode => {
  console.log("helloo");

  const formMethods = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...formMethods}>
      <form>
        <h1 style={{ color: props.color }}>Hello, World!</h1>
      </form>
    </FormProvider>
  );
};

export default App;

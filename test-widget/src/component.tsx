import { h, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useForm, FormProvider } from "react-hook-form";
// import "./style.css";

export const App = (props): VNode => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
    console.log("helloo", state);
  }, []);
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

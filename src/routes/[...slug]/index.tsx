import { component$ } from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return <div>Hello World - slug - {location.params.slug}</div>;
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  console.log("onStaticGenerate");
  return {
    params: [
      {
        slug: "hello",
      },
      {
        slug: "world",
      },
    ],
  };
};

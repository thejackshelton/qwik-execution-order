import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  server$,
} from "@builder.io/qwik-city";

export const logServer$ = server$(() => {
  return console.log("I am server$");
});

export const useLogLoader = routeLoader$(async () => {
  return console.log("I am loader");
});

export default component$(() => {
  console.log("I am jsx on a route");

  return <></>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

import JSX from "@/views/pages/JSX/JSX";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/jsx/")({
  component: JSX,
});

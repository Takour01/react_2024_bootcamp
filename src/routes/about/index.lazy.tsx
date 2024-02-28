import About from "@/views/pages/About/About";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/")({
  component: About,
});

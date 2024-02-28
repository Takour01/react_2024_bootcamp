import Conditional from "@/views/pages/Conditional/Conditional";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/conditional/")({
  component: Conditional,
});

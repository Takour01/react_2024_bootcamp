import Environment from "@/views/pages/Environment/Environment";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/environment/")({
  component: Environment,
});

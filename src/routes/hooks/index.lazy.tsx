import Hooks from "@/views/pages/Hooks/Hooks";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/hooks/")({
  component: Hooks,
});

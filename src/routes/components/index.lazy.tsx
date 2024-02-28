import Components from "@/views/pages/Components/Components";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/components/")({
  component: Components,
});

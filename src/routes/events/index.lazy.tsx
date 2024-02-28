import Events from "@/views/pages/Events/Events";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/events/")({
  component: Events,
});

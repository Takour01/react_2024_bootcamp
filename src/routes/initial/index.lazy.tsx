import Initial from "@/views/pages/Initial/Initial";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/initial/")({
  component: Initial,
});

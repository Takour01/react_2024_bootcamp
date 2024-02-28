import Props from "@/views/pages/Props/Props";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/props/")({
  component: Props,
});

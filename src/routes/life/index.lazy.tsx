import Life from "@/views/pages/Life/Life";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/life/")({
  component: Life,
});

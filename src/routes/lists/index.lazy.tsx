import Lists from "@/views/pages/Lists/LIsts";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/lists/")({
  component: Lists,
});

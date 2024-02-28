import Forms from "@/views/pages/Forms/Forms";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/forms/")({
  component: Forms,
});

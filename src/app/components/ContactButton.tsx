// MyButton.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const ContactButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      "dark-purp":
        "text-dark-purp md:border-dark-purp border-transparent md:hover:!bg-dark-purp md:hover:text-white",
    },
  },
});

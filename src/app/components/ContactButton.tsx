// MyButton.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const ContactButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      "dark-purp":
        "text-dark-purp border-dark-purp hover:!bg-dark-purp hover:text-white",
    },
  },
});

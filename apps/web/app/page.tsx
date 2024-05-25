import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="Web app">
        hi there
      </Button>
    </div>
  );
}

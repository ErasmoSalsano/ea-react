import { UpperFooter } from "./UpperFooter";
import { LowerFooter } from "./LowerFooter";
export function Footer({ props }) {
  return (
    <footer className="main-footer-wrap">
      <UpperFooter />
      <LowerFooter />
    </footer>
  );
}

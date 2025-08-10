import { AppHeaderMobile } from "@/src/components/app-header/app-header-mobile";
import { AppHeaderNormal } from "@/src/components/app-header/app-header-normal";

export function AppHeader() {
  return (
    <>
      <AppHeaderNormal />
      <AppHeaderMobile />
    </>
  );
}

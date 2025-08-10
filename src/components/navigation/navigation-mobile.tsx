import { clsx } from "clsx";

import { Navigation } from "@/src/components/navigation/navigation";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import {
  isSidebarOpenSelector,
  toggleSidebar,
} from "@/src/store/sidebar/sidebar.slice";

export function NavigationMobile() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(isSidebarOpenSelector);

  return (
    <>
      <div
        className={clsx(
          `
            fixed top-16 bottom-0 left-0 z-20 h-full min-w-40 overflow-y-auto
            bg-gray-50 transition-transform duration-300
            sm:relative sm:inset-auto sm:translate-x-0 sm:bg-transparent
            dark:bg-gray-800
            sm:dark:bg-transparent
          `,
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
        <div
          className={`z-10 h-full p-2`}
          data-testid="navigation-mobile">
          <Navigation />
        </div>
      </div>

      {isSidebarOpen && (
        <button
          className={`
            absolute inset-0 z-10 block size-full h-screen bg-ink-gray/90
            sm:hidden
          `}
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        />
      )}
    </>
  );
}

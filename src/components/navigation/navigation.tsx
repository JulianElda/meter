"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAppDispatch } from "@/src/store/hooks";
import { closeSidebar } from "@/src/store/sidebar/sidebar.slice";

export function Navigation() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const navigation = [
    {
      links: [
        { href: "/area", title: "Area" },
        { href: "/base", title: "Base" },
        { href: "/color", title: "Color" },
        { href: "/length", title: "Length" },
        { href: "/speed", title: "Speed" },
        { href: "/temperature", title: "Temperature" },
        { href: "/volume", title: "Volume" },
        { href: "/weight", title: "Weight" },
      ],
      title: "Converters",
    },
    {
      links: [
        { href: "/currency", title: "Currency" },
        { href: "/guid", title: "GUID" },
        { href: "/lorem", title: "Lorem Ipsum" },
        { href: "/password", title: "Password" },
        { href: "/qrcode", title: "URL to QR code" },
      ],
      title: "Utilities",
    },
  ];

  return (
    <nav
      className={`min-w-40 text-lg`}
      data-testid="sidenav">
      <ul
        className="flex flex-col gap-6"
        data-testid="nav-group">
        {navigation.map((section) => (
          <li
            className="flex flex-col gap-2"
            key={section.title}>
            <div
              className={`
                font-heading font-medium text-ink-black select-none
                dark:text-ink-white
              `}
              data-testid="nav-group-title">
              {section.title}
            </div>
            <ul
              className={`
                flex flex-col gap-4 border-l-2 border-slate-100
                lg:border-slate-200
                dark:border-slate-600
              `}>
              {section.links.map((link) => (
                <li
                  className="relative select-none"
                  data-testid="nav-item"
                  key={link.href}>
                  <Link
                    className={clsx(
                      pathname === link.href &&
                        `
                          font-heading font-bold
                          dark:text-slate-200!
                        `,
                      `
                        block w-full pl-3 text-ink-black
                        before:pointer-events-none before:absolute
                        before:top-1/2 before:-left-1 before:hidden before:h-1.5
                        before:w-1.5 before:-translate-y-1/2 before:rounded-full
                        before:bg-slate-500
                        hover:text-slate-600 hover:before:block
                        dark:text-ink-white dark:before:bg-slate-500
                        dark:hover:text-ink-white
                      `
                    )}
                    href={link.href}
                    onClick={() => {
                      dispatch(closeSidebar());
                    }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

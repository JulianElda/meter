"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

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
      className="text-base min-w-40 sm:block hidden"
      data-testid="sidenav">
      <ul
        className="space-y-9"
        data-testid="nav-group">
        {navigation.map((section) => (
          <li key={section.title}>
            <div
              className="font-display font-medium text-slate-900 dark:text-white"
              data-testid="nav-group-title">
              {section.title}
            </div>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-600 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.links.map((link) => (
                <li
                  className="relative"
                  data-testid="nav-item"
                  key={link.href}>
                  <Link
                    className={clsx(
                      pathname === link.href &&
                        "font-heading font-bold dark:text-slate-200!",
                      "block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    )}
                    href={link.href}>
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

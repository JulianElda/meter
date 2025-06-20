"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navigation = [
    {
      title: "Converters",
      links: [
        { title: "Area", href: "/area" },
        { title: "Base", href: "/base" },
        { title: "Color", href: "/color" },
        { title: "Length", href: "/length" },
        { title: "Speed", href: "/speed" },
        { title: "Temperature", href: "/temperature" },
        { title: "Volume", href: "/volume" },
        { title: "Weight", href: "/weight" },
      ],
    },
    {
      title: "Utilities",
      links: [
        { title: "Currency", href: "/currency" },
        { title: "Lorem Ipsum", href: "/lorem" },
        { title: "GUID", href: "/guid" },
        { title: "Password", href: "/password" },
      ],
    },
  ];

  return (
    <nav
      className="text-base"
      data-testid="sidenav">
      <ul
        role="list"
        data-testid="nav-group"
        className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <div
              className="font-display font-medium text-slate-900 dark:text-white"
              data-testid="nav-group-title">
              {section.title}
            </div>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-600 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.links.map((link) => (
                <li
                  key={link.href}
                  data-testid="nav-item"
                  className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      pathname === link.href &&
                        "font-heading font-bold dark:text-slate-200!",
                      "block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    )}>
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

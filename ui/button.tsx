"use client";

import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <div className="navbar-end">
      <a className="btn">{children}</a>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathname = usePathname();
  const active = "bg-foreground rounded-t-xl px-4 py-1";
  return (
    <nav>
      <div
        className="flex gap-4  h-9 min-w-full bg-primary text-secondary-foreground border-b-8
      border-foreground tracking-wide font-medium"
      >
        <Link
          href="/Finance"
          className={pathname === "/Finance" ? active : "mx-2"}
        >
          FINANÇAS
        </Link>
        <Link href="/Task" className={pathname === "/Task" ? active : ""}>
          TAREFAS
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

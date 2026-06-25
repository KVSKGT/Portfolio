import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Moon, Sun, Download, Mail, Code, User, Briefcase } from "lucide-react";

export function CommandPalette({ resumeUrl, email }: { resumeUrl: string; email: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    setOpen(false);
  };

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="flex flex-col w-full h-full text-foreground"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              autoFocus
              placeholder="Type a command or search..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="px-2 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Command.Item
                onSelect={() => jumpTo("work")}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Command.Item>
              <Command.Item
                onSelect={() => jumpTo("research")}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Code className="mr-2 h-4 w-4" />
                Research
              </Command.Item>
              <Command.Item
                onSelect={() => jumpTo("skills")}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <User className="mr-2 h-4 w-4" />
                Skills & Education
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Actions"
              className="px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2"
            >
              <Command.Item
                onSelect={toggleTheme}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Moon className="mr-2 h-4 w-4 hidden dark:block" />
                <Sun className="mr-2 h-4 w-4 dark:hidden" />
                Toggle Theme
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(resumeUrl, "_blank");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(`mailto:${email}`, "_blank");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

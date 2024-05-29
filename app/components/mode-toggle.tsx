"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export function ThemeSwitch() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (
      <div className="p-1">
         {theme == "dark" ? (
            <Button onClick={() => setTheme("light")}>
               {" "}
               <MoonIcon className="w-5 h-5" />{" "}
            </Button>
         ) : (
            <Button onClick={() => setTheme("dark")}>
               <SunIcon className="w-5 h-5" />
            </Button>
         )}
      </div>
   );
}

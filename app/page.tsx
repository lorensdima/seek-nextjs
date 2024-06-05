"use client";
import { ThemeSwitch } from "./components/mode-toggle";
import SearchBar from "./components/searchbar";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
   return (
      <main>
         <ThemeSwitch />
         <Flex
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minHeight: "100vh",
            }}
         >
            <SearchBar />
         </Flex>
      </main>
   );
}

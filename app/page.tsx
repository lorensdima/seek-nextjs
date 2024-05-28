"use client";
import { ThemeSwitch } from "./components/mode-toggle";
import SearchBar from "./components/searchbar";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
   return (
      <main>
         <Flex class="mx-auto">
            <ThemeSwitch />
            <SearchBar
               onSearch={function (query: string): void {
                  throw new Error("Function not implemented.");
               }}
            />
         </Flex>
      </main>
   );
}

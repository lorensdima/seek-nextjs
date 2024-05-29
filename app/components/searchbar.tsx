import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, IconButton, TextArea, TextField } from "@radix-ui/themes";
import React, { useContext, useState } from "react";

interface SearchBarProps {
   onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
   const [query, setQuery] = useState("");

   const handleSearch = () => {
      onSearch(query);
      setQuery(""); // Clear input after search
   };

   return (
      <div className="flex items-center p-5">
         <form onSubmit={handleSearch} className="flex w-full">
            <Box maxWidth="300px">
               <TextField.Root placeholder="Search the docs…" size="3">
                  <TextField.Slot>
                     <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                  <TextField.Slot pr="3">
                     <IconButton size="2" variant="ghost">
                        <ArrowRightIcon height="16" width="16" />
                     </IconButton>
                  </TextField.Slot>
               </TextField.Root>
            </Box>
         </form>
      </div>
   );
};

export default SearchBar;

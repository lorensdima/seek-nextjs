import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, IconButton, TextField } from "@radix-ui/themes";
import { navigate } from "../actions";
import React from "react";

const SearchBar = () => {
   return (
      <div className="flex items-center p-5">
         <form action={navigate} className="flex w-full">
            <Box maxWidth="300px">
               <TextField.Root
                  placeholder="Search the docs…"
                  size="3"
                  name="query"
               >
                  <TextField.Slot>
                     <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                  <TextField.Slot pr="3">
                     <IconButton type="submit" size="2" variant="ghost">
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

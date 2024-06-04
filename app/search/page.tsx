"use client";

import { Box, Card, Inset, Text, Strong, Grid } from "@radix-ui/themes";
import { title } from "process";
import { useEffect, useState } from "react";

export default function Home() {
   const appCard = (data: {}) => {
      return (
         <Box maxWidth="240px">
            <Card size="2">
               <Inset clip="padding-box" side="top" pb="current">
                  <Card size="1">
                     <img
                        src={data.icon}
                        alt="Bold typography"
                        style={{
                           display: "block",
                           width: "100%",
                           backgroundColor: "var(--gray-5)",
                        }}
                     />
                  </Card>
               </Inset>
               <Strong>{data.title}</Strong>
               <Text
                  as="p"
                  size="3"
                  style={{
                     maxHeight: "100px",
                     overflowY: "auto",
                  }}
               >
                  {data.description}
               </Text>
            </Card>
         </Box>
      );
   };

   const [data, setData] = useState([]);

   const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <main>
         {data && (
            <Grid columns={{ initial: "1", md: "5" }} gap="3" width="auto">
               {data.map((item) =>
                  appCard({
                     title: item.title,
                     icon: item.icon,
                     description: item.description,
                  })
               )}
            </Grid>
         )}
      </main>
   );
}

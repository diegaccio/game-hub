import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQueryParams } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";

function App() {
  const [queryParams, setQueryParams] = useState<GameQueryParams>(
    {} as GameQueryParams
  );

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside  main"` }} //lg > 992px
        templateColumns={{
          base: "1fr", //1fr takes al the space left
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(search) => setQueryParams({ ...queryParams, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) =>
                setQueryParams({ ...queryParams, genreId: genre.id })
              }
              selectedGenreId={queryParams.genreId ?? 0}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQueryParams={queryParams} />
            <HStack marginBottom={5} spacing={5}>
              <PlatformSelector
                selectedPlatformId={queryParams.platformId}
                onSelectPlatform={(platform) =>
                  setQueryParams({ ...queryParams, platformId: platform?.id })
                }
              />
              <SortSelector
                selectedSort={queryParams.ordering}
                onSelectSort={(ordering) =>
                  setQueryParams({ ...queryParams, ordering })
                }
              />
            </HStack>
          </Box>
          <GameGrid queryParams={queryParams}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

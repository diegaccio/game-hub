import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQueryParams } from "./hooks/useGames";

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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) =>
                setQueryParams({ ...queryParams, genre })
              }
              selectedGenre={queryParams.genre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={queryParams.platform}
            onSelectPlatform={(platform) =>
              setQueryParams({ ...queryParams, platform })
            }
          ></PlatformSelector>
          <GameGrid queryParams={queryParams}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

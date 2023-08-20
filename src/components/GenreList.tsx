import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import getCroppedImgURL from "../services/img-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(
    (select) => select.gameQuery.genreId
  );
  const setSelectedGenreId = useGameQueryStore((select) => select.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImgURL(genre.image_background)}
              />
              <Stack>
                <Button
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize="lg"
                  variant="link"
                  textAlign="justify"
                  whiteSpace="pre-line"
                >
                  {genre.name}
                </Button>
              </Stack>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

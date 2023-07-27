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

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

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
                  onClick={() => onSelectGenre(genre)}
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

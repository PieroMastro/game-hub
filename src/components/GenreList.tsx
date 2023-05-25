import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImgURL from "../services/img-url";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Img
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgURL(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

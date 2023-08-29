import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  const videoData = data?.results[0];

  return (
    <video src={videoData?.data[480]} poster={videoData?.preview} controls />
  );
};

export default GameTrailer;

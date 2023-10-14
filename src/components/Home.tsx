import { FC } from "react";
import { useLoaderData } from "react-router-dom";

type HomeProps = Record<string, never>;

export const Home: FC<HomeProps> = () => {
  const { title } = useLoaderData() as { title: string };

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

import { FC } from "react";

type HomeProps = Record<string, never>;

export const Home: FC<HomeProps> = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

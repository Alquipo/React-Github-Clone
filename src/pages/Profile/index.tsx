import React from "react";
import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"alquipo"}
            name={"Alquipo Neto"}
            avatarUrl={
              "https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4"
            }
            followers={854}
            following={7}
            company={"Rocketseat"}
            location={"Itaperuna, Brazil"}
            email={"alquiponeto@outlook.com.br"}
            blog={"linkdin.com/in/alquipone"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"alquiponeto"}
                  reponame={"youtube-content"}
                  desciption={"dsfgsdgfsd"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={6}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

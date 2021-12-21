import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-r, zYellow, zPink, zGreen)"
    bgClip="text"
    flex="none"
  >
    {/* Image bothered from email signature */}
    <img
      src="https://ci3.googleusercontent.com/proxy/IOEUZweWfU-zMfeNBk-kobzC-_cSQdC5JcYDOYecm7-9luqBFJsX6cuvbeQm4M_24RK8W9yNYMuRbmcQd8NvjzGiw8SdMLwS5UPLpiEBR7nWxzfspWO7-SL2po88v96hGPQUAC_rSvJYG7k9MaMZftj4rVcINprVIjqGlO3Sp4icVLT8p8kK1I56UOmzj3LS4BMLR5uHjH8JTBnhFA7uhwg=s0-d-e1-ft#https://firebasestorage.googleapis.com/v0/b/denly-8ab7d.appspot.com/o/Zenly-Popsicle.gif?alt=media&token=d3571c18-fbe1-48b4-9a6d-cab5176413e6"
      height="70"
      width="70"
    />
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'Fernando Beck super chat',
};

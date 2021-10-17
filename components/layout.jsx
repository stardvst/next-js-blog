import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import Image from './image';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <Container m="3rem auto 6rem" p="3rem auto 6rem">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex as="header" flexDir="column" align="center">
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
              rounded="full"
            />
            <Heading
              as="h1"
              fontSize="2.5rem"
              lineHeight="1.2"
              fontWeight="900"
              letterSpacing="-0.05rem"
              m="1rem 0"
            >
              {name}
            </Heading>
          </>
        ) : (
          <>
            <Image
              src="/images/profile.jpg"
              height={108}
              width={108}
              alt={name}
              rounded="full"
            />
            <Heading as="h2" fontSize="1.5rem" lineHeight="1.4" m="1rem 0">
              <Link href="/" passHref>
                <ChakraLink>{name}</ChakraLink>
              </Link>
            </Heading>
          </>
        )}
      </Flex>

      <Box>{children}</Box>

      {!home && (
        <Box m="3rem 0 0">
          <Link href="/">
            <ChakraLink color="#0070f3">← Back to home</ChakraLink>
          </Link>
        </Box>
      )}
    </Container>
  );
}

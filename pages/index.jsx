import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <VStack
        fontSize="1.2rem"
        spacing="6"
        alignItems="flex-start"
        mt="1rem"
        mb="2.5rem"
      >
        <Text>[Your Self Introduction]</Text>
        <Text>
          (This is a sample website - you’ll be building a site like this on{' '}
          <ChakraLink color="#0070f3" isExtenal href="https://nextjs.org/learn">
            our Next.js tutorial
          </ChakraLink>
          .)
        </Text>
      </VStack>

      <Box>
        <Heading as="h2" fontSize="1.5rem" lineHeight="8" m="1rem 0">
          Blog
        </Heading>
        <UnorderedList listStyleType="none" m="0" p="0">
          {allPostsData.map(({ id, date, title }) => (
            <ListItem m="0 0 1.25rem" fontSize="1.1rem">
              <Link href={`/posts/${id}`} passHref>
                <ChakraLink variant="ghost" color="#0070f3">
                  {title}
                </ChakraLink>
              </Link>
              <Text textColor="#666">
                <Date dateString={date} />
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

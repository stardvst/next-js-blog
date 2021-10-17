import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box>
        <Heading
          as="h1"
          fontSize="2rem"
          lineHeight="10"
          fontWeight="900"
          letterSpacing="-0.05rem"
          mt="1rem"
        >
          {postData.title}
        </Heading>
        <Text textColor="#666" m="1rem 0">
          <Date dateString={postData.date} />
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

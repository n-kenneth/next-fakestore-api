import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keywords: string;
}

const PageHead = ({ title, description, keywords }: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);

export default PageHead;

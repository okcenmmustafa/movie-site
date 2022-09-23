// component
import NotFoundPage from "features/app/NotFoundPage";

export async function getStaticProps() {
  try {
    return {
      props: {
        test: "test",
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error(e);

    return {
      revalidate: 10,
    };
  }
}

export default function CustomError({ test }) {
  return <NotFoundPage />;
}

export const dynamic = "error",//'force-static',
  fetchCache = 'force-cache',
  revalidate = false;

export default async function Page() {
  return (
    <>
      last rendered: {(new Date()).getTime()}
    </>
  );
}

'use client'
// type Props = {
//   title?: string;
// };

export default function Head() {
  const title = "Timem 🚀";
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Time management app" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

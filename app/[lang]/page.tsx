import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import { promises as fs } from "fs";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  const file = await fs.readFile(
    process.cwd() + "/data/jmdict-eng-common-3.5.0.json",
    "utf8",
  );
  const data = JSON.parse(file);

  console.log(data.words[0].kanji[0].text);

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-gray-500'>{page.home.description}</p>
        <h2>{data.words[0].kanji[0].text}</h2>
        <Image
      src="/next.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
    </section>
  )
}

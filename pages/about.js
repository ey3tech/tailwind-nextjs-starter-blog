import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import { getFileBySlug, getFilesFromDir } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await Promise.all(
    getFilesFromDir('data/authors').map(async (author) => {
      return await getFileBySlug('authors', [`${author.split('.', 1)[0]}`])
    })
  )
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="space-y-2 md:space-y-5 ">
        <PageSEO title={`About Me`} description={`About me`} />

        {authorDetails.map((author) => {
          return (
            <MDXLayoutRenderer
              key={author.name}
              layout={DEFAULT_LAYOUT}
              mdxSource={author.mdxSource}
              frontMatter={author.frontMatter}
            />
          )
        })}
      </div>
    </>
  )
}

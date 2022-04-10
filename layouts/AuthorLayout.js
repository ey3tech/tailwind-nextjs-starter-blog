import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, website } =
    frontMatter
  console.log(`from layout: ${frontMatter.github}`)

  return (
    <>
      <div className="items-start space-y-2 xl:grid p-10 xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 dark:bg-gray-800 bg-gray-100 rounded-xl">
        <div className="flex flex-col items-center pt-8">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-primary-500 dark:text-primary-400">
            {name}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            {/* <SocialIcon kind="github" href={github} /> */}
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  )
}

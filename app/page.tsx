import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        I Will Work In SpaceX
      </h1>
      <p className="mb-4">
          {`I'm from China, a software engineering who want to work in SpaceX.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

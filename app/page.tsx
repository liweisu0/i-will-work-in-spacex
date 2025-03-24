import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        I Will Work In SpaceX
      </h1>
      <p className="mb-4">
        {`I'm a developer in China, and have great passion about what SpaceX now doing.
        Without any hesitate, I launched this project on 2025.3.24, to record my
        journey to SpaceX.
        The blog below is all the things I do to achieve this goal, so enjoy it.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

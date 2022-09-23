import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post
        author="Rosiele David"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ex, recusandae obcaecati magnam molestiae reiciendis ut neque dolorum, voluptates maiores laboriosam maxime explicabo veritatis architecto natus. Quis veniam animi hic?"
      />
      <Post
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />
    </div>
  )
}

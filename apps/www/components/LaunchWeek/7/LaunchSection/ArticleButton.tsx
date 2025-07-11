// import { NewspaperIcon } from '@heroicons/react/outline' // Disabled: missing module/type
import { Article } from '../../types'

const ArticleButton = (props: Article) => {
  return (
    <div className="mr-2 mb-2 inline-block">
      <button
        className="
            bg-background text-foreground 
            hover:bg-background-overlay 
            border-default 
            flex items-start gap-3 rounded-md 
            border p-3 
            px-6 drop-shadow-sm transition"
      >
        <div className="w-6">
          {/* Removed: <NewspaperIcon /> (missing icon) */}
        </div>
        <div className="flex flex-col items-start gap-0">
          <span className="text-base">{props.title}</span>
          <span className="text-foreground-light text-sm">{props.description}</span>
        </div>
      </button>
    </div>
  )
}

export default ArticleButton

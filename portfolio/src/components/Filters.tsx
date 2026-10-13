import { filterTags } from '../data/projects'
import type { Filter } from '../types'

type FiltersProps = {
  selectedTag: Filter
  setSelectedTag: (filter: Filter) => void
}

const Filters = ({ selectedTag, setSelectedTag }: FiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 px-4 mb-6">
      {filterTags.map((tag) => (
        <button
          type="button"
          key={tag}
          aria-pressed={selectedTag === tag}
          onClick={() => setSelectedTag(tag)}
          className={`min-h-11 cursor-pointer rounded-full border-2 px-4 text-sm font-bold transition duration-200 hover:-translate-y-0.75 ${
            selectedTag === tag
              ? 'bg-terracotta border-terracotta text-surface'
              : 'border-ink text-ink hover:bg-terracotta hover:border-terracotta hover:text-surface'
          }`}>
          {tag}
        </button>
      ))}
    </div>
  )
}

export default Filters

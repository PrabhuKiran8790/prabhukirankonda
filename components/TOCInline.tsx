import { Toc } from './remark-toc-headings'
export interface TOCInlineProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          style={{ listStyleType: 'none' }}
          key={heading.value}
          className={`${heading.depth >= indentDepth && 'ml-8'} leading-normal`}
        >
          <a href={heading.url} className="text-blue-600 dark:text-sky-500 no-underline">
            {heading.value}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      {asDisclosure ? (
        <details open className="bg-gray-200 dark:bg-zinc-800/95 rounded-lg py-2">
          <summary className="ml-3 text-lg lg:text-xl font-bold cursor-pointer">
            Table of Contents
          </summary>
          <div className="ml-2 -mb-6 -mt-4">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </div>
  )
}

export default TOCInline

const ArticleTag = ({ tag }: { tag: string }) => {
    const tagColors: Record<string, string> = {
        tecnologia: "bg-sky-100 dark:bg-sky-900 text-sky-500 dark:text-sky-400",
        startup: "bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-400",
        AI: "bg-yellow-100 dark:bg-yellow-900 text-yellow-500 dark:text-yellow-400",
        negocios: "bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-400",
        economia: "bg-teal-100 dark:bg-teal-900 text-teal-500 dark:text-teal-400",
        ciencia: "bg-indigo-100 dark:bg-indigo-900 text-indigo-500 dark:text-indigo-400",
        financas: "bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-400"
    }
  return (
    <span className={`${tagColors[tag]} rounded-sm px-2 py-1 text-xs `}>#{tag}</span>
  );
};

export default ArticleTag;
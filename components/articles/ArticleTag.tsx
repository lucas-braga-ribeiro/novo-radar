const ArticleTag = ({ tag }: { tag: string }) => {
    const tagColors = {
        tecnologia: "red",
        startup: "blue",
        AI: "green",
        negocios: "purple",
        economia: "green",
        ciencia: "indigo",
        financas: "orange"
    }
  return (
    <span className={`bg-${tagColors[tag as keyof typeof tagColors]}-100 dark:bg-${tagColors[tag as keyof typeof tagColors]}-900 rounded-sm px-2 py-1 text-${tagColors[tag as keyof typeof tagColors]}-500 dark:text-${tagColors[tag as keyof typeof tagColors]}-400 text-xs `}>#{tag}</span>
  );
};

export default ArticleTag;
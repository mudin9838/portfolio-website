export default function Articles() {
  const articles = [
    {
      title: "One EF Core tip that instantly improves performance",
      description:
        "A practical EF Core performance tip explaining why projections outperform Include().",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7418228566670131200/",
    },
    {
      title: "Controllers are not the place for decisions",
      description:
        "Why business logic does not belong in controllers and how to structure clean ASP.NET Core applications.",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/posts/muhdin-mussema-5b46b0208_dotnet-aspnetcore-cleanarchitecture-activity-7416410098509496321-_rbV",
    },
    {
      title: "FluentValidation: Keeping validation out of controllers",
      description:
        "How FluentValidation improves separation of concerns in ASP.NET Core.",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/posts/muhdin-mussema-5b46b0208_dotnet-aspnetcore-fluentvalidation-activity-7408739910112714754-eU3N",
    },
    {
      title: "Scrutor: a small NuGet package that cleaned up my ASP.NET Core DI",
      description:
        "Using Scrutor to simplify dependency injection registration in ASP.NET Core.",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/posts/muhdin-mussema-5b46b0208_dotnet-aspnetcore-nuget-activity-7407368544985759745-RzSq",
    },
  ];

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Articles</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>

            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>

            <span className="mt-2 inline-block text-sm font-medium underline">
              Read on {article.platform} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

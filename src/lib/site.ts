export function getBasePath(): string {
  if (process.env.GITHUB_PAGES !== "true") {
    return "";
  }

  const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  if (!owner || !repository || repository.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return "";
  }

  return `/${repository}`;
}

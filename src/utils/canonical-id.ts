export function createCanonicalId(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findBestMatch(
  title: string,
  candidates: Array<{ id: string; title: string; poster?: string }>
): { id: string; title: string; poster?: string } | undefined {
  const normalizedTitle = createCanonicalId(title);

  return candidates.find((candidate) => {
    const candidateKey = createCanonicalId(candidate.title);
    return candidateKey === normalizedTitle || candidateKey.includes(normalizedTitle) || normalizedTitle.includes(candidateKey);
  });
}

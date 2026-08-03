export function $api(request, opts) {
  const config = useRuntimeConfig();

  return $fetch<T>(request, {
    baseURL: config.public.apiBase,
    ...opts,
    headers: {
      "X-Site-Id": (config.public.siteId) || "smile",
      ...(opts?.headers),
    },
  });
}

/*
 * @Author: 谭洁莹
 * @Date: 2026-07-28 17:03:15
 * @LastEditTime: 2026-07-29 10:13:59
 * @FilePath: /app/composables/useApi.ts
 * @Description: 统一封装使用API接口
 */
export function $api<T = unknown>(request: string, opts: Parameters<typeof $fetch<T>>[1] = {}) {
  const config = useRuntimeConfig();

  return $fetch<T>(request, {
    baseURL: config.public.apiBase,
    ...opts,
    headers: {
      "X-Site-Id": (config.public.siteId as string) || "endoscopy",
      ...(opts?.headers as Record<string, string> | undefined),
    },
  });
}

const BASE_URL = "https://cms.cmermedical.com.hk";

export async function $api(request, opts = {}) {
  // 1. 解构提取 params 和其余 opts
  const { params, ...fetchOpts } = opts;

  // 2. 拼接完整的 Base URL
  let fullUrl = request.startsWith("http")
    ? request
    : `${BASE_URL.replace(/\/$/, "")}/${request.replace(/^\//, "")}`;

  // 3. 处理 Query 参数 (params)
  if (params && typeof params === "object") {
    // 过滤掉 undefined 或 null 的参数
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        searchParams.append(key, params[key]);
      }
    });

    const queryString = searchParams.toString();
    if (queryString) {
      // 判断原 URL 是否已有 '?'，避免重复拼接
      fullUrl += (fullUrl.includes("?") ? "&" : "?") + queryString;
    }
  }

  // 4. 发起原生 fetch 请求
  const res = await fetch(fullUrl, {
    ...fetchOpts,
    headers: {
      "X-Site-Id": "smile",
      ...(fetchOpts?.headers || {}),
    },
  });

  // 5. 错误处理与 JSON 解析
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

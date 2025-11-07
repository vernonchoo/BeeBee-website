import axios, { type AxiosInstance, type AxiosError, type AxiosRequestConfig } from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
const ENABLE_MOCK = import.meta.env.VITE_ENABLE_MOCK === 'true'

// 创建 axios 实例
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证 token
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: AxiosError) => {
    const errorMessage = error.response?.data || error.message || 'Network Error'

    // 统一错误处理
    if (error.response?.status === 401) {
      // 处理未授权
      console.error('Unauthorized')
    } else if (error.response?.status === 404) {
      console.error('Resource not found')
    } else if (error.response?.status === 500) {
      console.error('Server error')
    }

    return Promise.reject(errorMessage)
  }
)

// 取消请求的控制器
export const createCancelToken = () => {
  const controller = new AbortController()
  return {
    signal: controller.signal,
    cancel: () => controller.abort(),
  }
}

// 重试逻辑
export async function retryRequest<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries === 0) throw error
    await new Promise((resolve) => setTimeout(resolve, delay))
    return retryRequest(fn, retries - 1, delay * 2)
  }
}

export { apiClient, ENABLE_MOCK }
export type { AxiosRequestConfig }


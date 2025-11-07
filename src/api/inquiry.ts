import { apiClient, ENABLE_MOCK } from '@/utils/api-client'
import type { InquiryPayload, InquiryResponse } from '@/types/inquiry'

export async function submitInquiry(data: InquiryPayload): Promise<InquiryResponse> {
  if (ENABLE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          id: `inquiry_${Date.now()}`,
          message: 'Inquiry submitted successfully',
        })
      }, 500)
    })
  }

  return apiClient.post('/api/v1/inquiries', data)
}


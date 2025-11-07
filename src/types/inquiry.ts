export interface InquiryPayload {
  parentName: string
  phone: string
  email?: string
  childAge: number
  routeId?: string
  intendedDate?: string
  note?: string
}

export interface InquiryResponse {
  success: boolean
  id: string
  message?: string
}


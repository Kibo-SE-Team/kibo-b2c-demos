import { NextApiRequest } from 'next'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const purchaseLocationCookieName = publicRuntimeConfig.storeLocationCookie

const getAdditionalHeader = (req: NextApiRequest) => {
  const forwardedForHeader = req?.headers['x-forwarded-for']
  if (!forwardedForHeader) {
    return {}
  }

  const forwardedFor = forwardedForHeader.toString().split(',')[0]

  // add additional headers here
  const headers: any = {
    'x-forwarded-for': forwardedFor,
  }
  if (req.cookies?.[purchaseLocationCookieName]) {
    const location = Buffer.from(req.cookies[purchaseLocationCookieName] || '', 'base64')
      .toString()
      .replaceAll('"', '')
    headers['x-vol-purchase-location'] = location
  }

  return headers
}

export default getAdditionalHeader

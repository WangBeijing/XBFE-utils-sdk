/**
 * 手机号
 */
export function isMobile(phone) {
    return /^1[3-8]\d{9}/.test(phone)
}
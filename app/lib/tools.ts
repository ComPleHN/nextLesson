/**
 * 这是一个防抖函数的实现
 * 防抖函数的作用是：在事件被触发 n 秒后再执行回调函数，如果在 n 秒内再次触发，则重新计时
 * @param func
 * @param delay
 */
export function debounce<T extends (...args: never[]) => void>(func: T, delay = 500): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
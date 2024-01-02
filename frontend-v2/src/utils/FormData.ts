export const createFormData = (props: Record<string, string>) => {
    const data = new FormData()
    Object.entries(props).forEach(([key, value]) => data.append(key, value))
    return data
}